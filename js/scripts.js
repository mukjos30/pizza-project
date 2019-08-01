
// $(document).ready(function(){
$("#smal1").hide() 
$("#small2") .animate({
  opacity:1

})
$("#smal2").hover( function(){
 $(this).stop().animate({opacity:0.3});
 $("#smal1").fadeIn()
}, function(){
 $(this).stop().animate({opacity:1},500);
 $("#small1").fadeOut()
  
})

