<template>
  <div class="box">
    <router-link to="/lichu">
    <div class="white">
      <h3>立春</h3>
      <div class="text">
        立春，俗称“打春”。旧俗立春，既是一个古老的节气，也是一个重大的节日。天子要在立春日，亲率诸侯、大夫迎春于东郊，行布德施惠之令。民间艺人制作许多小泥牛，称为“春牛”。
      </div>
    </div>
    </router-link>
    <div class="white">
      <h3>雨水</h3>
      <div class="text">
        不仅表征降雨的开始及雨量增多，而且表示气温的升高。雨水前，天气相对来说比较寒冷。雨水后，春风送暖，致病的细菌、病毒易随风传播，故春季传染病常易暴发流行。
      </div>
    </div>
    <div class="white">
      <h3>惊蛰</h3>
      <div class="text">
        象征二月份的开始，会平地一声雷，唤醒所有冬眠中的蛇虫鼠蚁，家中的爬虫走蚁又会应声而起，四处觅食。所以古时惊蛰当日，人们会手持清香、艾草，熏家中四角，以香味驱赶蛇、虫、蚊、鼠
      </div>
    </div>
    <div class="white">
      <h3>春分</h3>
      <div class="text">
        春分节气一般在公历3月20日或21日。春分这天白昼黑夜平分为各12小时，春分也正当春季（立春至立夏）三个月之中，平分了春季。有说“春分秋分，昼夜平分”，所以春分又称“日中”、“日夜分”。
      </div>
    </div>
    <div class="white">
      <h3>清明</h3>
      <div class="text">
        清明扫墓，追祀祖先，由来已久，相沿成习。扫墓，又叫墓祭、祭扫、上坟。清明扫墓是因为惊蛰、春分已过，冰消雪化，草木萌生
      </div>
    </div>
    <div class="white">
      <h3>谷雨</h3>
      <div class="text">
        有“雨水生百谷”之意。江南地区，俗呼牡丹花为“谷雨花”，以其在谷雨节开花，故有“谷雨三朝看牡丹”之谚。凡有花之处，士女游观，宴饮赏花，号曰“花会”。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "spring"
}
</script>

<style scoped lang="less">
.box {
  width: 8.5333rem;
  height: 14.3rem;
  background: #9ee8b5;
  border-radius: .1333rem;
  padding-top: .2667rem;
  margin-bottom: 1.6rem;

  position: relative;
}

.box::after {
  content: '';
  position: absolute;
  top: -0.5333rem;
  left: .2rem;
  width: 0;
  height: 0;
  border: transparent .2667rem solid;
  border-bottom-color: #9ee8b5;
}
a{
  text-decoration: none;
}
.white{
  width: 7.3333rem;
  height: 2rem;
  background-color: white;
  margin: .5333rem auto;

  h3 {
    font-size: .5333rem;
    font-family: STXinwei, STXinwei-Regular;
    font-weight: 400;
    text-align: left;
    color: #6db66f;
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
</style>