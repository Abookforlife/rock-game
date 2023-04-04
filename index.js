 function functionMain(){
var randomNum = Math.floor((Math.random()*3)+1);
if (randomNum == 1) {
document.querySelector("p").innerHTML="Tie";
document.querySelector("img.img2").src="images/rock.png";
}
else if (randomNum == 2) {
document.querySelector("p").innerHTML="computer point";
document.querySelector("img.img2").src="images/paper.jfif";
document.querySelector("img.img1").src="images/rock.png";
}
else{
document.querySelector("p").innerHTML="player point";
document.querySelector("img.img2").src="images/scissors.jpg";
document.querySelector("img.img1").src="images/rock.png";
 }
 }
function functionTwo(){
var randomNum = Math.floor((Math.random()*3)+1);
if (randomNum == 2) {
document.querySelector("p").innerHTML="Tie";
document.querySelector("img.img2").src="images/paper.jfif";
document.querySelector("img.img1").src="images/paper.jfif";
}
else if (randomNum == 3) {
document.querySelector("p").innerHTML="Computer point";
document.querySelector("img.img2").src="images/scissors.jpg";
document.querySelector("img.img1").src="images/paper.jfif";
}
else{
document.querySelector("p").innerHTML="player point";
document.querySelector("img.img2").src="images/rock.png";
document.querySelector("img.img1").src="images/paper.jfif";
 }
 }
 function functionFinal(){
 var randomNum = Math.floor((Math.random()*3)+1);
if (randomNum == 3) {
document.querySelector("p").innerHTML="Tie";
document.querySelector("img.img2").src="images/scissors.jpg";
document.querySelector("img.img1").src="images/scissors.jpg";
}
else if (randomNum == 1) {
document.querySelector("p").innerHTML="Computer point";
document.querySelector("img.img2").src="images/rock.png";
document.querySelector("img.img1").src="images/scissors.jpg";
}
else{
document.querySelector("p").innerHTML="player point";
document.querySelector("img.img2").src="images/paper.jfif";
document.querySelector("img.img1").src="images/scissors.jpg";
 }
 }