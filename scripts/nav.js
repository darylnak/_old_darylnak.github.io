$(window).scroll(function(){
  $(".learn-more").css("opacity", 1 - $(window).scrollTop() / 700);
  $("#personal-txt").css("opacity", 0 + $(window).scrollTop() / 600);
  $(".button").css("opacity", 0 + $(window).scrollTop() / 600);
  $("#construc").css("opacity", 0 + $(window).scrollTop() / 600);
});
