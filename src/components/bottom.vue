<template>
  <div class="bottom">
    <ul class="bottom-ul">
      <router-link  to="/score" tag="li">
        <div class="index">
          <i class="iconfont icon-duizhen"  v-if="active ==='score'"></i>
          <i class="iconfont icon-duizhen"  v-else></i>
        </div>
        <span>比分</span>
      </router-link>

      <router-link to="/prospect" tag="li">
        <div class="index">
          <i class="iconfont icon-qianzhan_huaban"  v-if="active ==='prospect'"></i>
          <i class="iconfont icon-qianzhan_huaban" v-else></i>
        </div>
        <span>前瞻</span>
      </router-link>

      <router-link to="/guess" tag="li">
        <div class="index">
          <i class="iconfont icon-jiangbei-"  v-if="active ==='guess'"></i>
          <i class="iconfont icon-jiangbei-" v-else></i>
        </div>
        <span>竞猜</span>
      </router-link>

      <router-link to="/information" tag="li">
        <div class="index">
          <i class="iconfont icon-diqiuquanqiu"  v-if="active ==='information'"></i>
          <i class="iconfont icon-diqiuquanqiu"  v-else></i>
        </div>
        <span>资料</span>
      </router-link>

      <router-link to="/my" tag="li">
        <div class="">
          <i class="iconfont icon-wode3"  v-if="active ==='my'"></i>
          <i class="iconfont icon-wode3"  v-else></i>
        </div>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "bottom",
      data(){
          return {
              active: ''
          }
      },
      mounted(){
        this.active = this.$route.path.slice(1);
      }
    }
</script>

<style scoped>

.bottom{
  width: 100%;
  height: 1.2rem;
  background: white;
  position:fixed;
  bottom:0;
  background:#fafafa;
}
.bottom-ul{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.2rem;
}
.bottom-ul li{
  width: 20%;
  list-style: none;
  display: flex;
  justify-content: center;
  float: left;
  text-align: center;
  flex-direction: column;
  overflow: hidden;
  padding-top: 0.2rem;
}
.bottom-ul span{
  color:#797A72;
  font-size:0.2rem;
}
.bottom-ul i{
  font-size: .6rem;
  color:#6B6B6B;
}
.router-link-active span{
  color:#007AFF;
}
.router-link-active i{
  color:#007AFF;
}
</style>
