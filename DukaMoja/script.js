//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carouselContainer');
let SliderDom = carouselDom.querySelector('.carouselContainer .carousel');
let thumbnailBorderDom = carouselDom.querySelector('.carouselContainer .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carouselContainer .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 5000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carouselContainer .carousel .item');
    let thumbnailItemsDom = document.querySelectorAll('.carouselContainer .thumbnail .item');

// Fade out previous item's content
    let prevActiveItem = SliderDom.querySelector('.item.active');
    if (prevActiveItem) {
        let prevContent = prevActiveItem.querySelector('.content');
        if (prevContent) {
            prevContent.classList.add('fade-out');
            setTimeout(() => {
                prevContent.classList.remove('fade-out');
            }, 700); // Match animation duration
        }
    }

    // Fade out previous item's content
    if (prevActiveItem) {
        let prevContent = prevActiveItem.querySelector('.content');
        if (prevContent) {
            prevContent.classList.add('fade-out');
            setTimeout(() => {
                prevContent.classList.remove('fade-out');
            }, 700);
        }
    }

    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    // Remove active class from all items
    SliderItemsDom.forEach(item => item.classList.remove('active'));
    // Add active class to the first item (currently visible)
    SliderDom.querySelector('.item').classList.add('active');

    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}