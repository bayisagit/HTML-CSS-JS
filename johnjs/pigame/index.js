const diceel=document.querySelector('.dice');
const score0=document.querySelector('#score-0');
const score1=document.getElementById('score-1');
const btnnew=document.querySelector('.btn-new');
const btnroll=document.querySelector('.btn-roll');
const btnhold=document.querySelector('.btn-hold');
const curent0el=document.getElementById('current-0');
const curent1el=document.getElementById('current-1');
const player0el=document.querySelector('.player-0-panel');
const player1el=document.querySelector('.player-1-panel');

let curentscore;
let activeplayer;
let scores;
let playing;


const init = function(){
  curentscore=0;
  activeplayer=0;
  scores=[0,0];
  playing=true;
  score0.textContent=0;
  score1.textContent=0;
  curent0el.textContent = 0;
  curent1el.textContent = 0;  
  diceel.classList.add('hidden');
  player0el.classList.remove('playerwiner');
  player1el.classList.remove('playerwiner');
  player0el.classList.add('active');
  player1el.classList.remove('active');
};
init();

const switchuser= function(){
  document.getElementById(`current-${activeplayer}`).textContent=0;
  activeplayer=activeplayer===0 ? 1 : 0;
  curentscore=0;
  player0el.classList.toggle('active');
  player1el.classList.toggle('active');
};


btnroll.addEventListener('click',function(){
  if(playing){
    const dice =Math.trunc(Math.random()*6)+1;
    console.log(dice);
    diceel.classList.remove('hidden');
    diceel.src = `dice${dice}.jpg`;
    if(dice!==1){
      curentscore+=dice;
      document.getElementById(`current-${activeplayer}`).textContent=curentscore;
    }
    else{
      switchuser();
    }
  }
});
btnhold.addEventListener('click', function(){
  if(playing){
    scores[activeplayer] +=curentscore;
    document.getElementById(`score-${activeplayer}`).textContent=scores[activeplayer];
    if(scores[activeplayer] >=100){
      playing =false;
      diceel.classList.add('hidden');
      document.querySelector(`.player-${activeplayer}`).classList.add('playerwiner');
      document.querySelector(`.player-${activeplayer}`).classList.remove('active');
    }
    switchuser();
  }
});
btnnew.addEventListener('click',init);