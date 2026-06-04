const vh = window.innerHeight;
const vw = window.innerWidth;

const bgImage = document.createElement("img");
bgImage.src = `https://picsum.photos/${vw}/${vh}`;
bgImage.id = "background";

document.body.appendChild(bgImage);
