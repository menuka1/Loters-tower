
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en', // Set the default language of the page
    includedLanguages: 'en,si', // Specify the languages to include in the dropdown
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

