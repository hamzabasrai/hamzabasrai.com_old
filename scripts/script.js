$(document).ready(function() {
  $('#fullpage').fullpage({
    //options here
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    autoScrolling: true,
    sectionsColor: [ ],
    scrollbar: true,
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);
});
