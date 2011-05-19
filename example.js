/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
  var ss = $('#container').simpleSlider();
  
  ss.bind('slide_limit', function(e, type) {
    if(!ss.settings.wrap) {
      if(type == 'start') $('#back').hide();
      if(type == 'end') $('#forward').hide();
    }
  });

  ss.bind('slide_start', function() {
    $('#back, #forward').show();
  });

  $('#back').click(ss.back);
  $('#forward').click(ss.forward);

});


