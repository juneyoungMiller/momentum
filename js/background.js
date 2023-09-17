const images = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg","5.jpg","6.jpg", "7.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length )];

const bgImage = document.createElement("img");

bgImage.src =`img/${chosenImages}`;

console.log(chosenImages)
if(chosenImages === "4.jpg" || chosenImages === "6.jpg"){
  const clockElement = document.querySelector("#clock")
  clockElement.style.color = "white"; 
  
}

document.body.appendChild(bgImage);



