const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const background = document.body;

background.style.backgroundImage = `url('img/${chosenImage}`;

background.classList.add("bgAb");
