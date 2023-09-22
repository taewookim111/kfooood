const panel2 = document.querySelector(".panel2");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const lis = panel2.querySelectorAll("li");
console.log(lis);
const map = document.querySelector("#map")
const div = map.querySelectorAll("div");
const leftDiv = map.querySelector(".left");
const rightDiv = map.querySelector(".right");
const leftDiv1 = map.querySelector(".left1");
const rightDiv1 = map.querySelector(".right1");
const leftDiv2 = map.querySelector(".left2");
const chilli = document.querySelector(".banner h2");
const bg2 = document.querySelector(".bg2");
const bg3 = document.querySelector(".bg3");
const h2 = document.querySelectorAll(".text");
console.log(h2);
const p = document.querySelectorAll(".text1")
console.log(leftDiv);
let posArr = [];
let len = lis.length;
let lens = div.length;
console.log(lens);
enableClick = true;
let zero = 0;
let one = 1;
zerostr = zero.toString();
onestr = one.toString();

init();


prev.addEventListener("click", (e) => {
    e.preventDefault();
    h2.forEach((el, index)=>{
        el.classList.add("off");
    })
    p.forEach((el, index)=>{
        el.classList.add("off");
    })
    if(enableClick) {
       prevSlide();
       setTimeout(()=>{
           for(let el of h2) el.classList.remove("off");
           for(let el of p) el.classList.remove("off");
       },1100)
       enableClick = false;
    }
})

next.addEventListener("click", (e) => {
    e.preventDefault();
    h2.forEach((el, index)=>{
        el.classList.add("off");
    })
    p.forEach((el, index)=>{
        el.classList.add("off");
    })
    if (enableClick) {
        nextSlide();
        setTimeout(()=>{
            for(let el of h2) el.classList.remove("off");
            for(let el of p) el.classList.remove("off");
        },1100)
        enableClick = false;
    }
})



for(let el of div){
    posArr.push(el.offsetTop);
}
posArr.push(div[lens - 1].offsetTop + div[lens - 1].offsetHeight);
let pos_Arr = Array.from(posArr);
console.log(pos_Arr); //[1700, 2500, 3400, 4300, 5200, 6040]
window.addEventListener("scroll", ()=>{
    let scroll = window.scrollY || window.pageYOffset
    || document.documentElement.scrollTop;

    let bgscroll = scroll - 300;
    let opa = (0 + bgscroll / 1000).toString();
    bg2.style.opacity = opa;
    let bgscroll2 = scroll - 5400;
    let opac = (0 + bgscroll2 / 1000).toString();
    bg3.style.opacity = opac;

    
    if(window.screen.width >= 1179){
        if(scroll >= pos_Arr[0] - 900 && scroll <= pos_Arr[0] - 104){
            leftDiv.style.left = `${scroll - pos_Arr[0] + 290}px`;
        };
    
        if(scroll >= pos_Arr[0] - 300 && scroll <= pos_Arr[1] - 125){
            rightDiv.style.right = `${scroll - pos_Arr[1] + 330}px`;
        };
    
        if(scroll >= pos_Arr[1] - 900 && scroll <= pos_Arr[2] - 90){
            leftDiv1.style.left = `${scroll - pos_Arr[2] + 290}px`;
        };
        
        if(scroll >= pos_Arr[2] + 100 && scroll <= pos_Arr[3] - 300){
            rightDiv1.style.right = `${scroll - pos_Arr[3] + 450}px`;
        };
    
        if(scroll >= pos_Arr[3] + 200 && scroll <= pos_Arr[4] - 200){
            leftDiv2.style.left = `${scroll - pos_Arr[4] + 420}px`;
        };
    
        if(scroll >= 0 && scroll <= pos_Arr[0] - 950){
            chilli.style.left = `${scroll - 452}px`;
        };
    }else if(window.innerWidth < 1179){
        for(let el of div){
            el.style.left = "5%";
            chilli.style.display = "none";
        }
    }

});

function add(list, idx){
    for(let idx of list) idx.classList.remove("on");
    list[idx].classList.add("on");
}

function prevSlide() {
    new Anim(panel2, {
        prop: "left",
        value: "0%",
        duration: 500,
        callback: () => {
            panel2.style.left = "-100%";
            panel2.prepend(panel2.lastElementChild);
            enableClick = true;
        }
    })
}

function nextSlide() {
    new Anim(panel2, {
        prop: "left",
        value: "-200%",
        duration: 500,
        callback: () => {
            panel2.append(panel2.firstElementChild);
            panel2.style.left = "-100%";
            enableClick = true;
        }
    });
}

function init(){
    panel2.style.width = `${100 * len}%`;
    //ul의 너비값을 li의 갯수를 js가 세어서 자동 계산하는 코드
    lis.forEach((index) => {
    //각 li의 너비값을 자동으로 계산하는 코드
    index.style.width = `${100 / len}%`;
    })
    panel2.style.left = "-100%";
    panel2.prepend(panel2.lastElementChild);
    }

    function add(list, idx){
        for(let idx of list) idx.classList.remove("on");
        list[idx].classList.add("on");
    }