var bmiclick = false;
var mancalaclick = false;
var dndclick = false;
var tvshowclick = false;
var bensworldclick = false;
var imagenum = [0, 0, 0, 0, 0, 0];

window.onload = function() {
    var about = document.getElementById("about");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var bmicalc = document.getElementById("bmicalc");
    $("#bmicalc").on("click", function(){$("#bmicontent").slideToggle();
                                        imagegreyer(false, false, false, true, true, false, window.bmiclick);
                                        window.bmiclick = !window.bmiclick;});
    $("#mancala").on("click", function(){$("#mancalacontent").slideToggle();
                                        imagegreyer(false, false, false, true, false, false, window.mancalaclick);
                                        window.mancalaclick = !window.mancalaclick;});
    $("#dnd").on("click", function(){$("#dndcontent").slideToggle();
                                        imagegreyer(false, false, false, true, true, false, window.dndclick);
                                        window.dndclick = !window.dndclick;});
    $("#tvshow").on("click", function(){$("#tvshowcontent").slideToggle();
                                        imagegreyer(false, false, false, true, true, false, window.tvshowclick);
                                        window.tvshowclick = !window.tvshowclick;});
    $("#bensworld").on("click", function(){$("#bensworldcontent").slideToggle();
                                        imagegreyer(true, true, true, false, false, false, window.bensworldclick);
                                        window.bensworldclick = !window.bensworldclick;});
    about.onclick = function(){clicker(about, projects, contact);
                                scroller("h1")};
    projects.onclick = function(){clicker(projects, about, contact);
                                scroller("#projectscontent")};
    contact.onclick = function(){clicker(contact, projects, about);
                                scroller("#contactcontent")};
        $(window).scroll(function() {  
    $("#bmicalclink").click(function(){window.open('https://github.com/beninverno/bmicalculator', '_blank')});
    $("#mancalalink").click(function(){window.open('https://github.com/beninverno/Mancala/tree/patch-1', '_blank')});
    $("#dndlink").click(function(){window.open('https://github.com/beninverno/dndroller', '_blank')});
    $("#tvlink").click(function(){window.open('https://github.com/beninverno/tvshowinformation', '_blank')});
    $("#bensworldlink").click(function(){window.open('http://beninverno.github.io/', '_blank')});
    var scroll = $(window).scrollTop();
    if(scroll >= 0 && scroll < $("#projectscontent").offset().top) {
        clicker(about, projects, contact)}
    else if(scroll >= $("#projectscontent").offset().top && scroll < $("#contactcontent").offset().top) {
        clicker(projects, about, contact)}
    else if(scroll >= $("#contactcontent").offset().top) {
        clicker(contact, about, projects)};
});
};

function clicker (on, off1, off2) {
    on.classList.add("selected");
    off1.classList.remove("selected");
    off2.classList.remove("selected");
}

function scroller (todiv) {
    if (todiv == "h1") {
        $('html,body').animate({
            scrollTop: 0},
            'slow'); 
    }
    else {
        $('html,body').animate({
        scrollTop: $(todiv).offset().top},
        'slow');}
}

function imagegreyer(one, two, three, four, five, six, global) {
    first = $("#js");
    second = $("#html5");
    third = $("#css");
    fourth = $("#python");
    fifth = $("#sqlite");
    sixth = $("#java");
    images = [first, second, third, fourth, fifth, sixth];
    tof = [one, two, three, four, five, six];
    /*for (i = 0; i < 5; i++) {
        if (i[tof] == true) {
            window.imagenum[i] += 1;
        }
    }*/
    for(i = 0; i < 5; i++) {
        if (tof[i] == true) {
            if(global == true && window.imagenum[i] == 1) {
                images[i].addClass("gray");
                window.imagenum[i] -= 1;
            }
            else if (global == true && window.imagenum[i] > 1) {
                window.imagenum[i] -= 1;
            }
            else if (global == false) {
                images[i].removeClass("gray");
                window.imagenum[i] += 1
            }
        }
    }
}