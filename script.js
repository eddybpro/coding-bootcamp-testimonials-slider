const cards = document.querySelectorAll('.card'),
nextBtn = document.querySelectorAll('.next'),
prevBtn = document.querySelectorAll('.prev');


let counter = 0;

cards.forEach((card, idx)=>{
    card.style.left = `${idx * 100}%`;
})

nextBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        counter++;
        if(counter > cards.length-1){
            return false;
        }else{
            slider();
        }
    })
})

prevBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        counter--;
        if(counter < 0){
            return false;
        }else{
            slider();
        }
    })
})

function slider(){
    cards.forEach(card=>{
        card.style.transform = `translateX(-${counter * 100}%)`
    })
}