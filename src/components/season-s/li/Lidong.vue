<template>
  <Nav></Nav>
  <div class="box">
    <div class="title">
立冬
    </div>
    <div class="text">
      《月令七十二候集解》：「立，建始也；冬，终也，万物收藏也。」 关于冬，人们总是有着太多的期许与想象。
      似乎冬的脚步一到，人也变得柔软起来，冬日的晨光来得晚，我们与被窝的依恋似乎也格外缠绵。 「冻笔新诗懒写，寒炉美酒时温。
      醉看墨花月白，恍疑雪满前村。」诗仙李白同我们一样，在立冬时节也是如此慵懒而闲适，温壶好酒，躲在被窝，看看书籍，做做冬日阳光下的白日梦！
    </div>
    <img src="../../../assets/li/niao.png">
    <h3>立冬三候</h3>
    <div class="text">
      一候，水始冰。立冬之日，水始冰，冰寒于水，所以是水与冰的结合。冬寒水结是为伏阴。孟冬始冰，仲冬冰壮，季冬冰盛。 
      <br/>二候，地始冻。立冬之后五日，地始冻，冰壮曰冻，地冬为凝结。
      “霭霭野浮阳，晖晖水披冻”。 
      <br/>三候，雉入大水为蜃。再五日，雉入大水为蜃与“雀入大水为蛤”相对应，蜃是大蛤。古人认为“海市蜃楼”便是蜃吐气而成。
    </div>
    <img src="../../../assets/li/mao.png">
    <h3>立冬习俗</h3>
    <div class="text">
      迎冬 晋崔豹《古今注》：“汉文帝以立冬日赐宫侍承恩者及百官披袄子。”古时此日，
      天子有出郊迎冬之礼，并有赐群臣冬衣、矜恤孤寡之制。过去是个农耕社会，在民间，
      老百姓劳动了一年，立冬这一天要好好休息，顺便犒赏一家人的辛苦。 贺冬 贺冬亦称“拜冬”，
      在汉代即有此俗。宋代每逢此日，人们更换新衣，庆贺往来，一如年节。清代“至日为冬至朝，
      士大夫家拜贺尊长，又交相出谒。细民男女，亦必更鲜衣以相揖，谓之“拜冬。
      ”民国以来，贺冬的传统风俗，似有简化的趋势。但有些活动，逐渐固定化、程式化、更有普遍性。如办冬学、拜师活动，都在冬季举行。
    </div>
  </div>
</template>

<script>
import nav from "../../nav.vue";

export default {
  name: "Lidong",
  components:{
    'Nav':nav
  }
}
</script>

<style scoped lang="less">
.box{
  margin: .4267rem 0;
  padding-bottom: 2rem;
}
.title {
    margin: .1333rem .5333rem;
    font-size: .48rem;
    font-family: STXinwei, STXinwei-Regular;
    font-weight: 400;
    text-align: left;
    color: #6db66f;
    line-height: .3333rem;
    letter-spacing: .0356rem;
}

.text {
    margin: .5333rem auto;
    width: 8.4667rem;
    font-size: .2267rem;
    font-family: DengXian, DengXian-Regular;
    font-weight: 400;
    text-align: left;
    color: #1f1f1f;
    line-height: .3733rem;
    letter-spacing: .0223rem;
}

img {
    display: block;
    margin: -0.1333rem auto;
    width: 8.5333rem;
    height: 4.2667rem;
}

h3 {
    margin: .5333rem;
    font-size: .2933rem;
    font-family: DengXian, DengXian-Bold;
    font-weight: bold;
    text-align: left;
    color: #1f1f1f;
    line-height: .3733rem;
    letter-spacing: .0267rem;
}

</style>