import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import Vue from "vue";

Vue.component("swiper", Swiper);
Vue.component("swiperSlide", SwiperSlide);

Vue.directive("swiper", directive);
