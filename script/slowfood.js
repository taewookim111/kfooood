window.addEventListener("load",()=>{
    //로드가 되면
    //변수grid에 플러그인을 사용할 대상의 정보를 넣은 것
    const grid = new Isotope(".isotope",{ //배치할 요소를 감싼 부모
        itemSelection : "article", //배치할 요소의 이름
        columnWidth : "article", //너비값을 구할 요소명
        transitionDuration : "0.5s" //화면 재배치시 요소가 움직이는 속도
    });

    let Btns = document.querySelectorAll("#pastes ul li");
    for(let el of Btns){
        el.addEventListener("click", (e)=>{
            e.preventDefault();
            //a태그의 속성값을 추출해서 변수로 담습니다
            let sort = e.currentTarget.querySelector("a").getAttribute("href");
            // el.querySelector("a").getAttribute("href");
            //플러그인을 적용할 대상에, arrange()메서드를 사용해서
            //filter를 적용합니다
            grid.arrange({
                filter : sort
            });
            for(let el of Btns) el.classList.remove("on");
            e.currentTarget.classList.add("on");
            // el.classList.add("on");
        })
    }
})