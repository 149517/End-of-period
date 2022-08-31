<script>

export default {

}
</script>

<template>

  <div class="container">

    <router-view></router-view>

    <!-- bottom -->
    <div class="bottom">
      <router-link to="/" class="point">首页</router-link>
      <router-link to="/find" class="point">发现</router-link>
      <router-link to="/season" class="point">四季</router-link>
       <router-link to="/atlas" class="point">图集</router-link>
    </div>
  </div>

</template>

<style scoped lang="less">


.bottom {
  // 将底部标签固定
  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 1.3333rem;
  width: 100%;
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
  box-shadow: -5px 0px 12px 5px rgba(0, 0, 0, 0.17);



  // border-top: 1px solid rgb(228, 228, 228);

  a {
    text-decoration: none;
    font-size: .32rem;
    font-family: SourceHanSansCN, SourceHanSansCN-Regular;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
    line-height: 1.0667rem;
    letter-spacing: 2px;
  }

  .point {

    width: 1.0667rem;
    height: 1.0667rem;
    border-radius: .5333rem;
    background-color: #ce8d8f;
  }
}
</style>
