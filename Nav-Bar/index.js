let ham = document.querySelector('.ham');
let tag = document.querySelector('.list')
let swichbtn = true;


// a swich function 
const flip = () => { swichbtn = !swichbtn }
ham.addEventListener('click', () => {
    if (swichbtn) {
        tag.classList.add('active')
        flip()
    }
    else {
        tag.classList.remove('active')
        flip()
    }

})