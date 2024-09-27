let smallImages = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].src = "../images/spiderman_img.png";
  console.log(`values of image no. ${i} is changed.`);
}
