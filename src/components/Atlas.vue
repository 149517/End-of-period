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
  background:url("../assets/atlas/大暑.png");
  background-size: cover;
}

.swiper-slide:nth-child(5n) {
  background:url("../assets/atlas/寒露.png");
  background-size: cover;
}

.swiper-slide:nth-child(6n) {
  background:url("../assets/atlas/大雪.png");
  background-size: cover;
}

.swiper-slide:nth-child(7n) {
  background:url("../assets/atlas/小雪.png");
  background-size: cover;
}

.swiper-slide:nth-child(8n) {
  background:url("../assets/atlas/谷雨.png");
  background-size: cover;
}

.swiper-slide:nth-child(9n) {
  background:url("../assets/atlas/雨水.png");
  background-size: cover;
}

</style>