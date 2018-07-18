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
var whoAmIDiv = document.getElementById('whoami');
anim.addEventListener ("DOMReady", taglineDiv.style.top = (screen.height/2) - ((taglineDiv.offsetWidth/1920*1080)/2) - whoAmIDiv.offsetHeight + "px");


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
var complete = first + '@' + last;
var eLink = "<a href='mailto:" + complete + "'>" + complete + "</a>";
var emailP = document.getElementById('emailP');
var emailItem = document.getElementById('emailItem');
emailP.setAttribute('action', 'https://formspree.io/'+ complete);
emailItem.insertAdjacentHTML('afterbegin', eLink );

}

// Contactform spamcheck verborgen veld

function validateForm() {
    var sCheck = document.forms["contactForm"]["sCheck"].value;

    if (sCheck != ""){ //checkt of verborgen veld is ingevuld
        return false;
    }

}

// Menu button functionality

function menuClick() {
    
    var menuBtn = document.getElementById('menuBtn');
    var menuItems = document.getElementById('menu-items');
    menuBtn.style.visibility = "hidden";
    menuItems.style.visibility = "visible";


    setTimeout(function() {
        menuBtn.style.visibility = "visible";
        menuItems.style.visibility = "hidden";
      }, 4000);
}