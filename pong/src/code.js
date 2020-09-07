
/*
# code-pong.js
#
# Copyright (C) 2013 Kano Computing Ltd.
# License:   http://www.gnu.org/licenses/gpl-2.0.txt GNU General Public License v2
#
#
*/

var paddleBot = false;

var Pong = {};

// Caching of blocks means this must be different to Minecraft
/**
 * Save code to local .py file.
 */
Pong.savePythonScript = function() {
  var code = Project.getCode();

  Stats.update(code);

  var level = Project.getLastVisited();
  /* Disable the Make button so Pong doesn't start
     multiple times on multiple clicks */
  Code.disableButton('runButton');
  IO.cache();
  AlertsMessages.hideOnMake();
  BlocklyStorage.migrateCacheLevels(level, Project.challenge.count + 1, Project.challenge.count);

  /* Show alert when pong gets launched saying click
     on Make-Pong window to get back to window. */
  var hintFadeTime = 300;
  document.getElementById('makingGame').style.display = 'block';

  setTimeout(function() {
    // Add the name of the file to the first line
    backend.call('save', 'pong.py', code);

    // Launch the game
    backend.call('launch', function(rv) {
      // If the current project isn't the playground, try and level up
      var project = BlocklyStorage.getCurrentLevel();
      if (project != 'playground') {
        Project.levelUp(code);
      }
    });

    document.getElementById('makingGame').style.display = 'none';
    Code.enableButton('runButton');
  }, hintFadeTime);

};

Pong.replay = function() {
  var level = Project.getLastVisited();
  if ('BlocklyStorage' in window) {
    if (level <= 5) {
      BlocklyStorage.migrateCacheLevels(level - 1, level, Project.challenge.count);
    } else if (level > 5) {
      BlocklyStorage.migrateCacheLevels(5, level, Project.challenge.count);
    }
  }

  Code.replay();
};
