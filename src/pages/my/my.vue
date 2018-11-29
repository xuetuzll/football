<template>
  <div class="my">
    <div class="personal">
      <div class="icon">
        <img src="../../static/img/555.jpg">
      </div>
      <router-link to="/myinformation">
      <div style="float: left;" ><span class="cname iconfont icon-xiaoxi3">哈哈哈哈哈</span><i class=""></i></div>
      </router-link>
      <div class="myintroduce"><p>{{introduce}}</p></div>
    </div>
    <div class="second">
      <ul>
        <li><p>球币</p><span style="color:#F67D42;">0.0</span></li>
        <li><p>积分</p><span>9145</span></li>
        <router-link to="/aboutme" tag="li">
        <div style="border-right:0;"><i class="iconfont icon-bi"></i><p>我的资料</p></div>
        </router-link>
      </ul>
    </div>
    <div class="index">
      <ul class="third">
        <router-link to="/myguess">
        <li style="border-top:1px solid #DDDDDD;"><i class="iconfont icon-wodecopy"></i><span>我的竞猜</span><span class="right"><i class="iconfont icon-jiantou4"></i></span></li>
        </router-link>
        <router-link to="/pay">
        <li><i class="iconfont icon-chongzhi1"></i><span>充值兑换</span><span class="right"><i class="iconfont icon-jiantou4"></i></span></li>
        </router-link>
      </ul>
    </div>
    <div class="index">
      <ul>
        <router-link to="feedback">
        <li style="border-top:1px solid #DDDDDD;"><i class="iconfont icon-yijianfankui1"></i><span>反馈建议</span><span class="right"><i class="iconfont icon-jiantou4"></i></span></li>
        </router-link>
        <li @click="handleClick"><i class="iconfont icon-iconfontzhizuobiaozhun023130"></i><span>推荐好友</span><span class="right"><i class="iconfont icon-jiantou4"></i></span></li>
        <li @click="upversions"><i class="iconfont icon-shuaxinrefresh39"></i><span>检查更新</span><span class="right"><i class="iconfont icon-jiantou4" ></i></span></li>
        <li @click="clear"><i class="iconfont icon-lajitong2"></i><span>清楚缓存</span><span class="right" style="font-size: 0.22rem;"><span>{{cachedata}}</span><span>M</span><i class="iconfont icon-jiantou4"></i></span></li>
      </ul>
    </div>
    <mt-popup v-model="popupVisible" position="bottom" class="popupdiv">
      <p>选择要分享到的平台</p>
      <ul>
        <li><img src="../../static/img/wx.svg" alt=""><p>微信</p></li>
        <li><img src="../../static/img/wxpyq.svg" alt=""><p>微信朋友圈</p></li>
        <li><img src="../../static/img/qq.svg" alt=""><p>QQ</p></li>
        <li><img src="../../static/img/xl.svg" alt=""><p>新浪</p></li>
      </ul>
      <ul style="margin-bottom: 0.4rem;">
        <li><img src="../../static/img/txwb.svg" alt=""><p>腾讯微博</p></li>
        <li><img src="../../static/img/qqkj.svg" alt=""><p>QQ空间</p></li>
        <li><img src="../../static/img/dx.svg" alt=""><p>短信</p></li>
      </ul>
    </mt-popup>
    <div class="index">
      <router-link to="aboutus">
      <li style="border-top:1px solid #DDDDDD;"><i class="iconfont icon-gantanhao"></i><span>关于我们</span><span class="right"><span>v4.0.0</span><i class="iconfont icon-jiantou4"></i></span></li>
      </router-link>
      <router-link to="aboutadvertising">
      <li><i class="iconfont icon-2weixuanzhong"></i><span>关于广告</span><span class="right"><i class="iconfont icon-jiantou4"></i></span></li>
      </router-link>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
  import bottom from '../../components/bottom'
  import {toast,messageBox,popup} from 'mint-ui'
  export default {
    name: "my",
    data() {
      return {
        cachedata:'0.01',
        popupVisible:false,
        introduce: '个人简介'
      }
    },
    components:{
      bottom
    },
    methods: {
      clear(){
        this.cachedata = '0'
        this.$toast({
          message: '缓存已清理完成',
          className:'add'
        })
      },
      upversions(){
        this.$messagebox({
          titlt:'暂无新版本',
          message:'暂无新版本'
        }).then(action => {
          console.log(1);
        })
      },
      handleClick: function() {
        this.popupVisible = true
      }
    }
  }
</script>

<style scoped>
  div .add {
    width: 100%;
    height: 100%;
    color: blue;
  }
  div .mint-msgbox{
    border-radius: 10px;
  }
  .myintroduce{
    color:white;
    position: absolute;
    left: 1.6rem;
    top: 0.8rem;
    font-size: 0.26rem;
    width: 100%;
  }
  .myintroduce p{
    width: 70%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    color:#B5AECD;
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
  .personal{
    background: #472E93;
    width: 100%;
    border: 1px solid #462D92;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }
  .icon img{
    width: 1.26rem;
    height: 1.26rem;
    border-radius: 50%;
    background-size: cover;
    margin: 0.2rem 0 0.26rem 0.2rem;
    float: left;
  }
  .cname{
    color:white;
    font-size: 0.36rem;
    position:absolute;
    top: 0.3rem;
    left: 1.6rem;
  }
  .icon-xiaoxi3{
    font-size: 0.36rem;
    color:white;
  }
  .second{
    width: 100%;
    height: 1.2rem;
    border-bottom:1px solid #CCCCCC;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    font-size: 0.3rem;
  }
  .second i{
    font-size: 0.34rem;
  }
  .index i{
    font-size: 0.34rem;
  }
  .second ul{
    width: 100%;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
  }
  .second li{
    width: 33%;
    list-style: none;
    height: 0.72rem;
    float:left;
    border-right:1px solid rgba(220,220,220,0.5);
    text-align: center;
  }
  .second p{
    font-weight: 400;
    color:black;
    font-size:0.3rem
  }
  .index{
    margin-top: 0.22rem;
  }
  .index li{
    height: 0.9rem;
    width: 100%;
    background: white;
    border-bottom:1px solid #DDDDDD;
    line-height: 0.5rem;
    padding: 0.2rem;
  }
  .index .right span{
    color:#9C9C9C;
    font-size: 0.22rem;
  }
  .index .right i{
    font-size: 0.3rem;
    color:#DCDCDC;
  }
  .right{
    float: right;
  }
  .index span{
    font-size: 0.29rem;
    font-weight: 400;
    margin-left: 0.1rem;
  }
</style>
