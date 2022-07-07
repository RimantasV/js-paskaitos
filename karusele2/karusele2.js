let imagesArray = [
  "https://images.unsplash.com/photo-1650873797988-abf1338073ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1650872553203-9a2b541245d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1650751557709-06a218d96bc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
];

setInterval(changeImage, 2000);

let currentIndex = 0;

function changeImage() {
  currentIndex++;
  if (currentIndex > imagesArray.length - 1) {
    currentIndex = 0;
  }

  document.querySelector("img").src = imagesArray[currentIndex];
}
