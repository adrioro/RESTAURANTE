$(document).ready(function () {
    $("#SectionMenu").hide();
    $("#SectionAbout").hide();
    $("#SectionLocation").hide();
    $("#HomeSection").show();
});

//Navbar fixed//

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

//Hide Elements//

function hideSections(buttonClicked, hide1, hide2, hide3, showThis) {
    $(buttonClicked).click(function () {
        $(hide1).hide();
        $(hide2).hide();
        $(hide3).hide();
        $(showThis).show();

    });
};

hideSections("#Menu", "#HomeSection", "#SectionAbout", "#SectionLocation", "#SectionMenu");
hideSections("#Home", "#SectionMenu", "#SectionAbout", "#SectionLocation", "#HomeSection");
hideSections("#About", "#SectionMenu", "#HomeSection", "#SectionLocation", "#SectionAbout");
hideSections("#Location", "#SectionMenu", "#HomeSection", "#SectionAbout", "#SectionLocation");
hideSections("#Logo", "#SectionMenu", "#SectionAbout", "#SectionLocation", "#HomeSection");
hideSections(".GoToMenu", "#SectionAbout", "#SectionLocation", "#HomeSection", "#SectionMenu");