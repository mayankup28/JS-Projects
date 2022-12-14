const star = document.querySelectorAll(".fa-star");
const emojis=document.querySelectorAll(".far");
const colors=["red","orange","lightblue","lightgreen","green"]
const expression=["Angry","Poor","Nice","Happy","Super"]
const exp=document.querySelector(".exp");


upadate(0)
// console.log(star)
star.forEach((ele, index) => {
    ele.addEventListener("click", () => {
        // console.log("clicked",ind)
        upadate(index)
    })
})

function upadate(index) {
    star.forEach((el, id) => {
        if (id < index + 1) {
            el.classList.add("active");
        }else{
            el.classList.remove("active");
        }
    })

    emojis.forEach((ele,ind)=>{
        ele.style.transform=`translateX(-${index*50}px)`;
        ele.style.color=colors[index];
    })
    exp.innerHTML=expression[index]
    exp.style.color=colors[index]
}