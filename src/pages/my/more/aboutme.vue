<template>
  <div>
    <top :biaoti="title" :show="bt"></top>
    
    <ul class="cont">
      <li><span>头像</span>
        <div>
          <img src="../../../static/img/555.jpg" alt=""><i class="iconfont  icon-jiantou1"></i>
        </div>
      </li>
      <li><span>昵称</span><div><span>{{username}}</span></div></li>
      <li><span>手机号码</span><div><span>{{phone}}</span></div></li>
      <li @click="dissss"><span>修改个人简介</span><div><span style="font-size: 0.24rem;">{{context}}</span><i class="iconfont  icon-jiantou1"></i></div></li>
      <router-link to="changepassword" tag="li">
      <span>修改登录密码</span><div><i class="iconfont  icon-jiantou1"></i></div>
      </router-link>
    </ul>
    <div class="sure">
      <p>退出登录</p>
    </div>
    <mt-popup
      v-model="diss"
      popup-transition="popup-fade"
      position=""
      class="mydiv"
    >
        <p>请输入新的个人简介:</p>
        <div style="padding: 0.2rem 0.4rem 0 0.4rem;">
          <div class="condiv">
            <textarea style="width: 100%;height: 100%;font-size: 0.28rem;"></textarea>
          </div>
          <div style="width: 100%;height: 100%;margin-top: 0.3rem;">
            <div style="margin-left: 0.6rem;">
          <div class="mysure">确定</div>
          <div class="myoff" style="margin-left: 0.1rem;" @click="dissss">取消</div>
            </div>
          </div>
        </div>
    </mt-popup>
  </div>
</template>

<script>
  import top from './../../../components/top'
    export default {
      data(){
          return {
            bt: false,
            title: '个人资料',
            username: '哈哈哈哈哈哈',
            phone: '178****561',
            context: '个人简介',
            diss: false
          }
      },
      methods: {
          dissss(){
            this.diss = !this.diss
          }
      },
      components: {
        top
      }
    }
</script>

<style scoped>
  .mysure{
    width: 2rem;
    height: 0.72rem;
    background: #F67B3F;
    border-radius: 4px;
    font-size: 0.34rem;
    color:white;
    text-align: center;
    line-height: 0.72rem;
    display: inline-block;
  }
  .myoff{
    width: 2rem;
    height: 0.72rem;
    background: #F67B3F;
    border-radius: 4px;
    font-size: 0.34rem;
    color:white;
    text-align: center;
    line-height: 0.72rem;
    display: inline-block;
  }
  .condiv{
    width: 5.4rem;
    height: 2.1rem;
    border: 1px solid #E2E2E2;
    background: white;
    padding: 0.2rem;
  }
  .mydiv{
    width: 6.2rem;
    height: 4.6rem;
    border-radius: 8px;
    background: #EAEAEA;
  }
  .mydiv p{
    line-height: 1rem;
    font-size: 0.34rem;
    text-align: center;
    margin: 0 0.2rem 0 0.2rem;
    font-weight: 500;
    border-bottom: 1px solid #E4E4E4;
  }
  i{
    font-size: 0.24rem;
  }
  img{
    content: "";
    width: 0.7rem;
    height: 0.7rem;
    background-size: cover;
    position: absolute;
    right: 0.6rem;
    top: 0.1rem;
    border-radius: 50%;
  }
  .inputtext{
    background: #EAEAEA;
    border-radius: 5px;
  }
  .cont li:first-child{
    position:relative;
  }
  .cont li{
    display: flex;
    justify-content: space-between;
    padding: 0 0.3rem 0 0.3rem;
    height: 0.9rem;
    background: white;
    line-height: 0.9rem;
    border-bottom: 1px solid #EAEAEA;
  }
  .cont li span{
    font-size: 0.28rem;
    font-weight: 500;
  }
.sure{
  margin: auto;
  width: 80%;
  height: 1rem;
  margin-top: 0.4rem;
  text-align: center;
  color:white;
  font-size: 0.34rem;
  font-weight: 500;
  border-radius: 5px;
  background: #F57A3F;
  line-height: 1rem;
  box-shadow: 0px 3px 1px #CCC;
}
</style>
