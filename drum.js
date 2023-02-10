//code for detect mouse  or curse pess
//instead of document.querySelectorAll we just write $(".drum") 
var num=document.querySelectorAll(".drum").length;
for(var i =0;i<num;i++){
  //addeventtlistner means its a funtion which take input here input is click is the input .and perform some work according to order here it perforn by functiion. 
  //adding event listenr just for button
document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
  var l=this.innerHTML;
  audioListner(l);
  buttonanime(l);
});
}
// code when keybord is pressed
//adding event for whole document
document.addEventListener("keypress" ,function(event){
 audioListner(event.key);
 buttonanime(event.key);
});
function audioListner(key){
  switch(key){
   
    case "f":
   var tom1 =new Audio("sounds/tom-1.mp3");
   tom1.play();
   case "a":
    var tom2 =new Audio("sounds/tom-2.mp3");
    tom2.play();
    case "i":
      var tom3 =new Audio("sounds/tom-3.mp3");
      tom3.play();
      case "z":
        var tom4 =new Audio("sounds/tom4.mp3");
        tom4.play();
        case "n":
          var snare =new Audio("sounds/snare.mp3");
          snare.play();
          case "m":
          var crash =new Audio("sounds/crash.mp3");
          crash.play();
          case "d":
   var kick =new Audio("sounds/kick-bass.mp3");
   kick.play();
  
        default :console.log;
         
   }
}
function buttonanime(key){
  var slector=document.querySelector("."+key);
  //adding css class pressed
  slector.classList.add("pressed");
  //we want back to initial state in 0.2 sec
 setTimeout(function(){
  //this is the format for settimeout
  slector.classList.remove("pressed");
 },100);

}






















    