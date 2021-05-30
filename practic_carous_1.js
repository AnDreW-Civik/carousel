let start = 0;

const slideChange = document.querySelector('.carousel-slide');

document.querySelector('.slider-next').addEventListener('click', function () {
    start += 384;
    if (start > 768) {
        start = 0;
    }
    slideChange.style.left = - start + 'px';
    
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    start -= 384;
    if (start < 0) {
        start = 768;
    }
    slideChange.style.left = - start + 'px';
});