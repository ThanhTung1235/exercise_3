window.onload = hi();
function hi() {
    var btn_right = document.getElementById("right");
    var btn_left = document.getElementById("left");
    var scroll = document.getElementById("scroll");
    btn_right.onclick = function () {
        scroll.scrollTo(1000, 0);
        btn_right.classList.add("d-none");
        btn_left.classList.remove("d-none");

    };

    btn_left.onclick = function () {
        scroll.scrollTo(0, 0);
        btn_right.classList.remove("d-none");
        btn_left.classList.add("d-none");
    }
}

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
    }
    else {

        nav.classList.remove("sticky");
    }
}



