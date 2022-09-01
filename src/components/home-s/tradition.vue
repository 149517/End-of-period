<template>
  <Nav></Nav>
  <div class="box">
    <div class="head">
      <div class="title">
        二十四节气:
      </div>
      <img src="../../assets/subnav/tradition.png">
    </div>
    <div class="contain">
      <div class="con">
        <h3>二十四节气由来</h3>
        <div class="text">
          二十四节气，是上古时代人们根据地球在黄道（即地球绕太阳公转的轨 道）上的位置变化而制定的，
          每一个节气分别相应于太阳在黄道上每运动 15°所到达的一定位置而制定的气候规律。
          地球绕太阳运行的轨道古人命 名为“黄道”，也称“日道”，将黄道等比例分成24份，之间相隔15° ，
          就形成了24个节气。24个节气其实就是24个时令点，每月2个。二十四 节气以地球围绕太阳公转的一个周期作为一个轮回，
          基本概括了一年中不 同时节太阳在黄道上位置的不同、寒来暑往的准确时间、降雨降雪等自然 现象发生的规律，
          以及记载了大自然中一些物候现象的时刻。
        </div>
      </div>
      <div class="con">
        <h3>节气文化</h3>
        <div class="hen">
          <div class="text">
            八风，统指四时气候变化而言。 《易纬通卦验》：“八节之风谓 之八风。立春条风至，春分明庶 风至，
            立夏清明风至，夏至景风 至，立秋凉风至，秋分阊阖风至， 立冬不周风至，冬至广莫风至。” 这种说法主要来源于易学，
            广莫 风对应北方坎位、条风对应东北 方艮位、明庶风对应东方震位、
            清明风对应东南方巽位、景风对 应南方离位、凉风对应西南方坤 位、阊阖风对应正西方兑位以及 不周风对应西北方乾位
          </div>
          <img src="../../assets/subnav/feng.png">
        </div>

      </div>
      <div class="con">
        <h3>七十二侯</h3>
        <div class="text">
          七十二候，是汉后文人根据黄河流域的地理、气候、和自然界的一些景象 编写而成，以五日为一候。
          各候均以一个物候现象相应，称“候应”。其 中植物候应有植物的幼芽萌动、开花、结实等；动物候应有动物的始振、
          始鸣、交配、迁徙等；非生物候应有始冻、解冻、雷始发声等。
          由于候的 时间单位较小（5天为一候），而气候的年际及地区差别很大，故难以广 泛运用。
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import nav from '../nav.vue'
export default {
  name: "tradition",
  components: {
    'Nav': nav
  }
}
</script>

<style scoped lang="less">
  .box{
    padding-bottom: 2rem;
  }
.head {
  margin-top: .6667rem;
  width: 100%;

  .title {
    margin-left: .6667rem;
    font-size: .4rem;
    font-family: SourceHanSansCN, SourceHanSansCN-Regular;
    font-weight: 400;
    text-align: left;
    color: #9b9480;
    line-height: .3333rem;
    letter-spacing: .04rem;
  }

  img {
    display: block;
    width: 8.52rem;
    height: 5.16rem;
    margin: .2rem auto;
  }
}

.contain {
  margin: 1.0667rem auto;

  width: 8.1467rem;


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
    //     width: 611px;
    // height: 215px;
    font-size: .2267rem;
    font-family: DengXian, DengXian-Regular;
    font-weight: 400;
    text-align: left;
    color: #000000;
    line-height: .3733rem;
    letter-spacing: .0223rem;
  }

  .hen {
    display: flex;

    img {
      width: 4.36rem;
      height: 2.9333rem;
    }
  }
}
</style>