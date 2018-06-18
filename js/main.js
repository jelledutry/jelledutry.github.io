window.onload = function() {

// TAGLINE ANIMATIE
    var anim = lottie.loadAnimation({
        container: document.getElementById('tagline'), // the dom element that will contain the animation
        renderer: 'canvas',
        loop: true,
        autoplay: true,
        path: '/images/tagline5.json' // the path to the animation json
    });
    anim.setSubframe(false);
    lottie.setQuality('low');

// TAGLINE POSITIE

var taglineDiv = document.getElementById('tagline');
taglineDiv.style.top = (screen.height/2)- ((taglineDiv.offsetWidth/1920*1080)/2) + "px";

// MENU POSITIE
var menuDiv = document.getElementById("menu");
var bgElem = document.getElementById('bg');
var bodyWidth = 1136;
if (bg.offsetWidth > bodyWidth){
    menuDiv.style.right = (bg.offsetWidth-bodyWidth)/2 + "px";
}
else {
    menuDiv.style.right = 0;
}

// CONTACT EMAIL NO SPAM

var first = "jelle.dutry";
var last = "gmail.com";
var complete = '<a href="mailto:' + first + '@' + last + '">' + first + '@' + last + '</a>';
var emailP = document.getElementById('emailP');
emailP.insertAdjacentHTML('afterbegin', complete );

}
