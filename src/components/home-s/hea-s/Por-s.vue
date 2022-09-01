<template>
  <Nav></Nav>
  <div class="box">
    <div class="title">
      <h2>将进酒</h2>
      <p>[唐] 李白</p>
    </div>
    <ul>
      <li>君不见黄河之水天上来，奔流到海不复回。</li>
      <li>君不见高堂明镜悲白发，朝如青丝暮成雪。</li>
      <li>人生得意须尽欢，莫使金樽空对月。</li>
      <li>天生我材必有用，千金散尽还复来。</li>
      <li>烹羊宰牛且为乐，会须一饮三百杯。</li>
      <li>岑夫子，丹丘生，将进酒，杯莫停。</li>
      <li>与君歌一曲，请君为我倾耳听。</li>
      <li>钟鼓馔玉不足贵，但愿长醉不愿醒。</li>
      <li>古来圣贤皆寂寞，惟有饮者留其名。</li>
      <li>陈王昔时宴平乐，斗酒十千恣欢谑。</li>
      <li>主人何为言少钱，径须沽取对君酌。</li>
      <li>五花马、千金裘， 呼儿将出换美酒，与尔同销万古愁。</li>
    </ul>

    <div class="jie">
      <div class="one">
        <span>赏析</span>
        <span>译文</span>
        <span>注释</span>
        <span>辑评</span>
      </div>
      <p>李白咏酒的诗篇极能表现他的个性，这类诗固然数长安放还以 后所作思想内容更为深沉，艺术表现更为成熟。《将进酒》即...</p>
      <div class="two">
        <span>作者</span>
        <p>李白（701年—762年12月），字太白，号青莲居士，又号“ 谪仙人”，唐代伟大的浪漫主义诗人，被后人誉为“诗仙”，与杜甫 并称为“李杜”，为了与另两位诗人李商隐与杜牧即“小李杜”区别， 杜甫与李白又合称“大李杜”。
        </p>
      </div>
    </div>
  </div>

</template>

<script>
import nav from "../../nav.vue";

export default {
  name: "por-s",
  components: {
    'Nav': nav
  }
}
</script>

<style scoped lang="less">
.box {
  margin-top: 1.0667rem;
  padding-bottom: 2rem;
}

.title {
  h2 {
    margin: 0 auto;
    width: 2.3rem;
    height: .5733rem;
    font-size: .5333rem;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #505050;
    line-height: .3333rem;
    letter-spacing: .1707rem;
  }

  p {
    margin-left: 7.3333rem;
    width: 2rem;
    height: .3067rem;
    font-size: .2667rem;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: right;
    color: #505050;
    line-height: .3333rem;
    letter-spacing: .0853rem;
  }
}

ul {
  margin: 0 auto;
  list-style-type: none;
  width: 8.3067rem;
  height: 8.16rem;
  font-size: .36rem;
  font-family: DengXian, DengXian-Regular;
  font-weight: 400;
  text-align: left;
  color: #505050;
  line-height: .56rem;
  letter-spacing: .1137rem;
}

.jie {
  margin: 1.7867rem auto;

  p {
    width: 8.3333rem;
    margin: .5333rem auto;
    // width: 624px;
    // height: 45px;
    font-size: .2267rem;
    font-family: DengXian, DengXian-Regular;
    font-weight: 400;
    text-align: left;
    color: #000000;
    line-height: .36rem;
    letter-spacing: .0711rem;
  }

  .one {
    display: flex;
    justify-content: space-around;
    position: relative;
  }

  span {
    font-size: .2667rem;
    font-family: DengXian, DengXian-Regular;
    font-weight: 400;
    text-align: left;
    color: #505050;
    line-height: .56rem;
    letter-spacing: .0853rem;
  }

  .one span:nth-child(1) {
    color: #BE9443;
  }

  .one::before {
    position: absolute;
    content: '阅读全文';
    bottom: -1.76rem;
    right: 1.3333rem;

    width: 1.3333rem;
    height: .2933rem;
    background: #edcf96;
    border-radius: .1333rem;

    font-size: .1733rem;
    font-family: DengXian, DengXian-Regular;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
    line-height: .2933rem;
    letter-spacing: .0569rem;
  }

  .two {
    span {
      margin-left: .8rem;
      color: #BE9443;
    }

  }

}
</style>