const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
];

let currentIndex = 0;

document.getElementById('firstImg').src = images[currentIndex];


const next = function() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('firstImg').src = images[currentIndex];
}

const previous = function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('firstImg').src = images[currentIndex];
}