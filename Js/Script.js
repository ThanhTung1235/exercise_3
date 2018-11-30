var nav = document.getElementById("navbar");
var sticky = nav.offsetTop;
window.onscroll = function () {
    if (window.pageYOffset == 0){
        nav.classList.add("d-none");
    } else {
        nav.classList.remove("d-none");
        Scroll_menu();
    }
};

function Scroll_menu() {
    if (window.pageYOffset >= sticky){
        nav.classList.add("sticky")
    }
    else {

        nav.classList.remove("sticky");
    }
}
