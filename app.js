const card = document.querySelector('.card')
const thankCard = document.querySelector('.thank')
const rating = document.querySelectorAll('.rate .list')
const rateNum = document.querySelector('.rateNum')
const btn = document.querySelector('.card-btn')

rating.forEach((rate) =>{
    rate.addEventListener('click', ()=> {
        rateNum.innerHTML = rate.innerHTML;
    })
})

btn.addEventListener('click', ()=>{
    card.style.display = 'none';
    thankCard.style.display = 'flex'
})

for(let i =0; i<rating.length; i++)
{
    rating[i].onclick = function(){
        let j = 0;
        while(j < rating.length)
        {
            rating[j++].className = 'list'
        }
        rating[i].className = 'list focus'
    }
}