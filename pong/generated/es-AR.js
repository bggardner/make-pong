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
  return '<div class="topRight container"><button class="menu_buttons menu" title="Desplegar el menú de desafíos" onclick="IO.cache(); Code.goToMenu()" id="displayMenuButton">MENÚ</button></div>';
};


workspace.toolbar = function(opt_data, opt_ignored) {
  return '<!-- Main buttons on each level - Make, Menu --><div id="toolbar" class="toolbar"><div class="half left"><div class="progressInfo" onclick="IO.cache(); Help.hideScreen(); Project.goToIntro(Project.getLastVisited());"><img src="../../kano-blocks/blockly/media/challenge-overview.png"><span id="projectMessage" class="challengeTitle"></span></div><div class="stepsNavigation"><button class="previousStep" onclick="Project.tooltip.undo();"><img src="../../kano-blocks/blockly/media/1x1.gif" class="icon projectBack"></button><div class="progressBar"><span class="progressDoneBar"><span class="progressDoneBarEnd stepBlob currentStep"></span></span><span class="stepBlob maxStepsIndicator"><img src="../../kano-blocks/blockly/media/1x1.gif" class="icon greyLightning"><span class="maxSteps"></span></span></div><button class="nextStep" onclick="Project.tooltip.redo();"><img src="../../kano-blocks/blockly/media/1x1.gif" class="icon projectForward"></button></div></div><div class="half right"><button class="menu_buttons make" title="Ejecuta el programa definido por los bloques del área de trabajo." onclick="SoundFX.make.play(); IO.screenshot.updateSrc(); Pong.savePythonScript()" id="runButton"><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class="icon lightning kano-icon">MAKE</button><button id="helpSwitch" class="toggle help" onclick="Help.toggle();" title="Muestra el código que han generado tus bloques"><img src="../../kano-blocks/blockly/media/1x1.gif"></button></div></div>';
};

;
// This file was automatically generated from toolbox.soy.
// Please don't edit this file by hand.

if (typeof toolbox == 'undefined') { var toolbox = {}; }


toolbox.toolboxTemplate = function(opt_data, opt_ignored) {
  return '<xml id="toolbox" style="display: none"><category name="' + ((opt_data.project < 2) ? 'x-' : '') + 'start-ups" label="START UPS">' + ((opt_data.project >= 2) ? '<block type="pong_board"></block>' : '') + ((opt_data.project >= 3) ? '<block type="pong_ball"></block>' : '') + ((opt_data.project >= 6) ? '<block type="pong_title"></block>' : '') + ((opt_data.project >= 17) ? '<block type="pong_windowSize"></block><block type="pong_ai"></block><!-- Remove soundtrack for now as it isn\'t fully functional<block type="pong_play_soundtrack"></block>-->' : '') + '</category><category name="' + ((opt_data.project < 2) ? 'x-' : '') + 'colour" label="COLOR">' + ((opt_data.project >= 2) ? '<block type="colour_picker"></block>' : '') + ((opt_data.project >= 9) ? '<block type="colour_random"></block>' : '') + '</category><category name="' + ((opt_data.project < 7) ? 'x-' : '') + 'logic" label="LÓGICA">' + ((opt_data.project >= 7) ? '<block type="controls_if"></block>' : '') + ((opt_data.project >= 9) ? '<block type="logic_compare"></block>' : '') + '</category><category name="' + ((opt_data.project < 7) ? 'x-' : '') + 'events" label="EVENTOS">' + ((opt_data.project >= 7) ? '<block type="pong_keyPressed"></block>' : '') + ((opt_data.project >= 7) ? '<block type="pong_collision"></block>' : '') + ((opt_data.project >= 13) ? '<block type="pong_goal"></block>' : '') + '</category><category name="' + ((opt_data.project < 7) ? 'x-' : '') + 'actions" label="ACCIONES">' + ((opt_data.project >= 16) ? '<block type="pong_movePaddleTwo"></block>' : '') + ((opt_data.project >= 7) ? '<block type="pong_rebound"></block>' : '') + ((opt_data.project >= 11) ? '<block type="pong_actionSound"></block>' : '') + ((opt_data.project >= 8) ? '<block type="pong_win"></block>' : '') + '</category><category name="' + ((opt_data.project < 9) ? 'x-' : '') + 'numbers" label="NÚMEROS">' + ((opt_data.project >= 9) ? '<block type="math_number"></block>' : '') + ((opt_data.project >= 9) ? '<block type="math_arithmetic"></block>' : '') + ((opt_data.project >= 17) ? '<block type="math_random_int"></block>' : '') + '</category><category name="' + ((opt_data.project < 5) ? 'x-' : '') + 'getters" label="GETTERS">' + ((opt_data.project >= 14) ? '<block type="pong_speedGetter"></block>' : '') + ((opt_data.project >= 5) ? '<block type="pong_ballPosition"></block>' : '') + ((opt_data.project >= 12) ? '<block type="pong_arenaGetter"></block>' : '') + ((opt_data.project >= 12) ? '<block type="pong_paddleSizeGetter"></block>' : '') + ((opt_data.project >= 5) ? '<block type="pong_ballSizeGetter"></block>' : '') + ((opt_data.project >= 10) ? '<block type="pong_scoreGetter"></block>' : '') + '</category><category name="' + ((opt_data.project < 5) ? 'x-' : '') + 'setters" label="SETTERS">' + ((opt_data.project >= 14) ? '<block type="pong_speedSetter"></block>' : '') + ((opt_data.project >= 13) ? '<block type="pong_paddleSizeSetter"></block>' : '') + ((opt_data.project >= 5) ? '<block type="pong_ballSizeSetter"></block>' : '') + ((opt_data.project >= 9) ? '<block type="pong_colourSetter"></block>' : '') + '</category></xml>';
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
  return '<div id="challengeMenu" class="dialog challenge"><div><div class="top">' + dialogElement.projectMenu(null) + '</div><div class="bottom"><span class="button no-space" onclick=\'Project.goToIntro(Project.getLastVisited());\'>COMENZAR</span></div></div></div>';
};


dialog.congratulations = function(opt_data, opt_ignored) {
  return '<div id="congratulations" class="dialog congratulations challengeInfo post"><div>' + dialogElement.widget({id: 'congratulations', progress: false, heading: '¡Wow! Nivel: ¡Make Pong completado!', subheading: '¡Excelente trabajo! Sigamos haciéndolo...', contentHTML: '<span class=\'stat code\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator codeLines"><span class="subheading">CÓDIGO ESCRITO</span><span class="linesLabel"></span></span><span class=\'stat xp\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator xp"><span class="subheading">XP GANADOS</span><span class="xpLabel"></span></span></div><div class=\'bottom\'><span class=\'button level_up_buttons dialogItem back\' onclick=\'location.href = "#challengeMenu"\'><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'icon projectMenuIcons back\'><span class=\'back\'></span></span><span class=\'button level_up_buttons dialogItem goToNext\' onclick=\'Project.goToNext()\'><span class=\'goToPlayground\'>SIGUIENTE</span></span>'}) + '</div></div>';
};


dialog.levelUp = function(opt_data, opt_ignored) {
  return '<div id="levelUp" class="dialog levelUp challengeInfo post"><div>' + dialogElement.widget({id: 'levelUp', progress: false, heading: '¡Desafío completado!', subheading: '¡Excelente trabajo! Sigamos haciéndolo...', contentHTML: '<span class=\'stat code\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator codeLines"><span class="subheading">CÓDIGO ESCRITO</span><span class="linesLabel"></span></span><span class=\'stat xp\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator xp"><span class="subheading">XP GANADOS</span><span class="xpLabel"></span></span></div><div class=\'bottom\'><span class=\'button level_up_buttons dialogItem back\' onclick=\'location.href = "#challengeMenu"\'><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'icon projectMenuIcons back\'><span class=\'back\'></span></span><span class=\'button level_up_buttons dialogItem goToNext\' onclick=\'Project.goToNext()\'><span class=\'goToPlayground\'>SIGUIENTE</span></span>'}) + '</div></div>';
};


dialog.projectIntro = function(opt_data, opt_ignored) {
  return '<div id=\'projectIntroDialog\' class=\'dialog challengeInfo pre\'><div>' + dialogElement.widget({id: 'challengeIntro', progress: false, heading: '<span class="challengeNumber"></span>: <span class="challengeTitle"></span>', subheading: '<span class="challengeDescription"></span>', contentHTML: '<span class=\'stat objective\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator objective"><span class="subheading">NUEVOS BLOQUES</span><span class="objectiveLabel"></span></span><span class=\'stat badge\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator badge"><span class="subheading">DESBLOQUEAR MEDALLA</span><span class="badgeLabel"></span></span></div><div class=\'bottom\'><span class=\'button level_up_buttons dialogItem back\' onclick=\'location.href = "#challengeMenu"\'\'><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'icon projectMenuIcons back\'><span class=\'back\'></span></span><span class=\'button level_up_buttons dialogItem goToNext\' onclick=\'Project.switch(Project.getLastVisited())\'><span class=\'goToPlayground\'>¡VAMOS!</span></span>'}) + '</div></div>';
};


dialog.replayProjectIntro = function(opt_data, opt_ignored) {
  return '<div id="replayProjectIntroDialog" class="dialog levelUp challengeInfo post"><div>' + dialogElement.widget({id: 'levelUp', progress: false, heading: '¡Desafío completado!', subheading: '¡Excelente trabajo! Sigamos haciéndolo...', contentHTML: '<span class=\'stat code\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator codeLines"><span class="subheading">CÓDIGO ESCRITO</span><span class="linesLabel"></span></span><span class=\'stat xp\'><img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator xp"><span class="subheading">XP GANADOS</span><span class="xpLabel"></span></span></div><div class=\'bottom\'><span class=\'button level_up_buttons dialogItem back\' onclick=\'location.href = "#challengeMenu"\'><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'icon projectMenuIcons back\'><span class=\'back\'></span></span><span class=\'button level_up_buttons dialogItem goToNext\' onclick=\'Project.goToCurrent()\'><span class=\'goToPlayground\'>REPETIR</span></span>'}) + '</div></div>';
};


dialog.playgroundIntro = function(opt_data, opt_ignored) {
  return '<div id="playgroundIntroDialog" class="dialog levelUp challengeInfo playground"><div>' + dialogElement.widget({id: 'levelUp', progress: false, heading: '¡Playground!', subheading: '¡Bienvenido al Playground! Aquí puedes poner a prueba tus habilidades y crear cualquier cosa que venga a tu mente.', contentHTML: '</div><div class=\'bottom\'><span class=\'button level_up_buttons dialogItem back\' onclick=\'location.href = "#challengeMenu"\'><span class=\'back\'><</span></span><span class=\'button level_up_buttons dialogItem goToNext\' onclick=\'Project.switch(Project.getLastVisited())\'><span class=\'goToPlayground\'>¡VAMOS!</span></span>'}) + '</div></div>';
};


dialog.makingGame = function(opt_data, opt_ignored) {
  return '<div id="makingGame" class="dialog makingGame"><div id="makingGameMessage"><span>Haz click aquí para volver a Kano Blocks</span></div></div>';
};


dialog.loadSource = function(opt_data, opt_ignored) {
  return '<div id="loadSource" class="dialog loadSource"><div id="loadSourceContainer">' + dialogElement.closeButton({code: 'location.href="#menu";'}) + dialogElement.widget({id: 'loadSource', progress: false, heading: 'Cargar desafío', subheading: 'Elige desde dónde carga', contentHTML: '<button class=\'level_up_buttons loadXML\' onclick=\'IO.load.file.remote.XML()\'>INTERNET</button><button class=\'level_up_buttons loadXML\' onclick=\'IO.load.file.local.XML("~/Pong-content")\'>TU KANO</button>'}) + '</div></div>';
};


dialog.loadMakeOrPlay = function(opt_data, opt_ignored) {
  return '<div id="loadMakeOrPlay" class="dialog loadMakeOrPlay"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}) + dialogElement.widget({id: 'loadMakeOrPlay', progress: false, heading: 'Quieres cargar los bloques o hacerlos tú mismo siguiendo diferentes pasos', subheading: '', contentHTML: '<button class=\'level_up_buttons loadXML\' onclick=\'window.location.href = "#clearBlocksLoadBlocksDialog"; \' >JUGAR</button><button class=\'level_up_buttons loadXML\' onclick=\'Code.closeMenu(); Blockly.mainWorkspace.clear(); IO.load.inject.blocks.onWorkspace(IO.loadedChallenge); IO.save.XML(false,true); IO.load.inject.steps.dialog(IO.loadedChallenge);\' >MAKE</button>'}) + '</div></div>';
};


dialog.loadFileFail = function(opt_data, opt_ignored) {
  return '<div id="loadFileFail" class="dialog loadFileFail"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}) + dialogElement.widget({id: 'loadFileFail', progress: false, heading: '', subheading: '', contentHTML: '<img src=\'../../kano-blocks/blockly/media/Judoka-Error.png\'><br /><span class=\'level_up_buttons loadXML\'>No se pudo subir el archivo. ¿Estás conectado a internet?</span>'}) + '</div></div>';
};


dialog.save = function(opt_data, opt_ignored) {
  return dialogElement.export({id: 'saveDialog', class: 'save', label: 'GUARDAR', code: 'IO.save.XML()', input_id: 'filename_save'});
};


dialog.share = function(opt_data, opt_ignored) {
  return dialogElement.export({id: 'shareDialog', class: 'share', label: 'COMPARTIR', code: 'IO.shipBlocks()', input_id: 'filename_share'});
};


dialog.tooltipTutorial = function(opt_data, opt_ignored) {
  return '<!-- Tooltip tutoral --><div id=\'tutorialPointer\' class=\'tooltip\'></div><div id=\'tutorialDialog\' class=\'tooltipdialog\'></div>';
};


dialog.codePreview = function(opt_data, opt_ignored) {
  return '<!-- The code preview dialog --><div id=\'codePreview\' class=\'codepreviewdialog\'><div id="codeMessage" height="0px" style="text-align:center">Vista previa del código</div><pre id="code_preview_input" class=\'codepreviewinputdialog\'></pre></div>';
};


dialog.discardDialog = function(opt_data, opt_ignored) {
  return '<div id=\'discardDialog\' class="dialog discardDialog"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}) + dialogElement.widget({id: 'discardElements', progress: false, heading: ' ', subheading: '', contentHTML: '<span class=\'button level_up_buttons dialogItem\' onclick=\'Code.closeMenu(); Code.discard();\'><span class=\'\'>ACEPTAR</span></span><span class=\'button level_up_buttons dialogItem red\' onclick=\'Code.closeMenu();\'><span class=\'\'>CANCELAR</span></span>'}) + '</div></div>';
};


dialog.clearBlocksLoadBlocksDialog = function(opt_data, opt_ignored) {
  return '<div id=\'clearBlocksLoadBlocksDialog\' class="dialog clearBlocksDialog"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}) + dialogElement.widget({id: 'clearBlocksElements', progress: false, heading: '¿Limpiar los bloques del área de trabajo?', subheading: '', contentHTML: '<span class=\'button level_up_buttons dialogItem\' onclick=\'Code.closeMenu(); Blockly.mainWorkspace.clear(); IO.load.inject.blocks.onWorkspace(IO.loadedChallenge);\' ><span class=\'\'>SÍ</span></span><span class=\'button level_up_buttons dialogItem red\' onclick=\'Code.closeMenu(); IO.load.inject.blocks.onWorkspace(IO.loadedChallenge);\' ><span class=\'\'>NO</span></span>'}) + '</div></div>';
};


dialog.clearBlocksLoadStepsDialog = function(opt_data, opt_ignored) {
  return '<div id=\'clearBlocksLoadStepsDialog\' class=\'dialog clearBlocksDialog\'><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}) + dialogElement.widget({id: 'clearBlocksElements', progress: false, heading: '¿Limpiar los bloques del área de trabajo?', subheading: '', contentHTML: '<span class=\'button level_up_buttons dialogItem\' onclick=\'Code.closeMenu(); Blockly.mainWorkspace.clear(); IO.tooltip.display(IO.loadedChallenge);\' ><span class=\'\'>SÍ</span></span><span class=\'button level_up_buttons dialogItem red\' onclick=\'Code.closeMenu(); IO.tooltip.display(IO.loadedChallenge);\'><span class=\'\'>NO</span></span>'}) + '</div></div>';
};

;
// This file was automatically generated from dialog_element.soy.
// Please don't edit this file by hand.

if (typeof dialogElement == 'undefined') { var dialogElement = {}; }


dialogElement.closeButton = function(opt_data, opt_ignored) {
  return '<div height="0px" style="text-align:right;"><button class="close" onclick="' + soy.$$escapeHtml(opt_data.code) + '">&times;</button></div>';
};


dialogElement.splashBottom = function(opt_data, opt_ignored) {
  return '<div class="top"><img alt=\'Pong\' src=\'media/intro.png\', class=\'pong-splash\'></div><div class="bottom">' + ((opt_data.firstBoot) ? '<button class="orange_text" onclick="location.href=\'#challengeMenu\';">SALTEAR</button><button class="button orange no-space" onclick="(function(e) {e.target.disabled = true; backend.call(\'play_intro\', function() {e.target.disabled = false;}); location.href=\'#challengeMenu\';})(event); "><img alt="Watch Video" class="kano-icon" src="../../kano-blocks/blockly/media/watch-video-white.png">REPRODUCIR VIDEO</button>' : '<button class="orange_text" onclick="(function(e) {e.target.disabled = true; backend.call(\'play_intro\', function() {e.target.disabled = false;});})(event); "><img alt="Mirar Video" src="../../kano-blocks/blockly/media/watch-video.png">MIRAR VIDEO</button><button class="button red no-space" onclick="Code.close_window();">SALIR</button><button class="button no-space" onclick="location.href=\'#challengeMenu\';">COMENZAR</button>') + '</div>';
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
  return '<span id="project' + soy.$$escapeHtml(opt_data.projectNo) + '" class="dialogItem playground locked" onclick="Project.goToIntro(' + soy.$$escapeHtml(opt_data.projectNo) + ')"><span class="text">SÉ CREATIVO</span><span class="projectNumber playgroundName">PLAYGROUND</span><span class=\'bottom\'></span></span>';
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
  return '<div class="mainMenuButtons"><div><button class="menu_buttons saveXML" id="saveButton" title="Guardar el programa definido por los bloques como XML." onclick="IO.screenshot.refreshElements(); location.href=\'#saveDialog\'; IO.form.addListeners();">GUARDAR</button> <button class="menu_buttons loadXML" id="loadButton" onclick=location.href=\'#loadSource\' title="Cargar un programa definido por bloques de XML.">CARGAR</button> <button class="menu_buttons exitButton" title="Salir del proyecto." onclick="Code.close_window();">SALIR</button> </div></div>';
};


dialogElement.hintToggle = function(opt_data, opt_ignored) {
  return '<span><button class="toggle_button"><!--Hints toggle switch--><span class="toggle_container"><input type="checkbox" id="tutorialSwitch" name="tutorialSwitch" class="switch" onclick="Code.tutorial_toggle()" checked/><label for="tutorialSwitch"><span class="projectName">¿PISTAS?</span></label></span></button><button class="deleteButton clear" title="Eliminar todos los bloques." onclick="Code.closeMenu(); Code.confirmDiscard();">RESTABLECER</button></div></span>';
};


dialogElement.export = function(opt_data, opt_ignored) {
  return '<div id="' + soy.$$escapeHtml(opt_data.id) + '" class="dialog ' + soy.$$escapeHtml(opt_data['class']) + '"><div id="' + soy.$$escapeHtml(opt_data['class']) + '">' + dialogElement.closeButton({code: 'location.href="#menu"; IO.form.removeListeners();'}) + '<div class="leftPane"><div class="screenshotBorder"><img src="./media/pong.png" class="screenshot"><span>Screenshot</span></div></div><div class="rightPane"><input class="filename" type="text" name="filename" id=\'' + soy.$$escapeHtml(opt_data.input_id) + '\' maxlength="200" placeholder="Title"><textarea class="description" name="description" maxlength="500" placeholder="Description"></textarea><button class="menu_buttons launch disabled" id="shipButton" disabled=true title="Comparte tus bloques al mundo." onclick="' + soy.$$escapeHtml(opt_data.code) + '">' + soy.$$escapeHtml(opt_data.label) + '</button></div></div></div>';
};

;
// This file was automatically generated from template_g.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored) {
  return '<div style="display: none"><span id="subtitle">un entorno de programación visual</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">Ver el código JavaScript generado.</span><span id="linkTooltip">Guardar y unir a bloques.</span><span id="runTooltip">Ejecuta el programa definido por los bloques del área de trabajo.</span><span id="runProgram">Ejecutar Programa</span><span id="resetProgram">Restablecer</span><span id="catLogic">Lógica</span><span id="catLoops">Bucles</span><span id="catMath">Matemática</span><span id="catText">Texto</span><span id="catLists">Listas</span><span id="catColour">Color</span><span id="catVariables">Variables</span><span id="catProcedures">Procedimientos</span><span id="httpRequestError">Hubo un problema con la solicitud.</span><span id="linkAlert">Comparte tus bloques con este enlace:\\n\\n%1</span><span id="hashError">Disculpa, \'%1\' no corresponde con ningún programa guardado.</span><span id="xmlError">Could not load your saved file.  Perhaps it was created with a different version of Blockly?</span><span id="listVariable">lista</span><span id="textVariable">texto</span></div>';
};


apps.dialog = function(opt_data, opt_ignored) {
  return '<style type="text/css">#dialog {visibility: hidden; background-color: #fff; color: #000; border: 1px solid #000; position: absolute; border-radius: 8px; box-shadow: 5px 5px 5px #888; padding: 10px;}#dialogBorder {visibility: hidden; position: absolute; background-color: #fff; color: #000; border: 1px solid #000; border-radius: 8px; box-shadow: 5px 5px 5px #888;}#dialogShadow {visibility: hidden; position: fixed; top: 0; left: 0; height: 100%; width: 100%; background-color: #000; opacity: 0.3}.dialogAnimate {transition-property: width, height, left, top, opacity; transition-duration: 0.2s; transition-timing-function: linear;}.dialogHiddenContent {visibility: hidden; position: absolute; top: 0; left: 0; z-index: -1;}</style><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.ok = function(opt_data, opt_ignored) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button onclick="BlocklyApps.hideDialog(true)">ACEPTAR</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof codepage == 'undefined') { var codepage = {}; }


codepage.messages = function(opt_data, opt_ignored) {
  return apps.messages(null) + '<div style="display: none"><span id="Code_badXml">Error al analizar XML:\\n%1\\n\\n¿Abandonar cambios?</span><span id="Code_badCode">Error del programa:\\n%1</span><span id="Code_timeout">Máximo de iteraciones de ejecución superadas.</span><span id="Code_discard">¿Eliminar los %1 bloques?</span></div>';
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
  return '<div id="leftHalf"><div class="verticalContainer"><div id="helpTitle" class="helpTitle">Esto es texto predeterminado para el título</div><div id="helpDescription" class="helpDescription">Esto es texto predeterminado para la descripción</div><br><div class="blueBorder"><div class="stepHeading">Paso anterior</div><div id="prevStep" class="helpDescription">Esto es texto predeterminado para el paso anterior</div></div><div class="blackBorder"><div class="stepHeading">Próximo paso</div><div id="nextStep" class="helpDescription">Esto es texto predeterminado para el próximo paso</div></div></div></div>';
};


helpScreen.rightHalf = function(opt_data, opt_ignored) {
  return '<div id="rightHalf"><div id="stillStuck" class="controlsContainer verticalContainer"><div class="stillStuck helpTitle">¿Sigues atascado?</div><button id="showSolutionButton" class="greenButton" onclick="Help.showBlockConfiguration();">MOSTRAR SOLUCIÓN</button><button id="walkthroughButton" class="greenButton" onclick="Help.showForumPage()">MODO DE GUÍA</button></div><div id="blockSolution" class="controlsContainer verticalContainer"><img id="blockSolutionImg"><div><button class="redButton" onclick="Help.showMenu();">ATRÁS</button></div></div><div id="forumPage" class="controlsContainer verticalContainer"><div class="helpDescription">Cargando el foro. Puede tardar algunos segundos.</div><button class="redButton" onclick="Help.showMenu();">ATRÁS</button></div></div>';
};
