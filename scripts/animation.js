//$(document).ready(function()
//{
  setInterval(function(){
    var $me = $("#me-pic");
    if($me.is(":hover")) {
       $me.toggleClass(bounceIn fade);
    }
  });
  /*$('#me-pic').on('mouseenter', function()
  {
    $('#me-pic').toggleClass('bounceIn flash');
  });*/
//});
