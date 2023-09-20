
window.addEventListener("load",()=>{
    const grid = new Isotope(".isotope",{
        itemSelection : "article",
        columnWidth : "article",
        transitionDuration : "0.5s"
    });

    let Btns = document.querySelectorAll("#pastes ul li");
    for(let el of Btns){
        el.addEventListener("click", (e)=>{
            e.preventDefault();
            let sort = e.currentTarget.querySelector("a").getAttribute("href");
            grid.arrange({
                filter : sort
            });
            for(let el of Btns) el.classList.remove("on");
            e.currentTarget.classList.add("on");
        })
    }

})
