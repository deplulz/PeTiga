var  text = document.getElementsByClassName("text");
var slideIndex = 1;

if ((window.matchMedia("(max-width: 768px)").matches) && window.matchMedia(("(min-width: 768px)"))) {
    tset(text);
}
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
   showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// mengganti value text
function tval(a) {
    text = document.getElementsByClassName(a);
}

function tset(z) {
    for (i = 0; i < text.length; i++) {
        text[i].style.display = "none";
    }
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // if mobile
    if ((window.matchMedia("(max-width: 768px)").matches) && window.matchMedia(("(min-width: 768px)"))) {

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        tset(text);
        var $x = text[slideIndex - 1].style;
        $x.removeProperty("display");
        $x.position = "inherit";
        $x.color = "black";
        // $x.width = "109%";
        $x.marginLeft = "-14px";
    } else { //if desktop
        slides[slideIndex - 1].style.display = "contents";
        dots[slideIndex - 1].className += " active";
        // text[slideIndex - 1].style.display = "contents";
    }
}