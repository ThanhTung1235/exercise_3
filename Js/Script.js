var btn_right = document.getElementById("right");
var btn_left = document.getElementById("left");
var scroll = document.getElementById("scroll");
var hi = document.getElementById("hi");
var close = document.getElementById("close");
var overlay = document.getElementById("overlay");

window.onload = function () {
    document.onclick = function (e) {
        if (e.target.id == 'overlay') {
            hi.style.display = 'none';
            overlay.style.display = "none";
        }
        console.log(e.target.className);
        if (e.target.className == 'fas fa-cloud-sun btn-wheather') {
            hi.style.display = 'block';
            overlay.style.display = "block";
        }
    };


};
close.onclick = function () {
    hi.classList.add("d-none");
};

function myFunction() {
    btn_left.classList.remove("d-none");
    var a = scroll.scrollLeft;
    // console.log(a);
    // console.log(scroll.scrollWidth);
    // console.log(scroll.offsetWidth);
    if (scroll.scrollLeft == 0) {
        btn_right.classList.remove("d-none");
        btn_left.classList.add("d-none");
    } else if (scroll.offsetWidth > a && 0 < a) {
        btn_right.classList.remove("d-none");
        btn_left.classList.remove("d-none");
    }
    if (scroll.scrollWidth == a + scroll.offsetWidth) {
        btn_right.classList.add("d-none")
    }
}

btn_right.onclick = function () {
    scroll.scrollTo(scroll.scrollWidth, 0);
    btn_right.classList.add("d-none");
    btn_left.classList.remove("d-none");
};

btn_left.onclick = function () {
    scroll.scrollTo(0, 0);
    btn_right.classList.remove("d-none");
    btn_left.classList.add("d-none");
};

var nav = document.getElementById("navbar");
var sticky = nav.offsetTop;
window.onscroll = function () {
    if (window.pageYOffset == 0) {
        nav.classList.add("d-none");
    } else {
        nav.classList.remove("d-none");
        Scroll_menu();
    }
};

function Scroll_menu() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    } else {

        nav.classList.remove("sticky");
    }
}



