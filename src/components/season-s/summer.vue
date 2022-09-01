<template>

  <div class="box">
    <div class="white">
      <h3>立夏</h3>
      <div class="text">
        立夏，旧时乡间用赤豆、黄豆、黑豆、青豆、绿豆等五色豆拌合白粳米煮成“五色饭”，后演变改为倭豆肉煮糯米饭，菜有苋菜黄鱼羹，称吃“立夏饭”。用红茶或胡桃壳煮蛋，称“立夏蛋”，相互馈送。
      </div>
    </div>
    <div class="white">
      <h3>小满</h3>
      <div class="text">
        小满，华南地区有“小满大满江河满”的民谚，反映了这一地区降雨多、雨量大的气候特征。气温明显增高，雨量增多，下雨后，气温会急剧下降，所以要注意添加衣服，不要着凉受风而患感冒。
      </div>

    </div>
    <div class="white">
      <h3>芒种</h3>
      <div class="text">
        芒种，是麦类等有芒作物成熟的意思。芒种日祭饯花神的风俗。芒种时节有煮梅的食俗，这一食俗在夏朝便已经有了。煮梅的方法有很多种，简单的一种是用糖与梅子一同煮或用糖与晒干的青梅混拌均匀使梅汁浸出。
      </div>
    </div>
    <div class="white">
      <h3>夏至</h3>
      <div class="text">
        夏至，这天虽然白昼最长，太阳角度最高，但并不是一年中天气最热的时候。夏至日是我国最早的节日。清代之前的夏至日全国放假一天，回家与亲人团聚畅饮。广东流行“夏至狗，没啶走(无处藏身)。”
      </div>
    </div>
    <div class="white">
      <h3>小暑</h3>
      <div class="text">
        小暑，过去民间有“食新”习俗，即在小暑过后尝新米，农民将新割的稻谷碾成米后，做好饭供祀五谷大神和祖先，然后人人吃尝新酒等。据说“吃新”乃“吃辛”，是小暑节后第一个辛日。城市一般买少量新米与老米同煮，加上新上市的蔬菜等。
      </div>
    </div>
    <div class="white">
      <h3>大暑</h3>
      <div class="text">
        大暑，一般在公历7月22日或23日。暑是炎热的意思，大暑是一年中最热的节气。冬补三九，夏补三伏。家禽肉的营养成分主要是蛋白质，其次是脂肪、微生物和矿物质等，相对于家畜肉而言，是低脂肪高蛋白的食物，其蛋白质也属于优质蛋白。
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "summer"
}
</script>

<style scoped lang="less">
.box {
  width: 8.5333rem;
  height: 14.3rem;
  background: #50A087;
  border-radius: .1333rem;
  padding-top: .2667rem;
  margin-bottom: 1.6rem;

  position: relative;
}

.box::after {
  content: '';
  position: absolute;
  top: -0.5333rem;
  left: 2.6rem;
  width: 0;
  height: 0;
  border: transparent .2667rem solid;
  border-bottom-color: #50A087;
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
    color: #50A087;
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
</style>