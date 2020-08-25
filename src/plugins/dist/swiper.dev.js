"use strict";

var _vueAwesomeSwiper = require("vue-awesome-swiper");

require("swiper/swiper-bundle.css");

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].component("swiper", _vueAwesomeSwiper.Swiper);

_vue["default"].component("swiperSlide", _vueAwesomeSwiper.SwiperSlide);

_vue["default"].directive("swiper", _vueAwesomeSwiper.directive);