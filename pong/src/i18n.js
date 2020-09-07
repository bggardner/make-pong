var SUPPORTED_LOCALES = [
  'en',
  'en-QQ',
  'es-AR',
];

function getUserLanguage() {
  var language = window.navigator.languages ?
		window.navigator.languages[0] :
        window.navigator.userLanguage || window.navigator.language || 'en',
    p = language.indexOf('-');


  // check if full locale is supported
  if (SUPPORTED_LOCALES.indexOf(language) > -1) {
    return language;
  }

  // otherwise check that if just the language is supported
  language = (p > -1) ? language.substr(0, p) : language;
  if (SUPPORTED_LOCALES.indexOf(language) > -1) {
    return language;
  }
  // language is not supported so default to 'en'
  return 'en';
}
