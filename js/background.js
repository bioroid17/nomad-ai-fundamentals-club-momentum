const vh = window.innerHeight;
const vw = window.innerWidth;

const bgImage = document.createElement("img");
bgImage.src = `https://picsum.photos/${vw}/${vh}`;
bgImage.id = "background";
bgImage.addEventListener("load", () => {
  bgImage.style.animation = "appear 0.5s ease-in forwards";
  document.body.appendChild(bgImage);
});
