<template>
  <Nav></Nav>
  <div class="box">
    <div class="title">
立秋
    </div>
    <div class="text">
      盛夏的余热未消，立秋就已经来临。
      立秋后，我国许多地区开始刮偏北风偏南风逐渐减少。
      小北风给人们带来了丝丝凉意。有一句俗语说：“立秋一日，水冷三分”，
      虽然现在还有“秋老虎”坐镇，依旧酷暑难耐，但是凉爽的日子就在后面。 
      立秋是农家重视的大节气，鲁东地区就有“立秋开头坐一坐，来年春天要挨饿”的俗谚，
      提醒人们加紧农事劳作，夺取丰收。
    </div>
    <img src="../../../assets/li/fengye.png">
    <h3>立秋三候</h3>
    <div class="text">
      一候凉风至;<br/>二候白露生;<br/>三候寒蝉鸣。 <br/>是说立秋过后，
      刮风时人们会感觉到凉爽，此时的风已不同于暑天中的热风;接着，大地上早晨会有雾气产生;并且秋天感阴而鸣的寒蝉也开始鸣叫。
    </div>
    <img src="../../../assets/li/tiank.png">
    <h3>立秋习俗</h3>
    <div class="text">
      贴秋膘 俗话说“一夏无病三分虚”。夏季难熬，胃口不佳，
      体质会有所下降，因此在立秋这天以肉贴膘来食补，补充伏天失去的能量。可选择一些性味平和，脂肪量较少的肉类来食用，
      也可以搭配乳制品与豆制品，效果更佳。 啃秋 啃秋又叫“咬秋”，寓意夏季酷暑难耐，正值立秋，将其咬住。
      立秋这天，吃西瓜、吃香瓜，有不生秋痱子的说法。而西瓜味道甘甜，性寒凉，不仅有解暑的功效，
      按中医说法，还能防治因湿热导致的腹泻。在些地方，
      还会吃秋桃，吃完桃子将桃核留下，在除夕时将桃核丢进火炉烧成灰，来趋吉避凶。北方还会吃饺子，代表团圆，圆满。
    </div>
  </div>
</template>

<script>
import nav from "../../nav.vue";

export default {
  name: "Liqiu",
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