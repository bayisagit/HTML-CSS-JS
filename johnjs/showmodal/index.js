const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnclosed=document.querySelector('.closemodal');
const btnopen=document.querySelectorAll('.showmodal');
console.log(btnopen);
const closemodal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const openmodel=function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i=0;i<btnopen.length;i++){
    btnopen[i].addEventListener('click',openmodel);
};
btnclosed.addEventListener('click',closemodal);
overlay.addEventListener('click',closemodal);
document.addEventListener('keydown',function(e){
    console.log(e)
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closemodal();
        }
    }
});