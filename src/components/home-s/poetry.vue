<template>
  <Nav></Nav>
  <div class="poe">

    <div class="box">
      <swiper class="mySwiper p-sp">
        <swiper-slide class="p-sw">君不见黄河之水天上来<br/> 奔流到海不复回</swiper-slide>
        <swiper-slide class="p-sw">好雨知时节<br/>当春乃发生</swiper-slide>
        <swiper-slide class="p-sw">落霞与孤鹜齐飞<br/>秋水共长天一色。</swiper-slide>
      </swiper>
    </div>
    <div class="btn">
      <button class="but">诗人</button>
      <router-link class="but" to="/por-s">诗歌</router-link>
    </div>
  </div>

</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import nav from "../nav.vue";

export default {
  name: "poetry",
  components: {
    'Nav': nav,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {};
  },
}
</script>

<style scoped lang="less">
.poe {
  padding-bottom: 2rem;
}

.box {
  height: 100%;
  margin: .9333rem auto;
}




.p-sp {
  width: 8.5333rem;
  height: 12.6667rem;
}

.p-sw {
  text-align: center;
  font-size: .24rem;
  background: #ef9259;
  border-radius: .2rem;

  writing-mode: vertical-rl;
  writing-mode: tb-rl;
  font-size: .5333rem;
  font-family: STZhongsong, STZhongsong-Regular;
  font-weight: 400;
  text-align: left;
  color: #2c2c2c;
  line-height: .8267rem;
  letter-spacing: .1707rem;
  padding: .4rem;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.p-sw:nth-child(2){
  background: rgba(99, 217, 77, 0.85);
}
.p-sw:nth-child(3){
  background: rgba(216, 220, 80, 0.85);
}
.p-sw img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btn {
  display: flex;


  .but,a {
    text-decoration: none;
    font-size: .36rem;
    font-family: STZhongsong, STZhongsong-Regular;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
    line-height: 1.3333rem;
    letter-spacing: .1137rem;

    flex: 1;
    height: 1.3333rem;
    background: #8e5f54;
    border: 0;
    margin: .4rem;
    border-radius: .2667rem;
  }

  .but:nth-child(2) {
    background: #d26161;
  }
}
</style>