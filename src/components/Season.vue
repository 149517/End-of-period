<template>
  <Nav></Nav>
  <div class="box">
<!--    <div class="clock">-->
<!--      <Time></Time>-->

<!--</div>-->


<div class="option">
    <router-link class="op" to="/season">春</router-link>
    <router-link class="op" to="/season/summer">夏</router-link>
    <router-link class="op" to="/season/autumn">秋</router-link>
    <router-link class="op" to="/season/winter">冬</router-link>
</div>
<router-view class="contain"></router-view>
  </div>


</template>
<script>
import nav from "./nav.vue";
import Time from "./season-s/Time.vue"
export default {
  components:{
    'Nav':nav,Time
  }
}

</script>

<style scoped lang="less">
    .box{
      padding-top: .15rem;
      padding-bottom: 2rem;
    }
a {
    text-decoration: none;
}

.clock {
    margin: .1333rem auto;
    width: 8rem;
    height: 4rem;
    background-color: #c0c5c4;
}

.option {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 1rem;

    .op {

        width: 2rem;
        height: .6667rem;
        background-color: #73c7ad;


        font-size: .2667rem;
        font-family: SourceHanSansCN, SourceHanSansCN-Regular;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
        line-height: .6667rem;
        letter-spacing: .0267rem;
    }
}
.contain{
    margin: 0 auto;
}
</style>