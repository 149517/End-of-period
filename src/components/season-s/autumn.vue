<template>
  <div class="box">
    <div class="white">
      <h3>立秋</h3>
      <div class="text">
        立秋，一般在公历8月7日或8日。秋的意思是暑去凉来，秋天开始。周代立秋日，天子亲率三公九卿诸侯大夫到西郊迎秋，举行祭祀仪式。汉代沿承此俗，并杀兽以祭，表示秋来扬武之意。民间则有在立秋时占卜天气凉热的风俗。
      </div>
    </div>
    <div class="white">
      <h3>处暑</h3>
      <div class="text">
        处暑，前后民间会有庆赞中元的民俗活动，俗称“作七月半”或“中元节”。旧时民间从七月初一起,就有开鬼门的仪式，直到月底关鬼门止，都会举行普渡布施活动。
      </div>

    </div>
    <div class="white">
      <h3>白露</h3>
      <div class="text">
        白露，每年公历的9月7日前后是白露。气温开始下降，天气转凉。阳气是在夏至达到顶点，物极必反，阴气也在此时兴起。到了白露，阴气逐渐加重，清晨的露水随之日益加厚，凝结成一层白白的水滴，所以就称之为白露。
      </div>
    </div>
    <div class="white">
      <h3>秋分</h3>
      <div class="text">
        秋分，时间一般为每年的9月22或23日。南方的气候由这一节气起才始入秋。按农历来讲，“立秋”是秋季的开始，到“霜降”为秋季终止，而“秋分”正好是从立秋到霜降90天的一半。在秋分时节，我国很多地区都要举行“竖蛋”的民俗活动。
      </div>
    </div>
    <div class="white">
      <h3>寒露</h3>
      <div class="text">
        寒露，南岭及以北的广大地区均已进入秋季，东北和西北地区已进入或即将进入冬季。除全年飞雪的青藏高原外，东北和新疆北部地区一般已开始降雪。
      </div>
    </div>
    <div class="white last">
      <h3>霜降</h3>
      <div class="text">
        霜降含有天气渐冷、开始降霜的意思。在公历10月23日或24日，太阳位于黄经210°时为霜降，是秋季的最后一个节气。霜降时节，养生保健尤为重要，民间有谚语“一年补透透，不如补霜降”，足见这个节气对我们的影响。霜降节气是慢性胃炎和胃十二指肠溃疡病复发的高峰期。
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "autumn"
}
</script>

<style scoped lang="less">
.box {
  width: 8.5333rem;
  height: 14.3rem;
  background: #D0E6B7;
  border-radius: .1333rem;
  padding-top: .2667rem;
  margin-bottom: 1.6rem;

  position: relative;
}

.box::after {
  content: '';
  position: absolute;
  top: -0.5333rem;
  left: 5.1333rem;
  width: 0;
  height: 0;
  border: transparent .2667rem solid;
  border-bottom-color: #D0E6B7;
}

.white {
  width: 7.3333rem;
  height: 2rem;
  background-color: white;
  margin: .5333rem auto;

  h3 {
    font-size: .5333rem;
    font-family: STXinwei, STXinwei-Regular;
    font-weight: 400;
    text-align: left;
    color: #D0E6B7;
    // line-height: 25px;
    letter-spacing: .0533rem;
    margin: .1333rem 0;
  }

  .text {
    margin: 0 .4rem;

    font-size: .1867rem;
    font-family: DengXian, DengXian-Light;
    font-weight: 300;
    text-align: left;
    color: #000000;
    line-height: .2667rem;
    letter-spacing: .0177rem;
  }
}
.last{
  height: 2.2rem;
}
</style>