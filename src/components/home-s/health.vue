<template>
  <Nav></Nav>

  <div class="box" v-if="hdis">
    <div class="head">
      <p>时令推荐</p>
      <div class="title">
        枸杞当归鸡汤.
      </div>
    </div>
    <div id="slide">
      <swiper :slidesPerView="'auto'" :spaceBetween="30" :pagination="{
        clickable: true,
      }" :modules="modules" class="mySwiper">
        <swiper-slide class="h-sw"><img src="../../assets/subnav/guo.png"></swiper-slide>
        <swiper-slide class="h-sw"><img src="../../assets/subnav/淮山鸡汤.png"></swiper-slide>
        <swiper-slide class="h-sw"><img src="../../assets/subnav/薏米芡实山药粥.png"></swiper-slide>
        <swiper-slide class="h-sw"><img src="../../assets/subnav/镐定猪肚鸡.png"></swiper-slide>
        <swiper-slide class="h-sw"><img src="../../assets/subnav/乌鸡炖盅%20.png"></swiper-slide>

      </swiper>
    </div>
    <div class="main">
      <div class="contain">
        <u>
          <router-link class="h" to="/first" @click="Disheal">对于年轻人来说，有哪些养生的秘诀?</router-link>
        </u>
        <div class="text">
          现代人越来越注重养生，各种渠道推荐的养生方法五花八门，
          让人 应接不限，明明很多养生方法跟着做却还是没有效果，
          对于年轻人 来说，到底什么样的方法才是真正的养生关键
        </div>
      </div>
      <div class="contain">
        <u>
          <router-link class="h" to="/second" @click="Disheal">立春养生吃什么食品</router-link>
        </u>
        <span>
          <div class="text">
            24节气中第一个节气立春到了，
            这也意味着春天来了，但春天时长 乍寒乍暖，
            天气潮湿，容易感冒，那么，立春时养生该吃什么呢
          </div>
          <img src="../../assets/subnav/carrot.png">
        </span>

      </div>
    </div>
  </div>

</template>

<script>
import nav from "../nav.vue"
import first from "./hea-s/First.vue";
import second from "./hea-s/Second.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";



export default {
  name: "health",
  components: {
    'Nav': nav,
    Swiper,
    SwiperSlide,
    first,
    second
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      hdis: true
    }
  },
  methods: {
    Disheal() {
      this.hdis = false
    }
  }
}
</script>

<style scoped lang="less">
  .box{
    padding-bottom: 2rem;
  }
.a-sp {
  width: 100%;
  height: 100%;
}

.h-sw {
  text-align: center;
  font-size: 18px;
  background: #fff;

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

.h-sw img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.h-sw {
  width: 7.3333rem;
  height: 7.3333rem;
}

.head {
  margin: .2rem .2933rem;

  p {
    font-size: .2667rem;
    font-family: SourceHanSansCN, SourceHanSansCN-Medium;
    font-weight: 500;
    text-align: left;
    color: #818181;
    line-height: .3333rem;
    letter-spacing: .0853rem;
  }

  .title {
    margin: .5333rem;
    font-size: .6rem;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: left;
    color: #ce8d8f;
    line-height: .3333rem;
    letter-spacing: .1707rem;
  }
}

.main {
  margin: .8667rem .5333rem;

  a {
    text-decoration: none;
    margin: .6rem 0;
    font-size: .32rem;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 700;
    text-align: left;
    color: #323232;
    line-height: .3333rem;
    letter-spacing: .0853rem;
  }

  .contain {
    span {
      display: flex;
      justify-content: space-around;
    }

    .text {
      margin: .4rem 0;
      font-size: .2267rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      text-align: left;
      color: #505050;
      line-height: .3333rem;
      letter-spacing: .04rem;
    }

    span .text {
      width: 2.9733rem;
      height: 1.92rem;
    }

    img {
      margin: .4rem 0;
      width: 5.3333rem;
      height: 2.6667rem;
    }
  }
}
</style>