const decrease=document.querySelector('.decrease')
const reset=document.querySelector('.reset')
const value=document.querySelector('.value')
const btn=document.querySelector('.buttons')
const counter=document.querySelector('.counter')
const increase=document.querySelector('.increase')

let count=0

btn.addEventListener('click',function(e) {
    if(e.target.classList.contains('decrease')){
        value.style.color='red'
        count--
    }
    else if(e.target.classList.contains('reset')){
        value.style.color='rgb(0, 143, 175)'
        count=0
    }
    else if(e.target.classList.contains('increase')){
        value.style.color='green'
        count++
    }
    
    value.textContent = count;
    
})


