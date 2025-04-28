
let currentIndex = 0;
let carouselItems;

function goToSlide(index) {
    if (index == 0) {
        index = carouselItems.length - 1;
    } else if (index >= carouselItems.length) {
        index = 0;
    }

    currentIndex = index;
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function goToNextSlide() {
    if (document.getElementsByClassName("carousel-item").length > 0) {
        goToSlide(currentIndex + 1);
    }
}

function initCarousel() {
    carouselItems = document.querySelectorAll(".carousel-item");
}


setInterval(goToNextSlide, 5000);
