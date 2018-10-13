$(document).ready(function() {
  $('#fullpage').fullpage({
    //options here
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    autoScrolling: true,
    sectionsColor: ['#3AD29F', '#6C63FF']
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);
});
