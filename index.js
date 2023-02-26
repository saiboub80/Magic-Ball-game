let rNumber;
const button = document.querySelector("button");
const dice = document.querySelector("#dice");
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const player1Name=document.querySelector("#player1Name");
const player2Name=document.querySelector("#player2Name");

let askName = false;


function getName(){
    if(askName===false){
    let name1 = prompt("welcome to magis Ball, You will select 'EVEN NUMBER', please Enter your name");
    player1Name.textContent = name1;
    let name2 =prompt("welcome to magis Ball, You will select 'ODD NUMBER', please Enter your name");
    player2Name.textContent= name2;
    console.log(name1, name2)
    askName = true
    }

    }






button.addEventListener("click",function(){
    getName() ===false

    let rolls = [roll(6)];
    dice.innerHTML=rolls;
})
//click reset to start over the game
const playAgain = document.querySelector('#playAgain');
playAgain.addEventListener('click', reset);


 // Reset the game 
function reset(){
    //Reset score 
    scoreNumber = 0;
    //Reload the page
    location.reload();
  }
  
   
//here we are using math random and unicode characters 
 function roll(num){
    rNumber = Math.floor(Math.random()*num) +1;
    console.log(rNumber)
    
    if(rNumber%2===0){
        //let sum =rNumber;
        let sum =10
        console.log(sum)
        let scoreNumber = parseInt(score1.innerHTML) ;
        scoreNumber+= sum
        
        console.log(scoreNumber)
        score1.innerHTML = scoreNumber;
        if(scoreNumber>=100){
            alert('score1 is the winner, Please Click on OK to Start A New Game',reset());
        }
        
        

    }else{
        let sum =10;
        console.log(sum)
        let scoreNumber = parseInt(score2.innerHTML) ;
        scoreNumber+= sum
        console.log(scoreNumber)
        score2.innerHTML = scoreNumber;
        if(scoreNumber>=100){
            alert('score2 is the winner, Please Click on OK to Start A New Game',reset());
        }
    }

     //die face start from 9856 to 9861
    let n = 9855 + rNumber;
    let char = "&#"+n+";";
    return  char;
        
    }
   

 

 






