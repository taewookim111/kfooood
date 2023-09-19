const btnMetro = document.querySelectorAll("#metro nav a");
const boxMetro = document.querySelectorAll("#metro section");
const tapmenu = document.querySelector("#tapmenu");
const btns = tapmenu.querySelectorAll("ul li");
const boxes = tapmenu.querySelectorAll("section article");
const aside = document.querySelector(".aside");
const openTag = document.querySelector("#box a");
const closeTag = aside.querySelector("i");
const title = document.querySelector(".title");
const layout = document.querySelector("#layout");
const articles = layout.querySelectorAll(".wrap article");
const Xtag = layout.querySelectorAll(".wrap article i");

let pages = document.querySelector("body").children;
console.log(pages);
let pages_arr = Array.from(pages);
console.log(pages_arr);
posArr = []; 
const lastText = tapmenu.querySelector("h1"); 
let title1 = tapmenu.querySelector(".title1");
let title2 = tapmenu.querySelector(".title2");


btnMetro.forEach((el, index)=>{
    el.addEventListener("click", (e)=>{
        e.preventDefault();
        add(btnMetro, index);
        add(boxMetro, index);

        setTimeout(()=>{
            active(boxMetro, index);
        }, 0)
    })
})



for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        e.preventDefault();
        pop(btns, i);
        pop(boxes, i);
    })
}

setPosition();

function setPosition(){
    for(let el of pages_arr){
        posArr.push(el.offsetTop);
    }
}

window.addEventListener("scroll", ()=>{
    let scroll = window.scrollY || window.pageYOffset
    || document.documentElement.scrollTop;

    title.style.left = `${scroll - posArr[4] + 600}px`;
    lastText.style.left = `${scroll - posArr[7] + 470}px`;
    let Num1 = 1000;
    if(scroll >= posArr[6] - Num1 && scroll < posArr[7] - 150){
        title1.style.left = `${scroll - posArr[7] + 200}px`;
        title2.style.right = `${scroll - posArr[7] + 200}px`;
    };
    
});

for(let el of articles){
    el.addEventListener("mouseenter", (e) => {
        e.currentTarget.querySelector("video").play();
        e.currentTarget.classList.add("on");
        for(let el of Xtag){
            el.addEventListener("click", (e)=>{
                e.currentTarget.closest("article").classList.remove("on");
                e.currentTarget.closest("article").querySelector("video").pause();
            })
        }
    })
    el.addEventListener("mouseleave", (e) => {
        e.currentTarget.querySelector("video").pause();
        e.currentTarget.classList.remove("on");
    })
}




openTag.addEventListener("click", (e)=>{
    e.preventDefault();
    aside.classList.add("on")
})

closeTag.addEventListener("click", ()=>{
    aside.classList.remove("on");
})


function add(list, idx){
    for(let idx of list) idx.classList.remove("on");
    list[idx].classList.add("on");
}

function active(list, idx){
    for(let idx of list) idx.classList.remove("active");
    list[idx].classList.add("active");
}

function pop(list, index) {
    for (let box of list) { box.classList.remove("on"); }
    list[index].classList.add("on");
}