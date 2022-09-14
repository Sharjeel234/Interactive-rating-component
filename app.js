const card = document.querySelector('.card')
const thankCard = document.querySelector('.thank')
const rating = document.querySelectorAll('.rate li')
const rateNum = document.querySelector('.rateNum')
const btn = document.querySelector('.card-btn')

rating.forEach((rate) =>{
    rate.addEventListener('click', ()=> {
        rateNum.innerHTML = rate.innerHTML;
        rate.classList.add('focus')
    })
})

btn.addEventListener('click', ()=>{
    card.style.display = 'none';
    thankCard.style.display = 'flex'
})
