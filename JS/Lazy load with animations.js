// Lazy load with animations

document.addEventListener("DOMContentLoaded", function (event) {
    document.addEventListener("scroll", function (event) {
        const animatedBoxes = document.getElementsByClassName("lazy"); // add this class to element
        const windowOffsetTop = window.innerHeight + window.scrollY;

        Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
            const animatedBoxOffsetTop = animatedBox.offsetTop;

            if (windowOffsetTop >= animatedBoxOffsetTop) {
                addClass(animatedBox, "fade-in");}});});}); // animation style

function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;}}  
