<template>
<Nav></Nav>
  <div class="box">
    <div class="title">
立夏
    </div>
    <div class="text">
      《月令七十二候集解》：“立，建始也，夏，假也，物至此时皆假大也。
      ”这里的“假”，即“大”的意思，是说春天播种的植物已经直立长大。” 
      立夏，是个浪漫的时节 立夏之前，是万物的惊蛰与苏醒.立夏之后，
      万物舒展，悠然通畅.春生夏长，万物自此走向繁茂
    </div>
    <img src="../../../assets/li/hehua.png">
    <h3>立夏三候</h3>
    <div class="text">
      一候 · 蝼蝈鸣蝼蛄开始在田间鸣叫稻花香里说丰年,
      听取蛙声一片 <br/>二候 · 蚯蚓出,我们能够看到蚯蚓掘开湿润的泥土,
      活泼地钻土入地,像是指挥万物复苏的“提调官” <br/>三候 · 
      王瓜生,王瓜的蔓藤开始快速攀爬生长,只待迎接收获的季节
    </div>
    <img src="../../../assets/li/mazha.png">
    <h3>立夏习俗</h3>
    <div class="text">
      迎夏 古代，人们非常重视“立夏”的礼俗。
      在“立夏”的这一天，古代帝王要率文武百官到京城南郊去迎夏，
      举行迎夏仪式。君臣一律穿朱色礼服，配朱色玉佩，连马匹、车旗都要朱红色的，
      以表达对丰收的祈求和美好的愿望。 吃乌米饭 “立夏”到来，有些地方的习俗是吃乌米饭。
      关于乌米饭的来历，流传最多的就是战国时期孙膑的故事。战国时期，孙膑被迫害关在猪舍，
      老狱卒用乌树叶煮出乌黑的糯米饭，再捏成饭团，偷送给孙膑吃。孙膑不仅靠这个方法活了下来，
      身体还很健康，最终逃出监狱。据说，孙膑第一次吃乌米饭就是在立夏那天。 称人 “称人”也就是称体重，
      在“立夏”之日，人们挂起一杆大木秤，秤钩悬一根凳子，大家轮流坐到凳子上面秤人。
      此习俗主要流行于我国南方，起源于三国时期。据说，“立夏”之日称体重后，就不怕夏季炎热缠身，让人日渐消瘦。
    </div>
  </div>
</template>

<script>
import nav from "../../nav.vue";

export default {
  name: "Lixia",
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