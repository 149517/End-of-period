<template>
  <Nav></Nav>
  <div class="box">
    <div class="head">
      <h3>立春养生吃什么？</h3>
      <div class="text">
        24节气中第一个节气立春到了，这也意味着春天来了。春天里，万物欣荣，生机蓬勃，
        也是人体生理机能、新陈代谢最活跃的时期。然而春雨绵绵，天气潮湿，乍暖还寒，气候很不稳定，
        极易感冒。那么立春之后人们该吃什么呢？吃什么才最养生呢？
        关于春天的饮食民间有很多流传，中医也有很多讲究，俗称吃“春”。下面就来说说“吃春”秘籍吧
      </div>
    </div>
    <div class="ma">
      <p>(1) 红枣等养脾甜食：我国古代名医孙思邈说过：“春日宜省酸增甘，以养脾气。
        ”意思是说，春季宜少吃酸的，多吃甜的。中医认为春季为肝气旺盛之时，多食酸味食品会使肝气过盛而损害脾胃，
        所以应少食酸味食品。而人们在春天里的户外活动比冬天增多，体力消耗较大，需要的热量增多。
        但此时脾胃偏弱，胃肠的消化能力较差，不适合多吃油腻的肉食，因此，热量可适当由甜食供应。
        红枣正是这样一味春季养脾佳品。</p>
      <img src="../../../assets/subnav/dates.png">
      <p>(2) 蜂蜜：中医认为，蜂蜜味甘，入脾胃二经，能补中益气、润肠通便。春季气候多变，天气乍寒还暖，人就容易感冒。
        由于蜂蜜含有多种矿物质、维生素，还有清肺解毒的功能，故能增强人体免疫力，是春季最理想的滋补品。
        因此，在春季，如果每天能饮用1~2匙蜂蜜，以一杯温开水冲服或加牛奶服用，对身体有滋补的作用。</p>
      <img src="../../../assets/subnav/honey.png">
      <p>(3) 春芽：春日食春芽。孔子说“不时，不食”，意思是，不是这个季节的（东西）就不吃。
        中医经典著作《黄帝内经》也说要“食岁谷”，就是要吃时令食物。春天里所有的植物都生发出鲜绿的嫩芽，
        可以食用的春芽有很多，如：香椿、豆芽、蒜苗、豆苗、莴苣等等。 </p>
      <p>(4) 此外，春季对于需要滋补调养的人，可以用西洋参、龙眼肉、党参、黄芪等炖鸡或瘦肉等，
        但爱过敏的人在春季一定要忌服“发物”，如虾、蟹、咸菜等食物。</p>
    </div>
  </div>
</template>

<script>
import nav from "../../nav.vue";

export default {
  name: "second",
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
  margin: .5867rem;
  h3 {
    font-size: .4rem;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #1f1f1f;
    line-height: .36rem;
    letter-spacing: .128remF;
  }

  .text {
    // width: 628px;
    // height: 1779px;
    font-size: .2667rem;
    font-family: DengXian, DengXian-Regular;
    font-weight: 400;
    text-align: left;
    color: #1f1f1f;
    line-height: .3733rem;
    letter-spacing: .0853rem;
  }
}
.ma{
  p{
    text-indent: 2em;
    margin: .5333rem;
    font-size: .2667rem;
    font-family: DengXian, DengXian-Regular;
    font-weight: 400;
    text-align: left;
    color: #1f1f1f;
    line-height: .3733rem;
    letter-spacing: .0853rem;
  }
  img{
    margin: .2667rem .6667rem;
    width: 8.5333rem;
    height: 4.2667rem;
  }
}
</style>