const parallaxOneLayerOne = document.querySelector('.parallax-one-layer-one');
const parallaxOneLayerThree = document.querySelector(
  '.parallax-one-layer-three'
);
const parallaxOneLayerFour = document.querySelector('.parallax-one-layer-four');
const parallaxOneLayerFive = document.querySelector('.parallax-one-layer-five');
const parallaxOneLayerSix = document.querySelector('.parallax-one-layer-six');

const parallaxTwoLayerOne = document.querySelector('.parallax-two-layer-one');
const parallaxTwoLayerTwo = document.querySelector('.parallax-two-layer-two');
const parallaxTwoLayerThree = document.querySelector(
  '.parallax-two-layer-three'
);
const parallaxTwoLayerFour = document.querySelector('.parallax-two-layer-four');
const parallaxTwoLayerFive = document.querySelector('.parallax-two-layer-five');

document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  parallaxOneLayerOne.style.transform = `translateY(${scrollPosition * 0.1}px)`;
  parallaxOneLayerThree.style.transform = `translateY(-${
    scrollPosition * 0.015
  }px)`;
  parallaxOneLayerFour.style.transform = `translateY(${
    scrollPosition * 0.7
  }px)`;
  parallaxOneLayerFive.style.transform = `translate(${scrollPosition * 0.2}px)`;
  parallaxOneLayerSix.style.transform = `translate(-${scrollPosition * 0.3}px)`;

  parallaxTwoLayerOne.style.transform = `translateY(${
    scrollPosition * 0.06
  }px)`;

  parallaxTwoLayerTwo.style.transform = `translateY(${
    scrollPosition * 0.06
  }px)`;

  parallaxTwoLayerThree.style.transform = `translateY(${
    scrollPosition * 0.1
  }px)`;

  parallaxTwoLayerFour.style.transform = `translateY(${
    scrollPosition * 0.03
  }px)`;

  parallaxTwoLayerFive.style.transform = `translateY(-${
    scrollPosition * 0.018
  }px)`;
});
