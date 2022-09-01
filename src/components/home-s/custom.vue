<template>
  <Nav></Nav>
  <div class="box">
    <div class="head">
      <h2>节气划分</h2>
      <img src="../../assets/subnav/terms.png">
    </div>
    <div class="contain">
      <h3>太阳黄径</h3>
      <div class="text">
        现行的“二十四节气”来自于三百多年前订立的依据太阳黄经度数划分的方法，
        自1645年起沿用至今。而从西洋教士定《时宪历》之后直至今的“农历”，“二 十四节气”是根据太阳在回归黄道上的位置（太阳黄经度数）来定的，
        即在一 个为360度圆周的“黄道”（一年当中太阳在天球上的视路径）上，划分为24等 份，
        每15°一等份，以春分点为0度起点（排序仍把立春列为首位），按黄经度 数编排。即，视太阳从春分点，
        也就是黄经零度出发，此刻太阳垂直照射赤道， 每前进15度为一个节气；运行一周又回到春分点，为一回归年，
        24个节气正好 360度。太阳在黄道上每运行15度为一个“节气”，每“节气”之间度数均等，时 间不均等.
      </div>
      <img src="../../assets/subnav/stars.png">
      <h3>斗转星移</h3>
      <div class="text">
        先秦时期中国一些地方依据斗转星移确定节气，北斗七星循环旋转，这斗转星移 与廿四节气有密切关系。北极星位于地球地轴的北端，
        在北斗七星中的天璇与天 枢连线的五倍延长线上。由于地球的自转，而北极星正好处在天球转动的轴上， 所以相对不动，
        而在轴边上的北斗星看起来就象围绕着北极星转一样，这就产生 了“斗转星移”。时节交替与“黄赤交角”有着密切的关系，
        黄赤交角是地球上四季 变化和五带区分的根本原因，它影响着与其紧密联系的自然地理现象。
        廿四节气 与干支时间以及八卦等是联系在一起的，它们属同一系统。“二十四节气”和“十 二月建”是干支历的基本内容，
        廿四节气是干支历中表示自然节律变化以及确立 “十二月建”（月令）的特定节令。由于廿四节气是以北斗星斗柄旋转指向确 定，
        因此这历法也称作“星辰历”。
      </div>
    </div>
  </div>

</template>

<script>
import nav from "../nav.vue";
export default {
  name: "custom",
  components: {
    'Nav': nav
  }
}
</script>

<style scoped lang="less">
.box {
  padding-bottom: 2rem;
}

.head {
  margin: .6667rem .6rem;

  h2 {

    font-size: .4rem;
    font-family: SourceHanSansCN, SourceHanSansCN-Heavy;
    font-weight: 800;
    text-align: left;
    color: #ada4a4;
    line-height: .3333rem;
    letter-spacing: .04rem;
  }

  img {
    width: 8.5333rem;
    height: 6.4667rem;
  }
}

.contain {
  margin: .4rem .5333rem;
  h3 {

    font-size: .2667rem;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #000000;
    line-height: .3333rem;
    letter-spacing: .0267rem;
  }

  .text {

    font-size: .2267rem;
    font-family: DengXian, DengXian-Regular;
    font-weight: 400;
    text-align: left;
    color: #000000;
    line-height: .3333rem;
    letter-spacing: .0223rem;
  }

  img {
    width: 7.1467rem;
    height: 4.5733rem;
    margin: .2667rem .6667rem;
  }
}
</style>