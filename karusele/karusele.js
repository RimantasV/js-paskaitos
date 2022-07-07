let imagesEl = document.querySelectorAll("img");

setInterval(changeImage, 2000);
let currentIndex = 0;

function changeImage() {
  //   imagesEl[currentIndex].classList.remove("active");
  for (let i = 0; i < imagesEl.length; i++) {
    imagesEl[i].classList.remove("active");
  }

  currentIndex++;
  if (currentIndex > imagesEl.length - 1) {
    currentIndex = 0;
  }

  imagesEl[currentIndex].classList.add("active");
}
