const slides = document.querySelectorAll(".slide");
var counter = 0;
// console.log(slides); 
// slides.forEach(
//     (slide) => {
        // slide.style.left = `${0}%`;
//     }
// )

slides.forEach(
  (slide) => {
    slide.style.transition = `0.5s`;
  }
)

const slideImage = () => {
  slides.forEach((slide, index) => {
      if (index === counter) {
        slide.style.opacity = 1;
      } else {
        slide.style.opacity = 0;
      }
    });
  
    counter = (counter + 1) % slides.length;
  }
  
  setInterval(slideImage, 5000);