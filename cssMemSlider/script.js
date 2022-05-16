let dots = document.getElementsByClassName('dots-item');
let dotsArea = document.getElementsByClassName('content--slider')[0];
let slides = document.getElementsByClassName('slide-item');
let description = document.getElementsByClassName('title');
let slideIndex = 1;
let descriptionIndex = 1;

// function for showing slides:
function slideShow (number) {
    if (number < 1) {
        slideIndex = slides.length;
    } else if (number > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < slides.length; i++) {
        dots[i].classList.remove('active');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}

// function showing picture description:
function descriptionShow (number) {
    if (number < 1) {
        descriptionIndex = description.length;
    } else if (number > description.length) {
        descriptionIndex = 1;
    }

    for (let i = 0; i < description.length; i++) {
        description[i].style.display = 'none';
    }

    description[descriptionIndex - 1].style.display = 'block';
}

slideShow(slideIndex);
descriptionShow(descriptionIndex);

function currentSlideWithDescription (number) {
    slideShow(slideIndex = number);
    descriptionShow(descriptionIndex = number);
}

dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('dots-item') && e.target == dots[i - 1]) {
            currentSlideWithDescription(i);
        }
    }
}