var randomNumber1= Math.random();
randomNumber1=Math.floor(randomNumber1*6+1);
var source1="./images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",source1);



var randomNumber2= Math.random();
randomNumber2=Math.floor(randomNumber2*6+1);
var source2="./images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",source2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else if(randomNumber2=randomNumber1){
    document.querySelector("h1").innerHTML="Draw!";
}