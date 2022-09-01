<template>
  <div class="box">
    <div class="white big">
      <h3>立冬</h3>
      <div class="text">
        立冬，不仅仅代表着冬天的来临，完整地说，立冬是表示冬季开始，万物收藏，归避寒冷的意思。　立冬是十月的大节，汉魏时期，这天天子要亲率群臣迎接冬气，对为国捐躯的烈士及其家小进行表彰与抚恤，请死者保护生灵，鼓励民众抵御外故或饿寇的掠夺与侵袭。
      </div>
    </div>
    <div class="white">
      <h3>小雪</h3>
      <div class="text">
        小雪，是反映天气现象的节令。雪小，地面上又无积雪，这正是“小雪”这个节气的原本之意。小雪后气温急剧下降，天气变得干燥，是加工腊肉的好时候。小雪节气后，一些农家开始动手做香肠、腊肉，等到春节时正好享受美食。
      </div>
        
    </div>
    <div class="white">
      <h3>大雪</h3>
      <div class="text">
        大雪，是表示这一时期降大雪的起始时间和雪量程度，它和小雪、雨水、谷雨等节气一样，都是直接反映降水的节气。
      </div>
    </div>
    <div class="white">
      <h3>冬至</h3>
      <div class="text">
        冬至，在被当作一个较大节日，曾有“冬至大如年”的说法，而且有庆贺冬至的习俗。北方地区有冬至宰羊，吃饺子、吃馄饨的习俗，南方地区在这一天则有吃冬至米团、冬至长线面的习惯。各个地区在冬至这一天还有祭天祭祖的习俗。
      </div>
    </div>
    <div class="white big">
      <h3>小寒</h3>
      <div class="text">
        小寒，一般在公历1月5日或6日。小寒的意思是天气已经很冷。民间有“小寒大寒，冷成冰团”的谚语。从字面上似乎是大寒冷于小寒，其实在气象记录中，小寒期间要比大寒冷，人们常说“冷在三九，热在三伏”，而“三九天”就在小寒的节气内，所以说小寒才是全年最冷的节气。
      </div>
    </div>
    <div class="white">
      <h3>大寒</h3>
      <div class="text">
        大寒是二十四节气之一最后一个节气。每年1月20日前后太阳到达黄经300°时为大寒。表示天气严寒，最寒冷的时期到来。按我国的风俗，特别是在农村，每到大寒节，人们便开始忙着除旧布新，腌制年肴，准备年货。
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "winter"
}
</script>

<style scoped lang="less">
.box {
  width: 8.5333rem;
  height: 14.3rem;
  background: #8DA2CE;
  border-radius: .1333rem;
  padding-top: .2667rem;
  margin-bottom: 1.6rem;

  position: relative;
}

.box::after {
  content: '';
  position: absolute;
  top: -0.5333rem;
  left: 7.7333rem;
  width: 0;
  height: 0;
  border: transparent .2667rem solid;
  border-bottom-color: #8DA2CE;
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
    color: #8DA2CE;
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
.big{
  height: 2.2rem;
}
</style>