const mask = document.querySelectorAll(".mask");
const hidden = document.querySelectorAll(".hidden");
const airplane = document.querySelector(".map3");

mask.forEach((el,index)=>{
    el.addEventListener("click", ()=>{
        mask[index].classList.remove("on");
        hidden[index].classList.add("on");
    })
})
hidden.forEach((el,index)=>{
    el.addEventListener("click", ()=>{
        hidden[index].classList.remove("on");
        mask[index].classList.add("on");
    })
})

window.addEventListener("scroll",()=>{
    let scroll = window.scrollY || window.pageYOffset
    || document.documentElement.scrollTop;
    if(scroll >= 5600){
        airplane.style.transform = `rotate(-90deg)`;
    }else if(scroll < 5500){
        airplane.style.transform = `rotate(0deg)`;
    }
})
