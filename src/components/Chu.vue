<template>
  <div class="nav">
    <img class="logo" src="../assets/logo.png" alt="logo">
    <div class="input">
      <input type="text" v-model="search" @blur="test" @focus="test" placeholder="立春">
      <span v-if="display" @click="Change"></span>
    </div>

    <router-link to="/login">
      <img class="user" src="../assets/user.png" alt="user">
    </router-link>

  </div>
  <div class="box">
    <div class="title">
      <span>综合</span>
      <span>传统文化</span>
      <span>地方习俗</span>
      <span>诗词歌赋</span>
      <span>时令养生</span>
    </div>
    <div class="contain">
      <h3>立春养生吃什么食品</h3>
      <div class="hen">
        <div class="text">
          24节气中第一个节气立春到了，这也意味着春天来了，但春天时长 乍寒乍暖，天气潮湿，容易感冒，那么，立春时养生该吃什么呢
        </div>
        <img src="../assets/huluobo.png">
      </div>
      <div class="comment">
        <span>2022-02-18</span><span>1.2 万热度</span><span class="bg">时令养生</span>
      </div>
    </div>
    <div class="contain">
      <h3>二十四节气之始—立春</h3>
      <div class="text">
        春分是春天的第四个节气，开始于每年的3月20到22日，持续半个 月的时间。分是平分的意思，春风表示昼夜平分，自该日起将一天 天昼长夜短
      </div>
      <div class="comment">
        <span>2022-02-5</span><span>2.1 万热度</span><span class="bg">传统文化</span>
      </div>
    </div>
    <div class="contain">
      <h3>《汉宫春.立春日》</h3>
      <div class="text">
        春已归来，看美人头上，袅袅春幡。 无端风雨，未肯收尽余寒。 年时燕子，料今宵梦到西园。 浑未办，黄柑荐酒，更传青韭堆盘。
      </div>
      <div class="comment">
        <span class="bg">诗词歌赋</span>
      </div>
    </div>
    <div class="contain">
      <h3>立春时节防五病</h3>
      <div class="text">
        立春到来，意味着寒冷的天气也会逐渐变暖，一些传染病，多发病 也会随之而来。立春后是高血压，消化道溃疡，肺炎，肝炎，麻疹 过敏性哮喘等疾病的多发季节。
      </div>
      <div class="comment">
        <span>2022-08-13</span><span>1 万热度</span><span class="bg">时令养生</span>
      </div>
    </div>



  </div>
</template>

<script>
import nav from "./nav.vue";

export default {
  name: "chu",
  components: {
    'Nav': nav
  },
}
</script>

<style scoped lang="less">
.nav {
  display: flex;
  margin: .2667rem .1333rem;
  padding-top: .1333rem;

  .logo {
    width: .6667rem;
    height: .6667rem;
  }
  .input{
    flex: 1;
    margin: 0 .1333rem;
    height: .5333rem;
    border: 1px solid #1d1d1d;
    border-radius: .2rem;
    padding-left: .2667rem;
    position: relative;
    input {
      width: 80%;
      border: 0;
      background: none;
      outline: medium;
    }
    span{
      display: block;
      width: .4667rem;
      height: .4667rem;
      background-image: url("../assets/search.png");
      background-size: cover;
      position: absolute;
      right: .1333rem;
      top: -0.0267rem;
    }
  }
  .user {
    width: .5333rem;
    height: .5333rem;
  }
}


.box {
  padding-bottom: 2rem;
}

.title {
  width: 8rem;
  margin: .6667rem .8rem;
  display: flex;
  justify-content: space-between;

  span:nth-child(1) {
    text-decoration: underline
  }
}

.contain {
  h3 {
    margin: .8rem .5333rem;
    font-size: .2667rem;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #ce8d8f;
    line-height: .3333rem;
    letter-spacing: .0853rem;
    text-decoration: underline
  }

  .text {
    width: 8.5733rem;
    margin: .5333rem;
    font-size: .2267rem;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #505050;
    line-height: .3333rem;
    letter-spacing: .0711rem;
  }

  .hen {
    display: flex;

    img {
      width: 5.3333rem;
      height: 2.6667rem;
      margin-right: .5333rem;
    }
  }

  .comment {
    text-align: right;

    span {
      margin: 0 .2667rem;
      font-size: .1733rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      text-align: left;
      color: #a3a3a3;
    }
    .bg {
    color: yellow;
    background: #8a8a8a;
    border-radius: .04rem;
  }
  }
}
</style>