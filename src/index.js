import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import App from './App';
import Swiper from 'swiper';
import Jumbotron from './Jumbotron';
import Footer from './Footer.jsx';

ReactDOM.render(
  <>
    <Navbar />
    <Jumbotron />
    <App />
    <Footer />
  </>,
  document.getElementById('root')
);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  rebuildOnUpdate: true,
  observer: true,
  breakpoints: {
    450: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    999: {
      slidesPerView: 6
    }
  }
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

