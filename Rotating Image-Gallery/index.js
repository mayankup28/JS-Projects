const img=document.querySelector('.img-container');
const prev=document.getElementById('prev');
const next=document.getElementById('next');

let x=0;
prev.addEventListener('click',()=>{
x-=45
update()
})

next.addEventListener('click',()=>{
x+=45
update()
})

function update(){
    img.style.transform=`perspective(1000px) rotateY(${x}deg)`
}