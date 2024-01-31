// src/App.jsx
import React from 'react';
import './App.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Slideshow from './Slideshow/Slideshow';
import Sponsors from './Slideshow/Sponsors';
import Footer from './Slideshow/Footer';


const App = () => {
  return (
    <div className="App">
      <nav>
        <div className="logo">
          <img
            src="https://www.runbhopalrun.com/assets/website/header/logo1_centre.jpg"
            alt="Run Bhopal Logo"
            width="100"
            height="50"
          />
          <span className="brand-name">Run Bhopal</span>
        </div>
        <ul>
          <li className="nav-item">
            <a href="#">Home</a>
            <div className="image-container">
              <img
                src="/images/image1.jpg"
                alt="Image 1"
              />
              <img
                src="/images/image2.png"
                alt="Image 2"
              />
               <img
                src="https://www.runbhopalrun.com/assets/website/bhopal_runners/runner-1.jpg"
                alt="Image 7"
              />
            </div>
          </li>
          <li className="nav-item">
            <a href="#">Login</a>
            <div className="image-container">
              <img
                src="https://www.runbhopalrun.com/assets/website/organ_donation/recycle-ogan-img.png"
                alt="Image 3"
              />
              <img
                src="https://www.runbhopalrun.com/assets/website/organ_donation/Recycle-Organ-img2.jpeg"
                alt="Image 4"
              />
            </div>
          </li>
          <li className="nav-item" >
            <a href="#">Register</a>
            <div className="image-container">
              <img
                src="https://www.runbhopalrun.com/assets/website/organ_donation/Recycle-Organ-img1.jpg"
                alt="Image 5"
              />
              <img
                src="https://www.runbhopalrun.com/assets/website/bhopal_runners/run-heart.jpeg"
                alt="Image 6"
              />
            </div>
          </li>

          <li className="nav-item">
            <a href="#">Prizes</a>
            <div className="image-container">
              <img
                src="https://www.runbhopalrun.com/assets/website/bhopal_runners/runner-1.jpg"
                alt="Image 7"
              />
              <img
                src="https://www.runbhopalrun.com/assets/website/bhopal_runners/runner-2.jpg"
                alt="Image 8"
              />
            </div>
          </li>

          <li className="nav-item">
            <a href="#">Race Result</a>
            <div className="image-container">
              <img
                src="
                https://www.runbhopalrun.com/assets/website/bhopal_runners/runner-3.jpg"
                alt="Image 1"
              />
              <img
                src="/images/image2.png"
                alt="Image 2"
              />
            </div>
          </li>
        </ul>
      </nav>
      <div className="content">
        
        {/* Video Section */}
        <div className="video-container">
          <video autoPlay width="100%" height="auto" controls >
            <source
              src="https://www.runbhopalrun.com/assets/front/video/rbrvideo.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="container">
          <div className="image-container2">
            <img
              src="https://www.runbhopalrun.com/assets/website/home/rbr.png"
              alt="Run Bhopal Run"
              width="100%"
              height="auto"
            />
          </div>
          <div className="text-container">
            <p>Register Fast One Month Left</p>
          </div>
        </div>
        
        <div className="initiatives-container">
          <h2>OUR INITIATIVES</h2>
          <p class="centered-paragraph">RBR focuses on the holistic approach to development and wellbeing of the society and endeavor to reach the
unreached and manifest a movement of change for the betterment of the community as a whole.</p>
        </div>
    
        <div class="container3">
    <div class="content">
      <h1>BHOPAL MARATHON..</h1>
      <p>You’re boundless and have the power to change your life the way you want it to be, and what could be better if you want to make it healthier and more joyful? RBR Triathlon 2023 is a one-of-a-kind event that presents you with the golden opportunity to realize your limitless potential through "cycling, running, and swimming." Join and be a part of this exclusive event, which is an excellent opportunity for you to begin and continue your fitness journey in a unique and thrilling way. Gear up!</p>
    </div>
  </div>
  <Slideshow />
  <Sponsors />
  <Footer />

    </div>
  );
};

export default App;
