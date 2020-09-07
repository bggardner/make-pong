// This file was automatically generated from alerts.soy.
// Please don't edit this file by hand.

if (typeof alerts == 'undefined') { var alerts = {}; }


alerts.all = function(opt_data, opt_ignored) {
  return '<!-- Different prompts to be displayed to screen --><div><div class="alert" id="successAlert"></div><div class="alert" id="hintAlert"></div><div class="alert" id="finishedLevelAlert"></div><div class="alert" id="errorAlert"></div></div>';
};

;
// This file was automatically generated from workspace.soy.
// Please don't edit this file by hand.

if (typeof workspace == 'undefined') { var workspace = {}; }


workspace.topRight = function(opt_data, opt_ignored) {
  return '<div class="topRight container"><button class="menu_buttons menu" title="Display the challenges menu" onclick="IO.cache(); Code.goToMenu()" id="displayMenuButton">MENU</button></div>';
};


workspace.toolbar = function(opt_data, opt_ignored) {
  return '<!-- Main buttons on each level - Make, Menu --><div id="toolbar" class="toolbar"><div class="half left"><div class="progressInfo" onclick="IO.cache(); Help.hideScreen(); Project.goToIntro(Project.getLastVisited());"><img src="../../kano-blocks/blockly/media/challenge-overview.png"><span id="projectMessage" class="challengeTitle"></span></div><div class="stepsNavigation"><button class="previousStep" onclick="Project.tooltip.undo();"><img src="../../kano-blocks/blockly/media/1x1.gif" class="icon projectBack"></button><div class="progressBar"><span class="progressDoneBar"><span class="progressDoneBarEnd stepBlob currentStep"></span></span><span class="stepBlob maxStepsIndicator"><img src="../../kano-blocks/blockly/media/1x1.gif" class="icon greyLightning"><span class="maxSteps"></span></span></div><button class="nextStep" onclick="Project.tooltip.redo();"><img src="../../kano-blocks/blockly/media/1x1.gif" class="icon projectForward"></button></div></div><div class="half right"><button class="menu_buttons make" title="Run the program defined by the blocks in the workspace." onclick="SoundFX.make.play(); IO.screenshot.updateSrc(); Pong.savePythonScript()" id="runButton"><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class="icon lightning kano-icon">MAKE</button><button id="helpSwitch" class="toggle help" onclick="Help.toggle();" title="Show the code your blocks have generated"><img src="../../kano-blocks/blockly/media/1x1.gif"></button></div></div>';
};

;
// This file was automatically generated from toolbox.soy.
// Please don't edit this file by hand.

if (typeof toolbox == 'undefined') { var toolbox = {}; }


toolbox.toolboxTemplate = function(opt_data, opt_ignored) {
  return '<xml id="toolbox" style="display: none"><category name="' + ((opt_data.project < 2) ? 'x-' : '') + 'start-ups" label="START UPS">' + ((opt_data.project >= 2) ? '<block type="pong_board"></block>' : '') + ((opt_data.project >= 3) ? '<block type="pong_ball"></block>' : '') + ((opt_data.project >= 6) ? '<block type="pong_title"></block>' : '') + ((opt_data.project >= 17) ? '<block type="pong_windowSize"></block><block type="pong_ai"></block><!-- Remove soundtrack for now as it isn\'t fully functional<block type="pong_play_soundtrack"></block>-->' : '') + '</category><category name="' + ((opt_data.project < 2) ? 'x-' : '') + 'colour" label="COLOUR">' + ((opt_data.project >= 2) ? '<block type="colour_picker"></block>' : '') + ((opt_data.project >= 9) ? '<block type="colour_random"></block>' : '') + '</category><category name="' + ((opt_data.project < 7) ? 'x-' : '') + 'logic" label="LOGIC">' + ((opt_data.project >= 7) ? '<block type="controls_if"></block>' : '') + ((opt_data.project >= 9) ? '<block type="logic_compare"></block>' : '') + '</category><category name="' + ((opt_data.project < 7) ? 'x-' : '') + 'events" label="EVENTS">' + ((opt_data.project >= 7) ? '<block type="pong_keyPressed"></block>' : '') + ((opt_data.project >= 7) ? '<block type="pong_collision"></block>' : '') + ((opt_data.project >= 13) ? '<block type="pong_goal"></block>' : '') + '</category><category name="' + ((opt_data.project < 7) ? 'x-' : '') + 'actions" label="ACTIONS">' + ((opt_data.project >= 16) ? '<block type="pong_movePaddleTwo"></block>' : '') + ((opt_data.project >= 7) ? '<block type="pong_rebound"></block>' : '') + ((opt_data.project >= 11) ? '<block type="pong_actionSound"></block>' : '') + ((opt_data.project >= 8) ? '<block type="pong_win"></block>' : '') + '</category><category name="' + ((opt_data.project < 9) ? 'x-' : '') + 'numbers" label="NUMBERS">' + ((opt_data.project >= 9) ? '<block type="math_number"></block>' : '') + ((opt_data.project >= 9) ? '<block type="math_arithmetic"></block>' : '') + ((opt_data.project >= 17) ? '<block type="math_random_int"></block>' : '') + '</category><category name="' + ((opt_data.project < 5) ? 'x-' : '') + 'getters" label="GETTERS">' + ((opt_data.project >= 14) ? '<block type="pong_speedGetter"></block>' : '') + ((opt_data.project >= 5) ? '<block type="pong_ballPosition"></block>' : '') + ((opt_data.project >= 12) ? '<block type="pong_arenaGetter"></block>' : '') + ((opt_data.project >= 12) ? '<block type="pong_paddleSizeGetter"></block>' : '') + ((opt_data.project >= 5) ? '<block type="pong_ballSizeGetter"></block>' : '') + ((opt_data.project >= 10) ? '<block type="pong_scoreGetter"></block>' : '') + '</category><category name="' + ((opt_data.project < 5) ? 'x-' : '') + 'setters" label="SETTERS">' + ((opt_data.project >= 14) ? '<block type="pong_speedSetter"></block>' : '') + ((opt_data.project >= 13) ? '<block type="pong_paddleSizeSetter"></block>' : '') + ((opt_data.project >= 5) ? '<block type="pong_ballSizeSetter"></block>' : '') + ((opt_data.project >= 9) ? '<block type="pong_colourSetter"></block>' : '') + '</category></xml>';
};


toolbox.project1toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 1});
};


toolbox.project2toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 2});
};


toolbox.project3toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 3});
};


toolbox.project4toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 4});
};


toolbox.project5toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 5});
};


toolbox.project6toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 6});
};


toolbox.project7toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 7});
};


toolbox.project8toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 8});
};


toolbox.project9toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 9});
};


toolbox.project10toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 10});
};


toolbox.project11toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 11});
};


toolbox.project12toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 12});
};


toolbox.project13toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 13});
};


toolbox.project14toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 14});
};


toolbox.project15toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 15});
};


toolbox.project16toolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 16});
};


toolbox.playgroundunlockedtoolbox = function(opt_data, opt_ignored) {
  return toolbox.toolboxTemplate({project: 17});
};

;
// This file was automatically generated from dialog.soy.
// Please don't edit this file by hand.

if (typeof dialog == 'undefined') { var dialog = {}; }


dialog.splashFirst = function(opt_data, opt_ignored) {
  return '<div id="splashFirst" class="dialog splash"><div>' + dialogElement.splashBottom({firstBoot: true}) + '</div></div>';
};


dialog.splashOther = function(opt_data, opt_ignored) {
  return '<div id="splashOther" class="dialog splash"><div>' + dialogElement.splashBottom({firstBoot: false}) + '</div></div>';
};


dialog.mainMenu = function(opt_data, opt_ignored) {
  return '<div id="menu" class="dialog main"><div id="menucontainer">' + dialogElement.closeButton({code: 'Code.closeMenu();'}) + '<div class="top">' + dialogElement.mainMenuButtons(null) + '</div></div></div>';
};


dialog.challengeMenu = function(opt_data, opt_ignored) {
  return '<div id="challengeMenu" class="dialog challenge"><div><div class="top">' + dialogElement.projectMenu(null) + '</div><div class="bottom"><span class="button no-space" onclick=\'Project.goToIntro(Project.getLastVisited());\'>START</span></div></div></div>';
};


dialog.congratulations = function(opt_data, opt_ignored) {
  return '<div id="congratulations" class="dialog congratulations challengeInfo post"><div>' + dialogElement.widget({id: 'congratulations', progress: false, heading: 'Wow! Level: Make Pong completed!', subheading: 'Great work, you beat <span class="challengeTitle"></span>! Lets keep making...', contentHTML: '<span class=\'stat code\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator codeLines"><span class="subheading">CODE WRITTEN</span><span class="linesLabel"></span></span><span class=\'stat xp\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator xp"><span class="subheading">XP EARNED</span><span class="xpLabel"></span></span></div><div class=\'bottom\'><span class=\'button level_up_buttons dialogItem back\' onclick=\'location.href = "#challengeMenu"\'><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'icon projectMenuIcons back\'><span class=\'back\'></span></span><span class=\'button level_up_buttons dialogItem goToNext\' onclick=\'Project.goToNext()\'><span class=\'goToPlayground\'>NEXT</span></span>'}) + '</div></div>';
};


dialog.levelUp = function(opt_data, opt_ignored) {
  return '<div id="levelUp" class="dialog levelUp challengeInfo post"><div>' + dialogElement.widget({id: 'levelUp', progress: false, heading: 'Challenge Complete!', subheading: 'Great work, you beat <span class="challengeTitle"></span>! Lets keep making...', contentHTML: '<span class=\'stat code\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator codeLines"><span class="subheading">CODE WRITTEN</span><span class="linesLabel"></span></span><span class=\'stat xp\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator xp"><span class="subheading">XP EARNED</span><span class="xpLabel"></span></span></div><div class=\'bottom\'><span class=\'button level_up_buttons dialogItem back\' onclick=\'location.href = "#challengeMenu"\'><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'icon projectMenuIcons back\'><span class=\'back\'></span></span><span class=\'button level_up_buttons dialogItem goToNext\' onclick=\'Project.goToNext()\'><span class=\'goToPlayground\'>NEXT</span></span>'}) + '</div></div>';
};


dialog.projectIntro = function(opt_data, opt_ignored) {
  return '<div id=\'projectIntroDialog\' class=\'dialog challengeInfo pre\'><div>' + dialogElement.widget({id: 'challengeIntro', progress: false, heading: '<span class="challengeNumber"></span>: <span class="challengeTitle"></span>', subheading: '<span class="challengeDescription"></span>', contentHTML: '<span class=\'stat objective\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator objective"><span class="subheading">NEW BLOCKS</span><span class="objectiveLabel"></span></span><span class=\'stat badge\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator badge"><span class="subheading">UNLOCK BADGE</span><span class="badgeLabel"></span></span></div><div class=\'bottom\'><span class=\'button level_up_buttons dialogItem back\' onclick=\'location.href = "#challengeMenu"\'\'><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'icon projectMenuIcons back\'><span class=\'back\'></span></span><span class=\'button level_up_buttons dialogItem goToNext\' onclick=\'Project.switch(Project.getLastVisited())\'><span class=\'goToPlayground\'>GO!</span></span>'}) + '</div></div>';
};


dialog.replayProjectIntro = function(opt_data, opt_ignored) {
  return '<div id="replayProjectIntroDialog" class="dialog levelUp challengeInfo post"><div>' + dialogElement.widget({id: 'levelUp', progress: false, heading: 'Challenge Complete!', subheading: 'Great work, you beat <span class="challengeTitle"></span>! Lets keep making...', contentHTML: '<span class=\'stat code\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator codeLines"><span class="subheading">CODE WRITTEN</span><span class="linesLabel"></span></span><span class=\'stat xp\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator xp"><span class="subheading">XP EARNED</span><span class="xpLabel"></span></span></div><div class=\'bottom\'><span class=\'button level_up_buttons dialogItem back\' onclick=\'location.href = "#challengeMenu"\'><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'icon projectMenuIcons back\'><span class=\'back\'></span></span><span class=\'button level_up_buttons dialogItem goToNext\' onclick=\'Project.goToCurrent()\'><span class=\'goToPlayground\'>REPLAY</span></span>'}) + '</div></div>';
};


dialog.playgroundIntro = function(opt_data, opt_ignored) {
  return '<div id="playgroundIntroDialog" class="dialog levelUp challengeInfo playground"><div>' + dialogElement.widget({id: 'levelUp', progress: false, heading: 'Playground!', subheading: 'Welcome to the Playground! In here you are able to put your skills to test and make whatever comes to mind.', contentHTML: '</div><div class=\'bottom\'><span class=\'button level_up_buttons dialogItem back\' onclick=\'location.href = "#challengeMenu"\'><span class=\'back\'><</span></span><span class=\'button level_up_buttons dialogItem goToNext\' onclick=\'Project.switch(Project.getLastVisited())\'><span class=\'goToPlayground\'>GO!</span></span>'}) + '</div></div>';
};


dialog.makingGame = function(opt_data, opt_ignored) {
  return '<div id="makingGame" class="dialog makingGame"><div id="makingGameMessage"><span>Click here to return to Kano Blocks</span></div></div>';
};


dialog.loadSource = function(opt_data, opt_ignored) {
  return '<div id="loadSource" class="dialog loadSource"><div id="loadSourceContainer">' + dialogElement.closeButton({code: 'location.href="#menu";'}) + dialogElement.widget({id: 'loadSource', progress: false, heading: 'Load challenge', subheading: 'Choose where to load from', contentHTML: '<button class=\'level_up_buttons loadXML\' onclick=\'IO.load.file.remote.XML()\'>INTERNET</button><button class=\'level_up_buttons loadXML\' onclick=\'IO.load.file.local.XML("~/Pong-content")\'>YOUR KANO</button>'}) + '</div></div>';
};


dialog.loadMakeOrPlay = function(opt_data, opt_ignored) {
  return '<div id="loadMakeOrPlay" class="dialog loadMakeOrPlay"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}) + dialogElement.widget({id: 'loadMakeOrPlay', progress: false, heading: 'Do you want to load the blocks or make it yourself with steps', subheading: '', contentHTML: '<button class=\'level_up_buttons loadXML\' onclick=\'window.location.href = "#clearBlocksLoadBlocksDialog"; \' >PLAY</button><button class=\'level_up_buttons loadXML\' onclick=\'Code.closeMenu(); Blockly.mainWorkspace.clear(); IO.load.inject.blocks.onWorkspace(IO.loadedChallenge); IO.save.XML(false,true); IO.load.inject.steps.dialog(IO.loadedChallenge);\' >MAKE</button>'}) + '</div></div>';
};


dialog.loadFileFail = function(opt_data, opt_ignored) {
  return '<div id="loadFileFail" class="dialog loadFileFail"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}) + dialogElement.widget({id: 'loadFileFail', progress: false, heading: '', subheading: '', contentHTML: '<img src=\'../../kano-blocks/blockly/media/Judoka-Error.png\'><br /><span class=\'level_up_buttons loadXML\'>Cannot upload file. Are you connected to the internet?</span>'}) + '</div></div>';
};


dialog.save = function(opt_data, opt_ignored) {
  return dialogElement.export({id: 'saveDialog', class: 'save', label: 'SAVE', code: 'IO.save.XML()', input_id: 'filename_save'});
};


dialog.share = function(opt_data, opt_ignored) {
  return dialogElement.export({id: 'shareDialog', class: 'share', label: 'SHARE', code: 'IO.shipBlocks()', input_id: 'filename_share'});
};


dialog.tooltipTutorial = function(opt_data, opt_ignored) {
  return '<!-- Tooltip tutoral --><div id=\'tutorialPointer\' class=\'tooltip\'></div><div id=\'tutorialDialog\' class=\'tooltipdialog\'></div>';
};


dialog.codePreview = function(opt_data, opt_ignored) {
  return '<!-- The code preview dialog --><div id=\'codePreview\' class=\'codepreviewdialog\'><div id="codeMessage" height="0px" style="text-align:center">Code preview</div><pre id="code_preview_input" class=\'codepreviewinputdialog\'></pre></div>';
};


dialog.discardDialog = function(opt_data, opt_ignored) {
  return '<div id=\'discardDialog\' class="dialog discardDialog"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}) + dialogElement.widget({id: 'discardElements', progress: false, heading: ' ', subheading: '', contentHTML: '<span class=\'button level_up_buttons dialogItem\' onclick=\'Code.closeMenu(); Code.discard();\'><span class=\'\'>OK</span></span><span class=\'button level_up_buttons dialogItem red\' onclick=\'Code.closeMenu();\'><span class=\'\'>CANCEL</span></span>'}) + '</div></div>';
};


dialog.clearBlocksLoadBlocksDialog = function(opt_data, opt_ignored) {
  return '<div id=\'clearBlocksLoadBlocksDialog\' class="dialog clearBlocksDialog"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}) + dialogElement.widget({id: 'clearBlocksElements', progress: false, heading: 'Clear the blocks on the workspace?', subheading: '', contentHTML: '<span class=\'button level_up_buttons dialogItem\' onclick=\'Code.closeMenu(); Blockly.mainWorkspace.clear(); IO.load.inject.blocks.onWorkspace(IO.loadedChallenge);\' ><span class=\'\'>YES</span></span><span class=\'button level_up_buttons dialogItem red\' onclick=\'Code.closeMenu(); IO.load.inject.blocks.onWorkspace(IO.loadedChallenge);\' ><span class=\'\'>NO</span></span>'}) + '</div></div>';
};


dialog.clearBlocksLoadStepsDialog = function(opt_data, opt_ignored) {
  return '<div id=\'clearBlocksLoadStepsDialog\' class=\'dialog clearBlocksDialog\'><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}) + dialogElement.widget({id: 'clearBlocksElements', progress: false, heading: 'Clear the blocks on the workspace?', subheading: '', contentHTML: '<span class=\'button level_up_buttons dialogItem\' onclick=\'Code.closeMenu(); Blockly.mainWorkspace.clear(); IO.tooltip.display(IO.loadedChallenge);\' ><span class=\'\'>YES</span></span><span class=\'button level_up_buttons dialogItem red\' onclick=\'Code.closeMenu(); IO.tooltip.display(IO.loadedChallenge);\'><span class=\'\'>NO</span></span>'}) + '</div></div>';
};

;
// This file was automatically generated from dialog_element.soy.
// Please don't edit this file by hand.

if (typeof dialogElement == 'undefined') { var dialogElement = {}; }


dialogElement.closeButton = function(opt_data, opt_ignored) {
  return '<div height="0px" style="text-align:right;"><button class="close" onclick="' + soy.$$escapeHtml(opt_data.code) + '">&times;</button></div>';
};


dialogElement.splashBottom = function(opt_data, opt_ignored) {
  return '<div class="top"><img alt=\'Pong\' src=\'media/intro.png\', class=\'pong-splash\'></div><div class="bottom">' + ((opt_data.firstBoot) ? '<button class="orange_text" onclick="location.href=\'#challengeMenu\';">SKIP</button><button class="button orange no-space" onclick="(function(e) {e.target.disabled = true; backend.call(\'play_intro\', function() {e.target.disabled = false;}); location.href=\'#challengeMenu\';})(event); "><img alt="Watch Video" class="kano-icon" src="../../kano-blocks/blockly/media/watch-video-white.png">PLAY VIDEO</button>' : '<button class="orange_text" onclick="(function(e) {e.target.disabled = true; backend.call(\'play_intro\', function() {e.target.disabled = false;});})(event); "><img alt="Watch Video" src="../../kano-blocks/blockly/media/watch-video.png">WATCH VIDEO</button><button class="button red no-space" onclick="Code.close_window();">EXIT</button><button class="button no-space" onclick="location.href=\'#challengeMenu\';">START</button>') + '</div>';
};


dialogElement.widget = function(opt_data, opt_ignored) {
  var output = '<div class="' + opt_data.id + '"><div class="top">' + ((opt_data.progress) ? '<div class="preheading">CHALLENGE <span class="challengeNumber"></span> OF 15</div>' : '') + ((opt_data.heading != '') ? '<div class=\'heading\'>' + opt_data.heading + '</div>' : '') + ((opt_data.subheading != '') ? '<div class=\'subheading\'>' + opt_data.subheading + '</div>' : '') + '<br>' + ((opt_data.contentHTML) ? opt_data.contentHTML : '');
  if (opt_data.content) {
    var objectList588 = opt_data.content;
    var objectListLen588 = objectList588.length;
    for (var objectIndex588 = 0; objectIndex588 < objectListLen588; objectIndex588++) {
      var objectData588 = objectList588[objectIndex588];
      switch (objectData588.type) {
        case 'bottom':
          output += '</div><div class=\'bottom\'>';
          break;
        case 'text':
          output += '<span class=\'' + objectData588['class'] + '\'>' + objectData588.label + '</span>';
          break;
        case 'button':
          output += '<button class=\'level_up_buttons\' class=\'' + objectData588['class'] + '\' onclick=\'' + objectData588.code + '\'>' + objectData588.label + '</button>';
          break;
        case 'spanbutton':
          output += '<span class=\'button level_up_buttons dialogItem ' + objectData588.buttonclass + '\' onclick=\'' + objectData588.code + '\'>' + ((objectData588.alignIcon == 'left') ? '<img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'icon projectMenuIcons ' + objectData588.iconclass + '\'><span class=\'' + objectData588.spanclass + '\'>' + objectData588.label + '</span>' : (objectData588.alignIcon == 'right') ? '<span class=\'' + objectData588.spanclass + '\'>' + objectData588.label + '</span><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'icon projectMenuIcons ' + objectData588.iconclass + '\'>' : (objectData588.alignIcon == 'none') ? '<span class=\'' + objectData588.spanclass + '\'>' + objectData588.label + '</span>' : '') + '</span>';
          break;
        case 'image':
          output += ((! (objectIndex588 == 0)) ? '<br>' : '') + '<img src=\'' + objectData588.src + '\'>' + ((! (objectIndex588 == objectListLen588 - 1)) ? '<br>' : '');
          break;
        default:
          output += objectData588;
      }
    }
  }
  output += '</div></div></div>';
  return output;
};


dialogElement.projectMenuItem = function(opt_data, opt_ignored) {
  return '<span id=\'project' + soy.$$escapeHtml(opt_data.projectNo) + '\' class=\'dialogItem projectMenu locked\' onmouseover="this.querySelector(\'.text\').innerHTML=Language.project[' + soy.$$escapeHtml(opt_data.projectNo) + '].title" onclick=\'Project.goToIntro(' + soy.$$escapeHtml(opt_data.projectNo) + ');\'><span class=\'text\'></span><span class=\'projectNumber\'>' + soy.$$escapeHtml(opt_data.projectNo) + '</span><span class=\'bottom\'><span class=\'indicator xp\'><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'indicator xp\'><span class=\'xpLabel\'></span></span><span class=\'indicator objective\'><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'indicator objective\'></span><span class=\'indicator badge\'><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'indicator badge\'></span></span></span>';
};


dialogElement.playgroundMenuItem = function(opt_data, opt_ignored) {
  return '<span id="project' + soy.$$escapeHtml(opt_data.projectNo) + '" class="dialogItem playground locked" onclick="Project.goToIntro(' + soy.$$escapeHtml(opt_data.projectNo) + ')"><span class="text">BE CREATIVE</span><span class="projectNumber playgroundName">PLAYGROUND</span><span class=\'bottom\'></span></span>';
};


dialogElement.projectMenu = function(opt_data, opt_ignored) {
  var output = '<!-- Unlocks as user progresses through project --><div class="challengeMenuList"><span class="challengeMenuRow">';
  for (var i674 = 0; i674 < 7; i674++) {
    output += dialogElement.projectMenuItem({projectNo: i674 + 1});
  }
  output += '</span><span class="challengeMenuRow">';
  for (var i678 = 7; i678 < 14; i678++) {
    output += dialogElement.projectMenuItem({projectNo: i678 + 1});
  }
  output += '</span><span class="challengeMenuRow">';
  for (var i682 = 14; i682 < 16; i682++) {
    output += dialogElement.projectMenuItem({projectNo: i682 + 1});
  }
  output += dialogElement.playgroundMenuItem({projectNo: '17'}) + '</span></div>';
  return output;
};


dialogElement.mainMenuButtons = function(opt_data, opt_ignored) {
  return '<div class="mainMenuButtons"><div><button class="menu_buttons saveXML" id="saveButton" title="Save the program defined by the blocks as XML." onclick="IO.screenshot.refreshElements(); location.href=\'#saveDialog\'; IO.form.addListeners();">SAVE</button> <button class="menu_buttons loadXML" id="loadButton" onclick=location.href=\'#loadSource\' title="Load a program defined by blocks from XML.">LOAD</button> <button class="menu_buttons exitButton" title="Exit the project." onclick="Code.close_window();">EXIT</button> </div></div>';
};


dialogElement.hintToggle = function(opt_data, opt_ignored) {
  return '<span><button class="toggle_button"><!--Hints toggle switch--><span class="toggle_container"><input type="checkbox" id="tutorialSwitch" name="tutorialSwitch" class="switch" onclick="Code.tutorial_toggle()" checked/><label for="tutorialSwitch"><span class="projectName">HINTS?</span></label></span></button><button class="deleteButton clear" title="Delete all blocks." onclick="Code.closeMenu(); Code.confirmDiscard();">RESET</button></div></span>';
};


dialogElement.export = function(opt_data, opt_ignored) {
  return '<div id="' + soy.$$escapeHtml(opt_data.id) + '" class="dialog ' + soy.$$escapeHtml(opt_data['class']) + '"><div id="' + soy.$$escapeHtml(opt_data['class']) + '">' + dialogElement.closeButton({code: 'location.href="#menu"; IO.form.removeListeners();'}) + '<div class="leftPane"><div class="screenshotBorder"><img src="./media/pong.png" class="screenshot"><span>Screenshot</span></div></div><div class="rightPane"><input class="filename" type="text" name="filename" id=\'' + soy.$$escapeHtml(opt_data.input_id) + '\' maxlength="200" placeholder="Title"><textarea class="description" name="description" maxlength="500" placeholder="Description"></textarea><button class="menu_buttons launch disabled" id="shipButton" disabled=true title="Share your blocks with the world." onclick="' + soy.$$escapeHtml(opt_data.code) + '">' + soy.$$escapeHtml(opt_data.label) + '</button></div></div></div>';
};

;
// This file was automatically generated from template_g.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored) {
  return '<div style="display: none"><span id="subtitle">a visual programming environment</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">See generated JavaScript code.</span><span id="linkTooltip">Save and link to blocks.</span><span id="runTooltip">Run the program defined by the blocks in the workspace.</span><span id="runProgram">Run Program</span><span id="resetProgram">Reset</span><span id="catLogic">Logic</span><span id="catLoops">Loops</span><span id="catMath">Math</span><span id="catText">Text</span><span id="catLists">Lists</span><span id="catColour">Colour</span><span id="catVariables">Variables</span><span id="catProcedures">Procedures</span><span id="httpRequestError">There was a problem with the request.</span><span id="linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="xmlError">Could not load your saved file.  Perhaps it was created with a different version of Blockly?</span><span id="listVariable">list</span><span id="textVariable">text</span></div>';
};


apps.dialog = function(opt_data, opt_ignored) {
  return '<style type="text/css">#dialog {visibility: hidden; background-color: #fff; color: #000; border: 1px solid #000; position: absolute; border-radius: 8px; box-shadow: 5px 5px 5px #888; padding: 10px;}#dialogBorder {visibility: hidden; position: absolute; background-color: #fff; color: #000; border: 1px solid #000; border-radius: 8px; box-shadow: 5px 5px 5px #888;}#dialogShadow {visibility: hidden; position: fixed; top: 0; left: 0; height: 100%; width: 100%; background-color: #000; opacity: 0.3}.dialogAnimate {transition-property: width, height, left, top, opacity; transition-duration: 0.2s; transition-timing-function: linear;}.dialogHiddenContent {visibility: hidden; position: absolute; top: 0; left: 0; z-index: -1;}</style><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.ok = function(opt_data, opt_ignored) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof codepage == 'undefined') { var codepage = {}; }


codepage.messages = function(opt_data, opt_ignored) {
  return apps.messages(null) + '<div style="display: none"><span id="Code_badXml">Error parsing XML:\\n%1\\n\\nAbandon changes?</span><span id="Code_badCode">Program error:\\n%1</span><span id="Code_timeout">Maximum execution iterations exceeded.</span><span id="Code_discard">Delete all %1 blocks?</span></div>';
};


codepage.start = function(opt_data, opt_ignored) {
  return codepage.messages(null) + '<!-- Dialogs -->' + dialog.splashFirst(null) + dialog.splashOther(null) + dialog.mainMenu(null) + dialog.challengeMenu(null) + dialog.projectIntro(null) + dialog.playgroundIntro(null) + dialog.replayProjectIntro(null) + dialog.congratulations(null) + dialog.levelUp(null) + dialog.makingGame(null) + dialog.loadSource(null) + dialog.loadMakeOrPlay(null) + dialog.loadFileFail(null) + dialog.save(null) + dialog.share(null) + dialog.tooltipTutorial(null) + dialog.discardDialog(null) + dialog.clearBlocksLoadBlocksDialog(null) + dialog.clearBlocksLoadStepsDialog(null) + alerts.all(null) + workspace.topRight(null) + '<!-- Where the blocks and python code is shown --><div id="content_container"><div id="blocks_container"><div id="content_blocks" class="content"></div></div>' + apps.dialog(null) + '</div>' + workspace.toolbar(null) + helpScreen.help(null) + '</div>';
};

;
// This file was automatically generated from help_screen.soy.
// Please don't edit this file by hand.

if (typeof helpScreen == 'undefined') { var helpScreen = {}; }


helpScreen.help = function(opt_data, opt_ignored) {
  return '<div id="helpScreen"><div><button class="closeButton" onclick="Help.hideScreen();">&times</button>' + helpScreen.leftHalf(null) + helpScreen.rightHalf(null) + '</div></div>';
};


helpScreen.leftHalf = function(opt_data, opt_ignored) {
  return '<div id="leftHalf"><div class="verticalContainer"><div id="helpTitle" class="helpTitle">This is default text for the title</div><div id="helpDescription" class="helpDescription">This is default text for the description</div><br><div class="blueBorder"><div class="stepHeading">Previous step</div><div id="prevStep" class="helpDescription">This is default text for the previous step</div></div><div class="blackBorder"><div class="stepHeading">Next step</div><div id="nextStep" class="helpDescription">This is default text for the next step</div></div></div></div>';
};


helpScreen.rightHalf = function(opt_data, opt_ignored) {
  return '<div id="rightHalf"><div id="stillStuck" class="controlsContainer verticalContainer"><div class="stillStuck helpTitle">Still stuck?</div><button id="showSolutionButton" class="greenButton" onclick="Help.showBlockConfiguration();">SHOW SOLUTION</button><button id="walkthroughButton" class="greenButton" onclick="Help.showForumPage()">WALKTHROUGH</button></div><div id="blockSolution" class="controlsContainer verticalContainer"><img id="blockSolutionImg"><div><button class="redButton" onclick="Help.showMenu();">BACK</button></div></div><div id="forumPage" class="controlsContainer verticalContainer"><div class="helpDescription">Launching the forum.  This may take a few seconds.</div><button class="redButton" onclick="Help.showMenu();">BACK</button></div></div>';
};
