/*меню*/
$(document).ready(function() {
  $(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
});
/*скрол вниз*/
function slowScroll (id) {
  var offset = 0;
  $('html, body').animate ({
    scrollTop: $(id).offset ().top - offset
  }, 1000);
  return false;
}
