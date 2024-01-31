import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Slideshow from './Slideshow/Slideshow.jsx'


// let currentIndex = 0;
// const slideInterval = 5000; // Adjust this interval based on your preference

// function showSlide(index) {
//   const carousel = document.querySelector('.carousel');
//   const slides = document.querySelectorAll('.slide');

//   if (index >= 0 && index < slides.length) {
//     currentIndex = index;
//   } else if (index >= slides.length) {
//     currentIndex = 0;
//   } else {
//     currentIndex = slides.length - 1;
//   }

//   const translateValue = -currentIndex * 100 + '%';
//   carousel.style.transition = 'transform 0.5s ease-in-out'; // Apply transition
//   carousel.style.transform = 'translateX(' + translateValue + ')';
// }

// setInterval(() => {
//   currentIndex++;
//   showSlide(currentIndex);
// }, slideInterval);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
