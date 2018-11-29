<template>
  <div>
    <top :biaoti="title" :show="bt"></top>

    <ul>
      <li><span>真实姓名</span><input type="text"></li>
      <li><span>身份证号</span><input type="text"></li>
      <li style="display: flex;justify-content: space-between;" ><span>开户银行</span><p  id="p" @click="handleClick"><span>{{choose}}</span><i class="iconfont  icon-jiantouxia1" style="float: right;color:#CCCCCC;"></i></p></li>
      <li><span>银行账号</span><input type="text" onkeyup="value=value.replace(/[^\d]/g,'')"></li>
    </ul>
    <p style="line-height: 0.8rem;font-size: 0.24rem;font-weight: 600;padding-left: 0.2rem;">手机短信验证</p>
    <div class="authcode">
      <input type="text" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="输入验证码">
      <div style="border-left: 1px solid #F67930;color:#F67930;width: 30%;padding-left: 0.3rem;text-align: center;line-height: 0.56rem;font-size: 0.28rem;"><p @click="countdown" v-show="sendAuthCode" >{{list}}</p><p v-show="!sendAuthCode" style="color:#7E7E7E;">{{auth_time}}秒</p></div>
    </div>
    <div class="end">
      <div class="suretwo" :class="">
        <p>确认绑定</p>
      </div>
      <div class="lastdiv">
        <p>温馨提示:</p>
        <p>1、只可绑定一张银行卡，绑定后不能更改;</p>
        <p>2、身份证与银行开户人必须一致;</p>
        <p>3、身份证只作为代缴个人所得税使用;</p>
        <p>4、资料填写有误会导致提款失败银行退单;</p>
      </div>
    </div>
    <mt-popup v-model="popupVisible" position="bottom" class="popupdiv">
      <ul >
        <li v-for="(con, index) in bank" @click="surebank(index)">{{con.name}}</li>
      </ul>
    </mt-popup>
  </div>
</template>

<script>
  import top from './../../../components/top'
    export default {
      data() {
          return {
            bt: false,
            title: '账户绑定',
            list: '获取验证码',
            sendAuthCode:true,
            auth_time:0,
            popupVisible:false,
            choose: '选择',
            bank: [
              {name: '中国工商银行'},
              {name: '中国建设银行'},
              {name: '中国农业银行'},
              {name: '中国银行'},
              {name: '招商银行'},
              {name: '交通银行'},
              {name: '广发银行'},
              {name: '中国邮政储蓄银行'},
            ]
          }
      },
      methods: {
        countdown:function () {
          this.sendAuthCode = false;
          this.auth_time = 60;
          var auth_timetimer =  setInterval(()=>{
            this.auth_time--;
            if(this.auth_time<=0){
              this.sendAuthCode = true;
              clearInterval(auth_timetimer);
            }
          }, 1000)
        },
        handleClick: function() {
          this.popupVisible = true
        },
        surebank(num){
          this.popupVisible = false;
          this.choose = this.bank[num].name
        }
      },
      components: {
        top
      }
    }
</script>

<style scoped>
  input{
    font-size: 0.28rem;
  }
  .popupdiv{
    width: 100%;
  }
  .popupdiv li{
    border-bottom: 1px solid #CCCCCC;
    text-align: center;
    font-size: 0.28rem;
  }
  .popupdiv ul{
    margin-top: 0;
  }
  ul{
    margin-top: 0.3rem;
    background: white;
  }
  li{
    padding: 0.2rem 0.3rem;
  }
  li p{
    width: 80%;
  }
  li i{
    font-size: 0.28rem;
  }
  #p span{
    /*font-size: 0.24rem;*/
    font-weight: 300;
    color:black;
  }
  li span{
    font-weight: 600;
    font-size: 0.28rem;

  }
  li input{
    margin-left: 0.3rem;
    width: 75%;
  }
  .suretwo{
    width: 100%;
    border-radius: 5px;
    background: #CDCDCD;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    margin-bottom: 0.5rem;
    color:white;
    font-size: 0.34rem;
  }
  .authcode{
    height: 0.96rem;
    padding: 0.2rem 0.4rem;
    background: white;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
  }
  .lastdiv p{
    font-size: 0.24rem;
    padding-top: 0.1rem;
  }
  .end{
    padding: 0.42rem 0.62rem 0 0.62rem;
  }
</style>
