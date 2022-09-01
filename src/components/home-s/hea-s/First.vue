<template>
  <Nav></Nav>
  <div class="box">
    <div class="head">
      <h2>枸杞当归鸡汤.</h2>
      <div class="text">
        当归、党参、黄芪，皆是补血补气的食材，和乌鸡或老鸡一起炖食能够迅速补充人体血气，
        滋阴养颜，对女生常见月经不调、痛经等也有一定的调理作用，
        同时补气益脾养胃，能促进食欲，补充营养，调理颜色。此汤男女皆可饮用，
        对男生具有补中益气、固本培元、滋阴潜阳的调理作用。
      </div>
    </div>
    <div class="mid">
      <p><span>名称：枸杞当归鸡汤 .</span></p>
      <p><span>功效:</span>主要食用功效补气益脾养胃，促进食欲</p>
      <p><span>原料：</span>乌鸡或老鸡，当归，党参，黄芪</p>
      <p><span>适宜人群 >> </span><span>禁忌人群 >></span></p>
    </div>
    <div class="use">
      <h3>做法：</h3>
      <ol>
        <li>除枸杞外的所有药材用清水浸泡片刻洗净备用</li>
        <li>乌鸡斩成大块，烧开一锅水，放入乌鸡煮3分钟，此法叫“飞水”，可以将乌鸡的血沫和油脂去掉大部分，煲出来的汤水更清澈清甜；</li>
        <li>将枸杞外的药材，飞过水的乌鸡放入汤煲，加入10碗清水（约2L），大火煮滚转小火煲2个小时，如果是电子炖盅的话校订时间为3个小时，广东人常说“煲三炖四”才能出一锅好汤，其实炖汤三个小时已经差不多了哦！</li>
        <li>放入洗净的枸杞再煮5分钟；</li>
        <li>关火出锅装碗，加入少量的食盐即可食用！（盐最好是最后放，一来可以避免盐长期在汤水中滚导致亚硝酸盐增加，二来汤水也会更清甜不会发暗）</li>
      </ol>
    </div>
  </div>
</template>

<script>
import nav from '../../nav.vue'
export default {
  name: "first",
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
  margin: .4667rem .5333rem;

  h2 {
    font-size: .5867rem;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: left;
    color: #ce8d8f;
    line-height: .5333rem;
    letter-spacing: .1333rem;
  }

  .text {
    font-size: .2667rem;
    font-family: DengXian, DengXian-Bold;
    font-weight: 700;
    text-align: left;
    color: #545454;
    line-height: .3733rem;
    letter-spacing: .0853rem;
  }
}

.mid {
  margin: .9333rem auto;
  padding: .1333rem;
  width: 8.5333rem;
  height: 2.7067rem;
  background: #ce8d8f;
  border-radius: .1333rem;

  p {
    span {
      font-size: .2933rem;
      font-weight: bold;
    }
    font-size: .2667rem;
    font-family: DengXian,
    DengXian-Bold;
    font-weight: normal;
    text-align: left;
    color: #000000;
    line-height: .3333rem;
    letter-spacing: .0853rem;
  }
}

.use {
  margin: 1.0667rem .5333rem ;
  h3 {
    font-size: .5333rem;
    font-family: DengXian, DengXian-Bold;
    font-weight: bold;
    text-align: left;
    color: #ce8d8f;
  }

 ol {
    font-size: .2667rem;
    font-family: DengXian, DengXian-Regular;
    font-weight: 400;
    text-align: left;
    color: #252525;
    line-height: .3733rem;
    letter-spacing: .0853rem;
  }
}
</style>