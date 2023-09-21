const Btns = document.querySelectorAll("#pastes ul li");
const menu = document.querySelector("#slowfood");

window.addEventListener("load",()=>{
    const grid = new Isotope(".isotope",{
        itemSelection : "article",
        columnWidth : "article",
        transitionDuration : "0.5s"
    });
    menu.style.left = `0`;
    for(let el of Btns){
        el.addEventListener("click", (e)=>{
            e.preventDefault();
            let sort = e.currentTarget.querySelector("a").getAttribute("href");
            grid.arrange({
                filter : sort
            });
            for(let el of Btns) el.classList.remove("on");
            e.currentTarget.classList.add("on");
            menu.style.height = `140%`;
        })
    }
})

