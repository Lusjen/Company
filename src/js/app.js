import sayHello from './lib/sayHello.js';
import './lib/animation.js';
sayHello();

import $ from 'jquery';
import 'slick-carousel';

$('.js-gallery').slick({
  nextArrow: '.slider__next',
  prevArrow: '.slider__prev'
});
