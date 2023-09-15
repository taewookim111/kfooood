const spoon = document.querySelector(".spoon i");
const forknife = document.querySelector(".forknife i");
const bowl = document.querySelector(".bowl i");
const pork = document.querySelector(".pork i");
const temp = document.querySelector(".temp i");
const water = document.querySelector(".water i");
const pork2 = document.querySelector(".pork2 i");
const burn = document.querySelector(".burn i");
const fire = document.querySelector(".fire i");
const crab = document.querySelector(".crab img");
const soysauce = document.querySelector(".soysauce i");
const soysauce2 = document.querySelector(".soysauce2 i");
const sea = document.querySelector(".sea i");
const sea2 = document.querySelector(".sea2 i");
const sea3 = document.querySelector(".sea3 i");
const beef = document.querySelector(".beef i");
const egg = document.querySelector(".egg i");
const fish = document.querySelector(".fish i");
const oil = document.querySelector(".oil i");
const shrimp = document.querySelector(".shrimp i");
const time = document.querySelector(".time i");
const div = document.querySelectorAll("div");
let posArr = [];

window.addEventListener("scroll", ()=>{
    let scroll = window.scrollY || window.pageYOffset;

    let zero = 0;
    let zerosix = 0.6;
    let zerosvn = 0.7; 
    let one = 1;
    let opa = zero.toString();
    let opaci = zerosix.toString();
    let opacit = zerosvn.toString();
    let opacity = one.toString();

    let onetwo = 1.2;
    let scale = onetwo.toString();

    if(scroll >= 100 && scroll < 300){
        spoon.style.transform = `rotate(105deg)`;
        forknife.style.transform = `rotate(-130deg)`;
    }else if(scroll == 0){
        spoon.style.transform = `rotate(0deg)`;
        forknife.style.transform = `rotate(-45deg)`;
    };

    if(scroll == 0 ){
        bowl.style.opacity = opacity;
        bowl.style.filter = `brigthness(1.2)`;
    }else{
        bowl.style.opacity = opaci;
    };

    if(scroll >= 450 && scroll < 730){
        pork.style.top = `${scroll + scroll + 140}px`;
        pork.style.color = `#999`;
        pork.style.opacity = opacity;
    }else if(scroll <= 435){
        pork.style.color = `pink`;
    };
    if(scroll >= 700 && scroll < 950){
        temp.style.transform = `scale(${scale})`;
        temp.style.opacity = opacit;
    }else if(scroll < 1000){
        temp.style.transform = `scale(${opa})`;
        temp.style.opacity = opa;
    };
    if(scroll >= 434 && scroll < 800){
        water.style.opacity = opacity;
        water.style.filter = `brightness(${scale})`;
        water.style.transform = `scale(${scale})`; 
    }else if(scroll >= 897){
        water.style.opacity = opaci;
        water.style.transform = `scale(${opacity})`; 
    };

    if(scroll >= 1204 && scroll < 1430){
        pork2.style.top = `${scroll + scroll - 700}px`;
        pork2.style.color = `#4A2511`;
        pork2.style.opacity = opacity;
    }
    else if(scroll <= 1250){
        pork2.style.color = `pink`;
    };
    if(scroll >= 1400 && scroll < 1600){
        burn.style.transform = `scale(${scale})`;
        burn.style.opacity = opacit;
    }else if(scroll < 1700){
        burn.style.transform = `scale(${opa})`;
        burn.style.opacity = opa;
    };
    if(scroll >= 1204 && scroll < 1431){
        fire.style.opacity = opacity;
        fire.style.filter = `brightness(${scale})`;
        fire.style.transform = `scale(${scale})`;
    }else if(scroll >= 1744){
        fire.style.opacity = opaci;
        fire.style.transform = `scale(${opacity})`;
    };

    if(scroll >= 1820 && scroll < 2177){
        crab.style.top = `${scroll + 600}px`;
        crab.style.filter = `brightness(${opaci})`;
        crab.style.opacity = opacity;
    }else if(scroll < 1821){
        crab.style.filter = `brightness(${opacity})`;
    };
    if(scroll >= 2100 && scroll < 2173){
        soysauce.style.transform = `scale(${scale})`;
        soysauce.style.opacity = opacit;
    }else if(scroll > 2450){
        soysauce.style.transform = `scale(${opa})`;
        soysauce.style.opacity = opa;
    };
    if(scroll >= 2027 && scroll < 2450){
        sea.style.opacity = opacity;
        sea.style.filter = `brightness(${scale})`;
        sea.style.transform = `scale(${scale})`;
    }else if(scroll > 2450){
        sea.style.opacity = opaci;
        sea.style.transform = `scale(${opacity})`;
    };
    if(scroll >= 2612 && scroll < 3000){
        beef.style.top = `${scroll + 600}px`;
        beef.style.color = `#4A2511`;
        beef.style.opacity = opacity;
    }else if(scroll < 2750){
        beef.style.color = `brown`;
    };
    if(scroll >= 2800 && scroll < 3190){
        soysauce2.style.transform = `scale(${scale})`;
        soysauce2.style.opacity = opacit;
    }else if(scroll > 3200){
        soysauce2.style.transform = `scale(${opa})`;
        soysauce2.style.opacity = opa;
    };
    if(scroll >= 2800 && scroll < 3100){
        egg.style.opacity = opacity;
        egg.style.filter = `brightness(${scale})`;
        egg.style.transform = `scale(${scale})`;
    }else if(scroll > 3150){
        egg.style.opacity = opaci;
        egg.style.transform = `scale(${opacity})`;
    };
    if(scroll >= 3460 && scroll < 3830){
        fish.style.top = `${scroll + 500}px`;
        fish.style.color = `yellow`;
        fish.style.opacity = opacity;
    }else if(scroll < 3450){
        fish.style.color = `lightblue`;
    };
    if(scroll >= 3500 && scroll < 4050){
        oil.style.transform = `scale(${scale})`;
        oil.style.opacity = opacit;
    }else if(scroll > 4150){
        oil.style.transform = `scale(${opa})`;
        oil.style.opacity = opa;
    };
    if(scroll >= 3670 && scroll < 3823){
        sea2.style.opacity = opacity;
        sea2.style.filter = `brightness(${scale})`;
        sea2.style.transform = `scale(${scale})`;
    }else if(scroll > 4070){
        sea2.style.opacity = opaci;
        sea2.style.transform = `scale(${opacity})`;
    };
    if(scroll >= 4130 && scroll < 4500){
        shrimp.style.top = `${scroll + 600}px`;
        shrimp.style.filter = `brightness(0.8)`;
        shrimp.style.opacity = opacity;
    }else if(scroll < 4130){
        shrimp.style.filter = `brightness(1)`;
    };
    if(scroll >= 4300 && scroll < 4600){
        time.style.transform = `scale(${scale})`;
        time.style.opacity = opacit;
    }else if(scroll > 4889){
        time.style.transform = `scale(${opa})`;
        time.style.opacity = opa;
    };
    if(scroll >= 4300 && scroll <= 4733){
        sea3.style.opacity = opacity;
        sea3.style.filter = `brightness(${scale})`;
        sea3.style.transform = `scale(${scale})`;
    }else if(scroll > 4900){
        sea3.style.opacity = opaci;
        sea3.style.transform = `scale(${opacity})`;
    };
});


