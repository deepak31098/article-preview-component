document.getElementsByClassName("footer")[0].addEventListener("mouseover",function(){
  var wide=window.innerWidth;
  if(wide<610){
  document.getElementsByClassName("social-mobile")[0].classList.remove("invisible");
  document.getElementsByClassName("footer")[0].classList.add("invisible");
  document.querySelectorAll(".share-icon img")[0].classList.add("share-icon-hover");
  document.getElementsByClassName("container-two")[0].classList.add("container-two-scroll-modification")
}});


document.getElementsByClassName("footer")[0].addEventListener("mouseout",function(){
  var wide=window.innerWidth;
  if(wide<610){
  document.getElementsByClassName("social-mobile")[0].classList.add("invisible");
  document.getElementsByClassName("footer")[0].classList.remove("invisible");
  document.getElementsByClassName("container-two")[0].classList.remove("container-two-scroll-modification")
}});

document.getElementsByClassName("share-box")[0].addEventListener("mouseover",function(){
  var wide=window.innerWidth;
  if(wide>610){
  document.getElementsByClassName("social-desktop")[0].classList.remove("invisible");
  document.getElementsByClassName("triangle")[0].classList.remove("invisible");
  document.querySelectorAll(".share-box img")[0].classList.add("share-icon-hover");
}});


document.getElementsByClassName("footer")[0].addEventListener("mouseout",function(){
  var wide=window.innerWidth;
  if(wide>610){
  document.getElementsByClassName("social-desktop")[0].classList.add("invisible");
  document.getElementsByClassName("triangle")[0].classList.add("invisible");
  document.querySelectorAll(".share-box img")[0].classList.remove("share-icon-hover");
}});
