var state=true;
$(".share-box").click(function(){
  var wide=window.innerWidth;
  if(wide>610 && state){
  $(".social-desktop")[0].classList.remove("invisible");
  $(".triangle")[0].classList.remove("invisible");
  $(".share-box img")[0].classList.add("share-icon-hover");
  $(".share-box")[0].classList.add("share-box-click")
  state=false;
}
else if(wide>610 && !state){
  $(".social-desktop")[0].classList.add("invisible");
  $(".triangle")[0].classList.add("invisible");
  $(".share-box img")[0].classList.remove("share-icon-hover");
  $(".share-box")[0].classList.remove("share-box-click")
  state=true;
}
else if(wide<610 && state){
  $(".social-mobile")[0].classList.remove("invisible");
  $(".footer")[0].classList.add("invisible");
  $(".share-icon img")[0].classList.add("share-icon-hover");
  $(".container-two")[0].classList.add("container-two-scroll-modification")
  state=false;
}
})
$(".share-icon").click(function(){
  var wide=window.innerWidth;
  if(wide<610 && !state){
  $(".social-mobile")[0].classList.add("invisible");
  $(".footer")[0].classList.remove("invisible");
  $(".share-icon img")[0].classList.remove("share-icon-hover");
  $(".container-two")[0].classList.remove("container-two-scroll-modification")
  state=true;
  }
});
