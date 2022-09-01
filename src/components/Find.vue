<template>
  <Nav></Nav>
    <div class="find">
        <div class="box">
            <!-- <img class="f-b" src="../assets/Find/f-banner.png" alt="新芽"> -->
            <div class="after">谷雨三朝看牡丹</div>
        </div>

        <div class="recommend">
            <h3>炎夏吃什么降火?</h3>

            <div class="content">
                <img src="../assets/Find/leaf.png" alt="嫩叶">
                <div class="text">
                    旧时乡间用赤豆、黄豆、黑豆、青豆、绿豆等五色豆拌合白粳米煮成“五色饭”，
                    后演变改为倭豆肉煮糯米饭，菜有苋菜黄鱼羹，称吃“立夏饭”。用红茶或胡桃壳煮蛋，
                    称“立夏蛋”，相互馈送。
                </div>
            </div>

            <h3>清明各地习俗有何不同?</h3>
            <div class="content">
                <img src="../assets/Find/qingming.png" alt="古画">
                <div class="text">
                    清明扫墓，追祀祖先，由来已久，相沿成习。扫墓，又叫墓祭、祭扫、上坟。
                    清明扫墓是因为惊蛰、春分已过，冰消雪化，草木萌生，人们想到了自己的祖先坟莹，
                    会不会因雨季来临而塌陷，所以到坟上一方面清除杂草，整修树枝，给坟上添几锨土。
                </div>
            </div>

        </div>
    </div>



</template>
<script>
import nav from "../components/nav.vue";
export default {
    name: "Find",
  components:{
    'Nav':nav
  }
}
</script>
<style scoped lang="less">
.find {
    padding-bottom: 2rem;
}

.box {
    width: 100%;
    height: 8rem;
    margin: .5333rem 0;

    position: relative;

    background-image: url('../assets/Find/f-banner.png');
    background-size: cover;

    .after {
        // content: "谷雨三朝看牡丹";
        width: 1.8667rem;
        height: 1.9733rem;
        position: absolute;
        bottom: .2rem;
        left: .6667rem;
        z-index: 3;
        font-size: .5333rem;
        font-family: AAWEILAIHEI-2;
        font-weight: 400;
        text-align: left;
        color: #fffcfc;
        line-height: .7067rem;
        // letter-spacing: 4px;

    }
}

.recommend {
    margin-bottom: 1.6rem;

    h3 {
        margin-left: .7067rem;
        font-size: .36rem;
        font-family: WenYue, WenYue-HouXianDaiTi-W3-75-J;
        font-weight: normal;
        text-align: left;
        color: #000000;
        line-height: .2267rem;
        letter-spacing: 2.67px;
    }

    .content {
        display: flex;
        justify-content: space-around;

    }

    img {
        width: 5.4667rem;
        height: 3.3333rem;
        margin-left: .2667rem;
    }

    .text {
        width: 2.8rem;
        margin-left: .2933rem;
        margin-top: .5333rem;
        font-size: .2rem;
        font-family: DengXian, DengXian-Regular;
        font-weight: 400;
        text-align: right;
        color: #525252;
        line-height: .2267rem;
        letter-spacing: 1.33px;
    }

}
</style>