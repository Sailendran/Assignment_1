var navbar = document.getElementById("menu");

function closeNavbar(){
    navbar.style.top = "-300vh";
    unlockScroll();
}

function openNavbar(){
    navbar.style.top = "0vh";
    window.scrollTo({top: 0});
    sleep(10000);
    lockScroll();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function lockScroll(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);
    };
}

function unlockScroll(){
    window.onscroll=function(){};
}