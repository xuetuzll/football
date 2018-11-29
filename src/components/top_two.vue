<template>
  <div class="top">
    <div class="top-left" @click="$router.go(-1)">
      <i class="iconfont icon-arrow-right"></i>
    </div>
    <div class="top-in">
      <img src="../static/img/555.jpg" alt="">
      <span>粉丝:<span style="margin-left: 0.1rem;">{{number}}</span></span>
    </div>
    <div class="top-right">
      <i class="iconfont icon-iconfontzhizuobiaozhun023130" @click="share"></i>
      <i class="iconfont icon-fenlei2" @click="appear"></i>
    </div>
    <mt-popup v-model="popupVisible" position="bottom" class="popupdiv">
      <p>选择要分享到的平台</p>
      <ul>
        <li><img src="../static/img/wx.svg" alt=""><p>微信</p></li>
        <li><img src="../static/img/wxpyq.svg" alt=""><p>微信朋友圈</p></li>
        <li><img src="../static/img/qq.svg" alt=""><p>QQ</p></li>
        <li><img src="../static/img/xl.svg" alt=""><p>新浪</p></li>
      </ul>
      <ul style="margin-bottom: 0.4rem;">
        <li><img src="../static/img/txwb.svg" alt=""><p>腾讯微博</p></li>
        <li><img src="../static/img/qqkj.svg" alt=""><p>QQ空间</p></li>
        <li><img src="../static/img/dx.svg" alt=""><p>短信</p></li>
      </ul>
    </mt-popup>
    <div class="classify" v-show="arise">
      <ul>
        <li><p>球币明细</p></li>
        <li><p>积分明细</p></li>
        <li><p>重置成绩</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "top",
    data() {
      return {
        popupVisible:false,
        number: 0,
        arise: false
      }
    },
    methods: {
      share(){
        this.popupVisible = !this.popupVisible
      },
      appear(){
        this.arise = !this.arise
      },
    },
    props: [
      'title'
    ]
  }
</script>

<style scoped>
  .top{
    position: relative;
  }
  .classify li{
    width: 100%;
    height: 0.7rem;
    text-align: center;
    line-height: 0.7rem;
  }
  .classify:after{
    content: '';
    width: 0;
    height: 0;
    border-bottom: 0.2rem solid #DDE5F0;
    border-left: 0.2rem solid transparent;
    border-top: 0.2rem solid transparent;
    border-right: 0.2rem solid transparent;
    position: absolute;
    top: -0.4rem;
    right: 0.3rem;
  }
  .classify{
    width: 1.7rem;
    height: 2.1rem;
    background: #DDE5F0;
    border-radius: 4px;
    position: absolute;
    top:1.2rem;
    /*bottom: -2.1rem;*/
    right:0.06rem;
  }
  .popupdiv p{
    font-size: 0.34rem;
  }
  .popupdiv img{
    width: 0.8rem;
    height: 0.8rem;
  }
  .popupdiv{
    width: 100%;
    padding: 0.3rem;
    text-align: center;
    background: #EAEFF3;
  }
  .popupdiv ul{
    overflow: hidden;
    margin-top: 0.4rem;
  }
  .popupdiv li{
    list-style: none;
    float: left;
    width: 25%;
  }
  .popupdiv li p{
    font-size: 0.28rem;
    margin-top: 0.2rem;
  }
  .top{
    width: 100%;
    height: 1rem;
    background:#462D92;
    z-index: 1;
  }
  .top-left{
    width: 13%;
    height: 100%;
    float: left;
  }
  i{
    font-size: 0.4rem;
    line-height: 1rem;
    text-align: center;
    display: block;
    color:white;
  }
  .top-in img{
    width: 0.76rem;
    height: 0.76rem;
    border-radius: 50%;
    margin-right: 0.1rem;
  }
  .top-in span{
    letter-spacing:1px;
    font-weight: 100;
  }
  .top-in{
    width: 65%;
    float: left;
    height: 1rem;
    font-size: 0.24rem;
    line-height: 1rem;
    color:white;
  }
  .top-right{
    width: 22%;
    height: 100%;
    float: left;
    display: flex;
    justify-content: space-around;
  }
  .top-right i{
    width: 50%;
    font-size: 0.4rem;
  }
</style>
