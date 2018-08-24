var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var text = document.getElementsByClassName("text");
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
        for (i = 0; i < text.length; i++) {
            text[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        var $x = text[slideIndex - 1].style;
        $x.removeProperty("display");
        $x.position = "inherit";
        $x.color = "black";
        $x.width = "100%";
        $x.justifyItems ="right";
    } else { //if desktop
        slides[slideIndex - 1].style.display = "contents";
        dots[slideIndex - 1].className += " active";
        // text[slideIndex - 1].style.display = "contents";
    }
}