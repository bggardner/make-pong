/**
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Utility functions for generating executable code from
 * Blockly code.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.CodeGenerator');
goog.provide('Blockly.Generator');

goog.require('Blockly.Block');


/**
 * Name space for the generator singleton.
 */
Blockly.Generator = {};

/**
 * Category to separate generated function names from variables and procedures.
 */
Blockly.Generator.NAME_TYPE = 'generated_function';

/**
 * Database of code generators, one for each language.
 */
Blockly.Generator.languages = {};

/**
* indexOf does not work in IE < 9
*/
var include = Array.prototype.indexOf ?
    function(arr, obj) { return arr.indexOf(obj) !== -1; } :
    function(arr, obj) {
        for (var i = -1, j = arr.length; ++i < j;)
            if (arr[i] === obj) return true;
        return false;
};

/**
 * Return the code generator for the specified language.  Create one if needed.
 * @param {string} name The language's name.
 * @return {!Blockly.CodeGenerator} Generator for this language.
 */
Blockly.Generator.get = function(name) {
  if (!(name in Blockly.Generator.languages)) {
    var generator = new Blockly.CodeGenerator(name);
    Blockly.Generator.languages[name] = generator;
  }
  return Blockly.Generator.languages[name];
};

/**
 * Generate code for all blocks in the workspace to the specified language.
 * @param {string} name Language name (e.g. 'JavaScript').
 * @param {boolean} paddleBot If true, AI is implemented but can be overwritten with the AI block.
 * @return {string} Generated code.
 *
 */
Blockly.Generator.workspaceToCode = function(name, paddleBot) {
  var code = [];

  var generator = Blockly.Generator.get(name);
  // getTopBlocks meaans that if blocks are connected, we only see the top block
  var blocks = Blockly.mainWorkspace.getTopBlocks(true);

  // Special blocks whose generated python code need to be put in specific places
  var initBlocks = { pong_windowSize: false, pong_title: false, pong_font: false,
                     pong_ball: false, pong_board: false,
                     pong_paddles: false, pong_paddles2: false,
                     pong_ai: false };
  var eventBlocks = { pong_collision: [],
                      pong_goal1: [], pong_goal2: [] };
  var blocksKeyPressed = [];
  if (typeof (paddleBot) === undefined) {
    paddleBot = true;
  }

  code.push(generator.header());
  code.push('# Initialisation ---');
  // Go through all the blocks on the workspace
  for (var x = 0, block; block = blocks[x]; x++) {
  	// Init blocks
    if (initBlocks.hasOwnProperty(block.type)) {
    	var line = generator.blockToCode(block);

    	if ((block.type === 'pong_paddles') && (line.indexOf('Paddle2') != -1)) {
            initBlocks['pong_paddles2'] = true;
        } else if (block.type === 'pong_ai') {
            if (line.indexOf('False') !== -1) {
                paddleBot = false;
            } else {
                paddleBot = true;
            }

            // Reset the line as we don't want this code to appear.
            line = '';
    	} else {
            initBlocks[block.type] = true;
        }


      code.push(line);
      blocks.splice(x, 1); // so we don't write this code twice
      x--; // so that we don't skip an element in the array

    //check if 'if' block contains an event
    }	else if (block.type == 'controls_if' || block.type == 'controls_if_else') {
    	var line = generator.blockToCode(block);
    	if (line.indexOf('collision') != -1) {
    		eventBlocks['pong_collision'].push(block);
    		blocks.splice(x, 1);
    		x--; //so that we don't skip an element in the array.

      } else if (line.indexOf('goal') != -1) {
        if (line.indexOf('player1') != -1) {eventBlocks['pong_goal1'].push(block);}
        else if (line.indexOf('player2') != -1) {eventBlocks['pong_goal2'].push(block);}
        else {
          eventBlocks['pong_goal1'].push(block);
          eventBlocks['pong_goal2'].push(block);
        }

        blocks.splice(x, 1);
        x--; //so that we don't skip an element in the array.

      } else if (line.indexOf('event.key') != -1) {
        blocksKeyPressed.push(block);
        blocks.splice(x, 1);
        x--; //so that we don't skip an element in the array.
      }
    } else if (block.type === 'pong_goal' || block.type === 'pong_collision' || block.type === 'pong_keyPressed') {
      blocks.splice(x, 1);
      x--; //so that we don't skip an element in the array.
    }
  }
  code.push(generator.defaultInit(initBlocks));
  code.push(generator.extraInit());
  code.push(generator.keyPressedInit(blocksKeyPressed.length));

  code.push('# Custom initialisation code');

  for (var x = 0, block; block = blocks[x]; x++) {

    var line = generator.blockToCode(block);
    if (line.indexOf('random') !== -1)
    {
      code.push(Blockly.Generator.prefixLines(line, ''));
    }
  }

  // Game loop
  var setterPaddle1Refresh = false;
  var setterPaddle2Refresh = false;
  var setterBallRefresh = false;
  var twoPlayers = true;
  code.push('# Game loop ---');
  code.push(generator.loopFirst());

  var keyPressed = (blocksKeyPressed.length != 0);
  var lines = [];
  for (var i = 0; i < blocksKeyPressed.length; i++) {
    lines.push(generator.blockToCode(blocksKeyPressed[i]));
  }
  code.push(generator.readInput(twoPlayers, keyPressed, lines));
  code.push(generator.clampCode());
  code.push('        # Custom code');

  for (var x = 0, block; block = blocks[x]; x++) {

    if (line.indexOf('random') !== -1)
    {
      continue;
    }
    
    var line = generator.blockToCode(block);
    if (line instanceof Array) {
      // Value blocks return tuples of code and operator order.
      // Top-level blocks don't care about operator order.
      line = line[0];
    }
    if (line) {
      if (block.outputConnection && generator.scrubNakedValue) {
        // This block is a naked value.  Ask the language's code generator if
        // it wants to append a semicolon, or something.
        line = generator.scrubNakedValue(line);
      }
      code.push(Blockly.Generator.prefixLines(line, '        '));
    }
  }

  //if win code
  code.push(generator.win());

  // Collision events

  // Split collision into three stages - Init and finish are always the same, then the custom code
  // is sandwiched in between.

  code.push('        # Check paddle-ball collision');

  // Paddle 1
  code.push(generator.collisionPaddle1Init());
  var all_collision_blocks = eventBlocks['pong_collision'];
  for (var x = 0; x < all_collision_blocks.length; x++) {
    var block_collision = all_collision_blocks[x];
    code.push(generator.collisionPaddle1CustomCode(generator.blockToCode(block_collision)));
  }
  code.push(generator.collisionPaddle1Finish());

  // Paddle 2
  code.push(generator.collisionPaddle2Init());
  for (var x = 0; x < all_collision_blocks.length; x++) {
    var block_collision = all_collision_blocks[x];
    code.push(generator.collisionPaddle2CustomCode(generator.blockToCode(block_collision)));
  }
  code.push(generator.collisionPaddle2Finish());

  // Goal events
  code.push('        # Check goal');
  var all_goal1_blocks = eventBlocks['pong_goal1'];
  var all_goal2_blocks = eventBlocks['pong_goal2'];

  code.push(generator.goalPlayer1());
  //var goal1_added = (all_goal1_blocks.length != 0);
  for (var x = 0; x < all_goal1_blocks.length; x++) {
    var block_goal1 = all_goal1_blocks[x];
    code.push(generator.goalPlayer1CustomCode(generator.blockToCode(block_goal1)));
  }

  code.push(generator.goalPlayer2());
  //var goal2_added = (all_goal2_blocks.length != 0);
  for (var x = 0; x < all_goal2_blocks.length; x++) {
    var block_goal2 = all_goal2_blocks[x];
    code.push(generator.goalPlayer2CustomCode(generator.blockToCode(block_goal2)));
  }

  code.push('        # Collision with walls');
  code.push(generator.collisionWall());
  code.push(generator.paddleBot(paddleBot));
  code.push(generator.startGame());
  code.push(generator.keyPressedWinReset(blocksKeyPressed.length));
  code.push(generator.startGameContinued());

  // Rendering
  code.push(generator.renderObjects());

  code = code.join('\n');  // Blank line between each section.
  code = generator.finish(code);
  // Final scrubbing of whitespace.
  code = code.replace(/^\s+\n/, '');
  code = code.replace(/\n\s+$/, '\n');
  code = code.replace(/[ \t]+\n/g, '\n');
  return code;
};

// The following are some helpful functions which can be used by multiple
// languages.

/**
 * Prepend a common prefix onto each line of code.
 * @param {string} text The lines of code.
 * @param {string} prefix The common prefix.
 * @return {string} The prefixed lines of code.
 */
Blockly.Generator.prefixLines = function(text, prefix) {
  return prefix + text.replace(/\n(.)/g, '\n' + prefix + '$1');
};

/**
 * Separates event block code from the if statement.
 * @param {string} text Code generated by block
 * @param {number} index Which line to return
 * @return {string} Line of code
 */
Blockly.Generator.pickLine = function(text, index) {
  if (index == 1) {
  	var firstLine = text.substring(0, text.indexOf('\n'));
  	return firstLine;
  } else {
  	var secondLine = text.substring(text.indexOf('\n') + 1);
  	return secondLine;
  }
};
/**
 * Recursively spider a tree of blocks, returning all their comments.
 * @param {!Blockly.Block} block The block from which to start spidering.
 * @return {string} Concatenated list of comments.
 */
Blockly.Generator.allNestedComments = function(block) {
  var comments = [];
  var blocks = block.getDescendants();
  for (var x = 0; x < blocks.length; x++) {
    var comment = blocks[x].getCommentText();
    if (comment) {
      comments.push(comment);
    }
  }
  // Append an empty string to create a trailing line break when joined.
  if (comments.length) {
    comments.push('');
  }
  return comments.join('\n');
};

/**
 * Class for a code generator that translates the blocks into a language.
 * @param {string} name Language name of this generator.
 * @constructor
 */
Blockly.CodeGenerator = function(name) {
  this.name_ = name;
  this.RESERVED_WORDS_ = '';
};

/**
 * Generate code for the specified block (and attached blocks).
 * @param {Blockly.Block} block The block to generate code for.
 * @return {string|!Array} For statement blocks, the generated code.
 *     For value blocks, an array containing the generated code and an
 *     operator order value.  Returns '' if block is null.
 */
Blockly.CodeGenerator.prototype.blockToCode = function(block) {
  if (!block) {
    return '';
  }
  if (block.disabled) {
    // Skip past this block if it is disabled.
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    return this.blockToCode(nextBlock);
  }

  var func = this[block.type];
  if (!func) {
    throw 'Language "' + this.name_ + '" does not know how to generate code ' +
        'for block type "' + block.type + '".';
  }
  var code = func.call(block);
  /* TODO: HORRIBLE HORRIBLE HACK
     For some reason pong functions are returning arrays but
     values get converted into strings here*/
  if (!(code instanceof Array)) {
  	 var str = code + '';
    str = str.split(',', 2);
    if (str[1] >= '0' && str[1] <= '9') { // second argument an int == array passed as string
    	code = str;
    }
  }
  if (code instanceof Array) {
    // Value blocks return tuples of code and operator order.
    return [this.scrub_(block, code[0]), code[1]];
  } else {
    return this.scrub_(block, code);
  }
};

/**
 * Generate code representing the specified value input.
 * @param {!Blockly.Block} block The block containing the input.
 * @param {string} name The name of the input.
 * @param {number} order The maximum binding strength (minimum order value)
 *     of any operators adjacent to "block".
 * @return {string} Generated code or '' if no blocks are connected or the
 *     specified input does not exist.
 */
Blockly.CodeGenerator.prototype.valueToCode = function(block, name, order) {
  if (isNaN(order)) {
    throw 'Expecting valid order from block "' + block.type + '".';
  }
  var targetBlock = block.getInputTargetBlock(name);
  if (!targetBlock) {
    return '';
  }
  var tuple = this.blockToCode(targetBlock);
  if (tuple === '') {
    // Disabled block.
    return '';
  }
  if (!(tuple instanceof Array)) {
    // Value blocks must return code and order of operations info.
    // Statement blocks must only return code.
    throw 'Expecting tuple from value block "' + targetBlock.type + '".Main block: ' + block.type;
  }
  var code = tuple[0];
  var innerOrder = tuple[1];
  if (isNaN(innerOrder)) {
    throw 'Expecting valid order from value block "' + targetBlock.type + '".';
  }
  if (code && order <= innerOrder) {
    // The operators outside this code are stonger than the operators
    // inside this code.  To prevent the code from being pulled apart,
    // wrap the code in parentheses.
    // Technically, this should be handled on a language-by-language basis.
    // However all known (sane) languages use parentheses for grouping.
    code = '(' + code + ')';
  }
  return code;
};

/**
 * Generate code representing the statement.  Indent the code.
 * @param {!Blockly.Block} block The block containing the input.
 * @param {string} name The name of the input.
 * @return {string} Generated code or '' if no blocks are connected.
 */
Blockly.CodeGenerator.prototype.statementToCode = function(block, name) {
  var targetBlock = block.getInputTargetBlock(name);
  var code = this.blockToCode(targetBlock);
  if (!goog.isString(code)) {
    // Value blocks must return code and order of operations info.
    // Statement blocks must only return code.
    throw 'Expecting code from statement block "' + targetBlock.type + '".';
  }
  if (code) {
    code = Blockly.Generator.prefixLines(/** @type {string} */ (code), '  ');
  }
  return code;
};

/**
 * Add one or more words to the list of reserved words for this language.
 * @param {string} words Comma-separated list of words to add to the list.
 *     No spaces.  Duplicates are ok.
 */
Blockly.CodeGenerator.prototype.addReservedWords = function(words) {
  this.RESERVED_WORDS_ += words + ',';
};
