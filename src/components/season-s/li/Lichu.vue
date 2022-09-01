<template>
<Nav></Nav>
  <div class="box">
    <div class="title">
      立春
    </div>
    <div class="text">
      立春，为二十四节气之首，又名正月节、岁节、改岁、岁旦等。古籍《群芳谱》对立春解释为：“立，始建也。
      春气始而建立也。”立春标示着万物闭藏的冬季已过去，开始进入风和日暖、万物生长的春季。
      立春正是阳气初生之时，万物至此，渐次复苏。故《立春》诗云：“东风带雨逐西风，大地阳和暖气生。
      ” 东风吹水，冬去春来，春到人间草木知。万物复苏，阳和启蛰，品物皆春。立春，乃万物起始，一年的四季由此开启。
      当春风拂过大地，掠过山河，当日出东方，光照四野，我们迎来了又一个新春。去年的光景还在眼前，战疫的决心不减。
      我们相信，疫情终会散去；我们期待春雨添花，一山春色！ 越过了料峭寒冬，春如期而至。跟随着对生活的热爱，
      去感受生命的蓬勃向上，去开启你新日里的万千气象。愿你我不负春光，不负自己！愿春暖花开，国泰民安！
    </div>
    <img src="../../../assets/li/taohua.png">
    <h3>立春三候</h3>
    <div class="text">
      一候，东风解冻。立春之日“东风解冻”，东方属木，木为火之母，火气温，由此才“冻痕销水中”，
      “波起轻摇绿”。 <br/>二候，蜇虫始振。立春日后五日“蛰虫始振”，
      “蛰虫”是冬藏之虫，此时被惊醒，动而未出。 <br/>三候，鱼陟负冰。再五日“鱼陟负冰”，陟（zhì）是升，
      鱼因水底暖，感知阳气而上升，冰尚未消融而负冰。“立雪鹤深睡，负冰鱼聚沉”，春气还弱。
    </div>
    <img src="../../../assets/li/lvye.png">
    <h3>立春习俗</h3>
    <div class="text">
      咬春 “立春”这一天，中国民间习惯吃萝卜、姜、葱、面饼，称为“咬春”。
      民间在立春这一天要吃一些春天的新鲜蔬菜，既为防病，又有迎接新春的意味。
      民间“咬春”的另一种食品是萝卜。因为萝卜味辣，取古人“咬得草根断，则百事可做”之意。
      打春 打春的风俗，最早来自皇宫，在立春之日要把皇宫门前立的泥塑春牛打碎一说。现在，一些农村仍有打春牛的风俗。
      立春前，用泥塑一牛，称为春牛。妇女们抱小孩绕春牛转三圈，旧说可以不患疾病，今已成为娱乐。
      迎春 由于是春天的开始，我国民间都把立春作为节日来过，称为立春节，在这一天要举行盛大的迎春仪式。
      专家介绍说，立春日迎春，是在立春日进行的一项重要活动，历史悠久，在三千年前就已经出现。
      虽然现在立春日迎春不如从前隆重，但各地仍会有一些特殊的方式来迎接立春，比如还有挂风车、踏青等。
    </div>
  </div>
</template>

<script>
import nav from "../../nav.vue";

export default {
  name: "Lichu",
  components:{
    "Nav":nav
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