/*

Original work by Thomas Hardern. https://www.behance.net/thomasaeh126fb

 */

var currentSlide = 0; // number of current slide - 0 is info at start, 1 is slide 1, 2 is slide 2....
var TOTALSLIDES = 19; // total number of slides, starting from 1 when excluding the info, references, and "the end" slides
var billion = 1000000000;
var million = 1000000;
var thousand = 1000;
var total = 13.8 * billion;

function removeContentWrapperBackground() { // switch to dark theme
    "use strict";
    document.body.style.color = "#FFFFFF";
    document.getElementById("contentWrapper").style.background = "none";
    document.getElementById("contentWrapper").style.boxShadow = "none";
}

function addContentWrapperBackground() { // switch to light theme
    "use strict";
    document.body.style.color = "#262626";
    document.getElementById("contentWrapper").style.backgroundColor = "rgba(250,250,250,0.5)";
    document.getElementById("contentWrapper").style.boxShadow = "0px 0px 1px 2px #888";
}

function addWrapperBackgroundMouseOver() {
    document.getElementById("addWrapperBackground").style.bottom = "0px";
    document.getElementById("addWrapperBackground").style.right = "0px";
}

function addWrapperBackgroundMouseOut() {
    "use strict";
    document.getElementById("addWrapperBackground").style.bottom = "2px";
    document.getElementById("addWrapperBackground").style.right = "2px";
}

function removeWrapperBackgroundMouseOver() {
    "use strict";
    document.getElementById("removeWrapperBackground").style.bottom = "0px";
    document.getElementById("removeWrapperBackground").style.right = "62px";
}

function removeWrapperBackgroundMouseOut() {
    "use strict";
    document.getElementById("removeWrapperBackground").style.bottom = "2px";
    document.getElementById("removeWrapperBackground").style.right = "64px";
}

function setProgressValue(noIn) {
    "use strict";
    if (noIn > 0) {
        var slideNoValueToSet = 0;
        switch(noIn) {
            case 1: // overview
                slideNoValueToSet = 0;
                break;
            case 2: // Big Bang
                slideNoValueToSet = 0;
                break;
            case 3: // creation of Earth
                slideNoValueToSet = total - 4.5 * billion;
                break;
            case 4: // first life
                slideNoValueToSet = total - 3.5 * billion;
                break;
            case 5: // aerobic photo. & GOE
                slideNoValueToSet = total - 2.4 * billion;
                break;
            case 6: // development of eukaryotes
                slideNoValueToSet = total - 1.8 * billion;
                break;
            case 7: // first multicellular animals
                slideNoValueToSet = total - 850 * million;
                break;
            case 8: // 2nd snowball earth
                slideNoValueToSet = total - 700 * million;
                break;
            case 9: // 1st chordates and vertebrates
                slideNoValueToSet = total - 525 * million;
                break;
            case 10: // cambrian explosion and GOBE
                slideNoValueToSet = total - 482.5 * million;
                break;
            case 11: // 1st plants and animals on Earth
                slideNoValueToSet = total - 430 * million;
                break;
            case 12: // P/T extinction
                slideNoValueToSet = total - 251 * million;
                break;
            case 13: // T/J extinction
                slideNoValueToSet = total - 201.4 * million;
                break;
            case 14: // Montromemes, birds, and placental mammals
                slideNoValueToSet = total - 160 * million;
                break;
            case 15: // Cretaceous-Paleogene (K/Pg) extinction
                slideNoValueToSet = total - 66 * million;
                break;
            case 16: // Mammals develop into primates
                slideNoValueToSet = total - 55 * million;
                break;
            case 17: // Palaeocene/Eocene extinction
                slideNoValueToSet = total - 55 * million;
                break;
            case 18: // Development of humans
                slideNoValueToSet = total - 100 * thousand;
                break;
            case 19: // Culture and society develop
                slideNoValueToSet = total - 0.5 * thousand;
                break;
            case 20: // finish
                slideNoValueToSet = total;
                break;
            default: // info or before
                slideNoValueToSet = 0;
                break;
        }
        document.getElementById("slideNo").value = slideNoValueToSet;
        showProgressBar();
    }
    else {
        hideProgressBar();
    }
}

function showProgressBar() {
    "use strict";
    document.getElementById("slideNo").style.visibility = "visible";
    document.getElementById("slideNoLabel").style.visibility = "visible";
}

function hideProgressBar() {
    "use strict";
    document.getElementById("slideNo").style.visibility = "hidden";
    document.getElementById("slideNoLabel").style.visibility = "hidden";
}

function backMouseOver() {
    "use strict";
    document.getElementById("backButton").style.position="absolute";
    document.getElementById("backButton").style.margin="-22px 0px 0px 2px";
}

function forwardMouseOver() {
    "use strict";
    document.getElementById("forwardButton").style.position="absolute";
    document.getElementById("forwardButton").style.margin="-22px 2px 0px 0px";
}

function backMouseOut() {
    "use strict";
    document.getElementById("backButton").style.position = "absolute";
    document.getElementById("backButton").style.margin = "-25px 0px 0px 0px";
}

function forwardMouseOut() {
    "use strict";
    document.getElementById("forwardButton").style.position = "absolute";
    document.getElementById("forwardButton").style.margin = "-25px 0px 0px 0px";
}

function hideAllSlides() {
    "use strict";
    var slides = document.getElementsByClassName("slide");
    for (var i=0; i < slides.length; i = i + 1) {
        slides[i].style.visibility = "hidden";
    }
    document.getElementById("backButton").style.visibility = "visible";
    document.getElementById("forwardButton").style.visibility = "visible";
    document.getElementById("slideNo").innerHTML="";
}


function showReferences() {
    "use strict";
    hideAllSlides();
    document.getElementById("forwardButton").style.visibility = "hidden";
    document.getElementById("references").style.visibility = "visible";
    currentSlide = -1;
    hideProgressBar();
    setProgressValue(0);
}

function showInfo() {
    "use strict";
    hideAllSlides();
    document.getElementById("backButton").style.visibility = "hidden";
    document.getElementById("info").style.visibility = "visible";
    currentSlide = 0;
    hideProgressBar();
    setProgressValue(0);
}


function goBack() {
    "use strict";
    if (currentSlide == -1 || currentSlide == 1) { // going back from references or slide 1
        showInfo();
    }

    else {
        var slideToBeNo = currentSlide - 1;
        var slideToBe = "slide" + slideToBeNo;
        hideAllSlides();
        setProgressValue(slideToBeNo);
        document.getElementById(slideToBe).style.visibility = "visible";
        currentSlide = slideToBeNo;
    }
}

function goForward() {
    "use strict";
    var slideToBeNo = currentSlide + 1;
    var slideToBe = "slide" + slideToBeNo;
    hideAllSlides();
    setProgressValue(slideToBeNo);
    document.getElementById(slideToBe).style.visibility = "visible";
    if (slideToBeNo == TOTALSLIDES + 1) {
        document.getElementById("forwardButton").style.visibility = "hidden";
    }
    currentSlide = slideToBeNo;
}

function checkKey(e) {
    "use strict";
    e = e || window.event;

    if (e.keyCode == '37') { // left arrow
        if (currentSlide != 0) { // can move left
            goBack();
        }
    }
    
    else if (e.keyCode == '39') { // right arrow
        if (currentSlide != -1 && currentSlide != TOTALSLIDES + 1) { // can move right
            goForward();
        }
    }
    
    else if (e.keyCode == '109' || e.keyCode == '189') { // minus sign on diff keys
        removeContentWrapperBackground();
    }
    
    else if (e.keyCode == '107' || e.keyCode == '187') { // plus sign on diff keys
        addContentWrapperBackground();
    }
}

document.onkeydown = checkKey;