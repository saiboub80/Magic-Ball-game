
const button = document.querySelector("button");
const dice = document.querySelector("#dice");
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
button.addEventListener("click",function(){
    
    let rolls = [roll(6)];
    dice.innerHTML=rolls;
    
    })




//here we are using math random and unicode characters 
 function roll(num){
    let rNumber = Math.floor(Math.random()*num) +1;
    //die face start from 9856 to 9861
    let n = 9855 + rNumber;
    let char = "&#"+n+";";
    return  char;
 }

 






