// Slideshow.jsx

import React, { useEffect, useState } from 'react';
import '../App.css'; // Import the CSS file for styling

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      setSlideIndex((prevIndex) => {
        let newIndex = prevIndex + 1;
        if (newIndex > slides.length) {
          newIndex = 1;
        }
        slides[newIndex - 1].style.display = "block";
        return newIndex;
      });
    };

    const interval = setInterval(showSlides, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <div className="mySlides">
        <img src="https://www.runbhopalrun.com/assets/website/home/iniciative/iniciative2.jpg" alt="Slide 1" />
      </div>

      <div className="mySlides">
        <img src="https://www.runbhopalrun.com/assets/website/home/iniciative/iniciative3.jpg" alt="Slide 2" />
      </div>

      <div className="mySlides">
        <img src= "https://www.runbhopalrun.com/assets/website/home/iniciative/iniciative4.jpg" alt= "slide 3"/>
      </div>

      <div className="mySlides">
        <img src="https://www.runbhopalrun.com/assets/website/home/iniciative/iniciative5.jpg" alt="Slide 4" />
      </div>
    </div>
  );
};

export default Slideshow;
