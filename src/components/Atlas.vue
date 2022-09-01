<template>
  <Nav></Nav>
  <div id="box">
    <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper a-sp">
      <swiper-slide class="a-sw"></swiper-slide>
      <swiper-slide class="a-sw"></swiper-slide>
      <swiper-slide class="a-sw"></swiper-slide>
      <swiper-slide class="a-sw"></swiper-slide>
      <swiper-slide class="a-sw"></swiper-slide>
      <swiper-slide class="a-sw"></swiper-slide>
      <swiper-slide class="a-sw"></swiper-slide>
      <swiper-slide class="a-sw"></swiper-slide>
      <swiper-slide class="a-sw"></swiper-slide>
    </swiper>
  </div>



</template>

<script>
import nav from "../components/nav.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

import "./a-style.css";

// import required modules
import { EffectCards } from "swiper";

// document.querySelector('#box').style.width = window.screen.width * window.devicePixelRatio;

export default {
  name: "Atlas",
  components: {
    Swiper,
    SwiperSlide,
    'Nav':nav,
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
};

</script>

<style scoped lang="less">
.swiper {
  width: 7.1067rem;
  height: 12.64rem;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .24rem;
  font-size: 2.96rem;
  font-weight: bold;
  color: #fff;
}


.swiper-slide:nth-child(1n) {
  background:url("../assets/atlas/大寒.png");
  background-size: cover;
}

.swiper-slide:nth-child(2n) {
  background:url("../assets/atlas/惊蛰.png");
  background-size: cover;
}

.swiper-slide:nth-child(3n) {
  background:url("../assets/atlas/立春.png");
  background-size: cover;
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}
</style>