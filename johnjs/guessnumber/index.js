/*document.querySelector('.message').textContent='correct number'
document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=20;
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value); 
*/
let secretnum = Math.trunc(Math.random()*20)+1;
let score =20;
let highscore=0;
document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent='no number';
    }
    else if(guess === secretnum){
        document.querySelector('.message').textContent='correct number';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent=secretnum; 
        if(score>highscore){
            highscore=score;  
            document.querySelector('.score').textContent=highscore;
        }
    }
    else if(guess>secretnum){
        if(score>1){
            document.querySelector('.message').textContent='too high';
            score--;
            document.querySelector('.labelscore').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='you lost the game';
            document.querySelector('.labelscore').textContent=0;
        }
    }
    else if(guess<secretnum){
        if(score>1){
            document.querySelector('.message').textContent='too low';
            score--;
            document.querySelector('.labelscore').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='you lost the game';
            document.querySelector('.labelscore').textContent=0;
        }

    }

});
document.querySelector('.again').addEventListener('click',function(){
    score=20
    secretnum = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='start guessing...';
    document.querySelector('.labelscore').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.number').style.width='15rem';
});
