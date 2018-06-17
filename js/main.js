window.onload = function() {

// TAGLINE ANIMATIE
    var anim = lottie.loadAnimation({
        container: document.getElementById('tagline'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/images/tagline.json' // the path to the animation json
    });

// TAGLINE POSITIE

var taglineDiv = document.getElementById('tagline');
taglineDiv.style.top = (screen.height/2)- ((taglineDiv.offsetWidth/1920*1080)/2) + "px";


}