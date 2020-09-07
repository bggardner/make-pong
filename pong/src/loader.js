function _loadScript(script, callback) {
  var s = document.createElement('script');
  s.type = "text/javascript";
  s.src = script;
  s.async = false;
  s.addEventListener('load', callback);

  document.getElementsByTagName('head')[0].appendChild(s);
}

function loadScriptsSync(scripts, callback) {
  var loadedIndex = 0;
  var toLoad = scripts.length;

  function nextScript() {
    if (loadedIndex === toLoad) {
      return callback();
    }
    _loadScript(scripts[loadedIndex++], nextScript)
  }

  nextScript();
}
