<template>
<!--  <router-view></router-view>-->
  <div class="nav" v-if="display">
    <img class="logo" src="../assets/logo.png" alt="logo">
    <input type="text">

    <router-link to="/login" @click="Dischange">
      <img class="user" src="../assets/user.png" alt="user">
    </router-link>

  </div>
</template>

<script>
export default {
  name: "nav",
data(){
  return{
    display:true
  }
},
  methods:{
    Dischange(){
      this.display = false
    }
  }
}
</script>

<style scoped lang="less">
.nav {
  display: flex;
  margin: .2667rem .1333rem;

.logo {
  width: .6667rem;
  height: .6667rem;
}

input {
// width: 7.1733rem;
  flex: 1;
  margin: 0 .1333rem;
  height: .5333rem;
  border: 1px solid #1d1d1d;
  border-radius: 10px;
}

.user {
  width: .5333rem;
  height: .5333rem;
}
}
</style>