<template>
  <div class="box">
    <div class="back">

    </div>
    <div class="logo">

    </div>
  </div>
  <div class="box2">
    <div class="text">
      密码登录
    </div>
    <div class="put">
      <input type="text" placeholder="请输入用户名/手机号/邮箱">
      <input type="text" placeholder="密码">
    </div>

    <div class="small">
      <div class="t">
        忘记密码
      </div>
      <div class="t">
        注册
      </div>

    </div>
  </div>
  <div class="box3">
    <button>登录</button>
  </div>
  <div class="box4">
    <div class="qita"></div>
    <div class="qita"></div>
    <div class="qita"></div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped lang="less">
.box {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .back {
    width: .3067rem;
    height: .5867rem;
    background: url("../assets/login/back.png");
    background-size: cover;
    margin: .5333rem .72rem;
  }

  .logo {
    width: .9333rem;
    height: .9333rem;
    background: url("../assets/logo.png");
    background-size: cover;
    margin: .3467rem .72rem;
  }
}

.box2 {

  .text {
    margin: 1.3333rem .5333rem;
    font-size: .4rem;
    font-family: SourceHanSansCN, SourceHanSansCN-Medium;
    font-weight: 500;
    text-align: left;
    color: #323232;
    line-height: .3333rem;
    letter-spacing: .04rem;
  }

  .put {

    input {
      border: 0;
      margin: .7467rem 1rem;
      width: 8rem;
      height: 1.0667rem;
      background: #fafafa;
      border-radius: .1333rem;
      outline: medium;
      padding-left: .2667rem;



    }

    input::placeholder {
      font-size: .2667rem;
      font-family: SourceHanSansCN, SourceHanSansCN-Regular;
      font-weight: 400;
      text-align: left;
      color: #d2d2d2;
      line-height: .3333rem;
      letter-spacing: .0267rem;
    }
  }

  .small {
    display: flex;
    justify-content: space-between;

    .t {
      margin: 0 .9333rem;
      font-size: .2267rem;
      font-family: SourceHanSansCN, SourceHanSansCN-Regular;
      font-weight: 400;
      text-align: left;
      color: #b4b4b4;
      line-height: .3333rem;
      letter-spacing: .0227rem;
    }
  }
}

.box3 button {
  margin: .4rem 1.4667rem;
  width: 6.6667rem;
  height: 1.0667rem;
  background: #ce8d8f;
  border-radius: .1333rem;
  border: 0;
  outline: medium;

  font-size: .3067rem;
  font-family: SourceHanSansCN, SourceHanSansCN-Medium;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  line-height: .3333rem;
  letter-spacing: .1rem;
}
.box4{
  display: flex;
  justify-content: space-around;
  margin: 1.3333rem .4rem;
  .qita{
    width: .6667rem;
    height: .5333rem;
  }
  .qita:nth-child(1){
    background: url("../assets/login/wechat.png");
    background-size: cover;
  }
  .qita:nth-child(2){
    width: .4667rem;
    height: .5333rem;
    background: url("../assets/login/QQ.png");
    background-size: cover;
  }
  .qita:nth-child(3){
    background: url("../assets/login/weibo.png");
    background-size: cover;
  }
}
</style>