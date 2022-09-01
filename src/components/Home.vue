<template>
  <Nav></Nav>
  <div class="box">
    <!--    <router-view></router-view>-->
    <div class="banner" v-if="hdis">
      <img class="banner" src="../assets/Home/春分 画框.png" alt="">
      <div class="option">
        <router-link class="op" @click="Displaychange" to="/tradition">传统文化</router-link>
        <router-link class="op" @click="Displaychange" to="/custom">节气划分</router-link>
        <router-link class="op" @click="Displaychange" to="/poetry">诗文歌赋</router-link>
        <router-link class="op" @click="Displaychange" to="/health">时令养生</router-link>
      </div>
      <img src="../assets/Home/s-big.png" alt="立春" class="s-big">
    </div>
  </div>

</template>
<script>
import nav from "../components/nav.vue";
export default {
  name: "Home",
  components: {
    'Nav': nav
  },
  data() {
    return {
      hdis: true
    }
  },
  methods: {
    Displaychange() {
      this.hdis = false
    }
  }
}
</script>
<style scoped lang="less">
a {
  text-decoration: none;
  font-size: .32rem;
  font-family: SourceHanSansCN, SourceHanSansCN-Regular;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  line-height: 1rem;
  letter-spacing: .0267rem;
}

.box {
  padding-bottom: 2rem;
}

.banner {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  img {
    flex: 1;
    width: 100%;
    margin: .3333rem 0 .5333rem 0;
  }

  .option {

    height: 1rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    //font


    .op {
      flex: 1;
      margin: 0 .2667rem;
      height: 100%;

      background-color: #8E5F54;
    }

    .op:nth-child(2) {
      background-color: #BFB6AD;
    }

    .op:nth-child(3) {
      background-color: #EDCF96;
    }

    .op:nth-child(4) {
      background-color: #D26161;
    }
  }

  .s-big {
    // opacity: 0.35;
    // background: #40403f;
    border-radius: 10px;
    margin-top: .4rem;
  }

}
</style>