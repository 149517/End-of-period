<template>
  <!--  <router-view></router-view>-->
  <div class="nav">
    <img class="logo" src="../assets/logo.png" alt="logo">
    <div class="input">
      <input type="text" v-model="search" @blur="test" @focus="test">
      <span v-if="display" @click="Change"></span>
    </div>

    <router-link to="/login">
      <img class="user" src="../assets/user.png" alt="user">
    </router-link>

  </div>
</template>

<script>
// import Chu from './Chu.vue'
export default {
  name: "nav",
  data() {
    return {
      display: false,
      search:'',
      val:'立春'
    }
  },
  methods: {
    Change() {
      let routeUrl = this.$router.resolve({
        path: "/chu",
      });
      window.open(routeUrl.href);
    },
    test(){
      this.display = !this.display;
    }
  },
  watch:{
    search(newVal){
      if(newVal === this.val){
        this.Change()
      }
    }
  }
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
</style>