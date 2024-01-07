const images = [
    '1.png',
    '2.png',
    '3.png',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = ` img/${chosenImage}`;
document.body.appendChild(bgImage);