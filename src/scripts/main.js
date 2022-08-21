'use strict'

import { gsap } from "gsap";

//MOVE ANIMATION HOME

document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}


//REVIEWS SLIDER

var review = document.getElementById("review"),
reviewDots = Array.prototype.slice.call(document.getElementById("review-dots").children),
reviewContent = Array.prototype.slice.call(document.getElementById("review-content").children),
reviewleftArrow = document.getElementById("left-arrow"),
reviewRightArrow = document.getElementById("right-arrow"),
reviewSpeed = 5000,
currentSlide = 0,
currentActive = 0,
reviewTimer
;

window.onload = function () {


    function playSlide(slide) {
        for (var k = 0; k < reviewDots.length; k++) {
            reviewContent[k].classList.remove("active");
            reviewContent[k].classList.remove("inactive");
            reviewDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = reviewContent.length - 1;
        }
        if (slide > reviewContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            reviewContent[currentActive].classList.add("inactive");
        }
        reviewContent[slide].classList.add("active");
        reviewDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(reviewTimer);
        reviewTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, reviewSpeed)
    }

    reviewleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })
    reviewRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < reviewDots.length; l++) {
        reviewDots[l].addEventListener("click", function () {
            playSlide(currentSlide = reviewDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

}


//REVEAL CONTENT SCROLL

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal')

    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
// FOOTER DATE 

var d = new Date();
var n = d.getFullYear();
document.querySelector(".year").innerHTML = n;


