window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

/* Highlight current link */
function linkHighlight() {
    $('nav a').removeClass('selected');
    $('nav a').click(function () {
        $('nav a').removeClass('selected');
        $(this).toggleClass('selected');
    });
}
linkHighlight();