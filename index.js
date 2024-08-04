var randomNum=Math.random();
var num=Math.floor(randomNum*6)+1;

var imageS="./images/dice"+num+".png";
document.querySelectorAll("img")[0].setAttribute("src",imageS);




var randomNum2=Math.random();
var num2=Math.floor(randomNum2 *6)+1;
var imageS2="./images/dice"+num2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imageS2);


if(num>num2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins🙌!!";
}
else if(num2>num)
{
    document.querySelector("h1").innerHTML="Player 2  Wins💋!!";

}
else{
    document.querySelector("h1").innerHTML="Its a Draw🤷‍♂️";
}











