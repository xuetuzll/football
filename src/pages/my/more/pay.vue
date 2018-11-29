<template>
  <div class="pay">
    <top :biaoti="title" :show="bt"></top>

    <div class="orderMain">
      <div class="order-box">
        <div v-for="(cont,index) in t" @click="btn(index)" id="roof">
          <div id="sort" :class="{active:index===nowindex}">{{cont.item}}</div>
        </div>
      </div>
      <div class="order-box2">
        <div v-show="nowindex===0">
          <p class="headline1">充值金额</p>
          <div class="moneyall">
            <ul class="money">
              <li  v-for="(m,ind) in q" @click="cli(ind)" :class="{pitchon:ind===nowmoney}">
                <div >
                <span>{{m.sum}}球币</span><br>
                <span style="color:#F0824B;">¥{{m.topay}}</span>
                </div>
              </li>
            </ul>
            <div class="all">
              <div class="other">
                <input  onkeyup="value=value.replace(/[^\d]/g,'')" type="text" placeholder="其它金额（1元=1球币）" @click="another" id="inte">
              </div>
            </div>
          </div>
          <p class="headline2">充值方式</p>
          <div>
            <ul class="payway">
              <li @click="checkup"><img src="../../../static/img/yinlian.jpeg" alt=""><span>银联支付</span><i class="iconfont  icon-xuanzhong3" style="color:#F37A3E;" v-show="checkon"></i><i class="iconfont  icon-unselected" v-show="!checkon"></i></li>
              <li @click="checkup"><img src="../../../static/img/yinlian.jpg" alt=""><span>易宝支付</span><i class="iconfont  icon-xuanzhong3"  style="color:#F37A3E;" v-show="!checkon"></i><i class="iconfont  icon-unselected" v-show="checkon"></i></li>
            </ul>
          </div>
          <div class="last">
            <p style="color:#7E7E7E;">1、如充值过程中遇到问题，请联系QQ<span style="color:#294FDB;text-decoration: underline;">{{QQ}}</span></p>
            <p>2、用户充值的球币只用于比分消费，不可提现或退款；</p>
            <p>3、球币只适用于查看其它用户的竞猜内容，不支持其它用途；</p>
          </div>
          <div class="sure">
            <span>确认</span>
          </div>
        </div>
        <router-link to="/prizelog">
        <div v-show="nowindex===1" class="prizelog">
          <p>兑换记录</p>
        </div>
        </router-link>
        <div v-show="nowindex===1">
          <router-link to="/linkaccount" tag="div" class="firstdiv">
            <p>+添加银行卡和绑定身份证</p>
          </router-link>
          <p style="line-height: 0.8rem;padding-left: 0.28rem;font-size: 0.3rem;font-weight: 600;">兑换金额</p>
          <div class="limit">
            <span style="margin-left: 0.48rem;">¥</span><input type="text" onkeyup="value=value.replace(/[^\d]/g,'')">
          </div>
          <p style="line-height: 0.8rem;padding-left: 0.28rem;font-size: 0.3rem;font-weight: 600;">手机短信验证</p>
          <div class="authcode">
            <input type="text" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="输入验证码" id="dd">
            <div style="border-left: 1px solid #F67930;color:#F67930;width: 30%;padding-left: 0.3rem;text-align: center;"><p @click="countdown" v-show="sendAuthCode" style="line-height: 0.56rem;font-size: 0.3rem;">{{list}}</p><p v-show="!sendAuthCode" style="color:#7E7E7E;line-height: 0.56rem;font-size: 0.3rem;">{{auth_time}}秒</p></div>
          </div>
          <div class="end">
            <div class="suretwo" :class="{bian: yes}">
              <p>请先添加银行卡或绑定身份证</p>
            </div>
            <div class="lastdiv">
              <p>如有遇到问题，请点击此处联系客服QQ<span style="color:blue;text-decoration: underline;">{{QQ}}</span></p>
              <p>提现注意：</p>
              <p>1、到账时间：具体到账时间以银行及平台方处理后为准</p>
              <p>2、提款额度：单笔提款没有最高限额，每次最低提现100元，提款手续费为2元/笔</p>
              <p>3、汇款处理时间：17：00前申请当日处理，17:00后申请次日处理，法定节假日申请顺延至节后</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import top from './../../../components/top'
    export default {
      data () {
          return {
            bt: false,
            title: '充值兑换',
            nowindex: 0,
            t: [
              {item:'球币充值'},
              {item:'竞猜兑换'}
            ],
            nowmoney: 0,
            q: [
              {sum:'50',topay:'50'},
              {sum:'100',topay:'100'},
              {sum:'350',topay:'300'},
              {sum:'600',topay:'500'}
            ],
            QQ:'3491079382',
            list: '获取验证码',
            sendAuthCode:true,
            auth_time:0,
            yes: false,
            checkon: true
          }
      },
      methods: {
          checkup(){
            this.checkon = !this.checkon
          },
        function () {
          let d = doucument.getElementById('dd');
          if (d.value == ''){
            this.yes = false
          } else {
            this.yes = true
          }
        },
          btn(num) {
            this.nowindex = num;
          },
          cli(numb) {
            this.nowmoney = numb;
            var ine = document.getElementById('inte');
            ine.value = ''
          },
          another() {
            this.nowmoney = '';
          },
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
        }
      },
      components: {
        top
      }
    }
</script>

<style scoped>
.payway img{
  width: 0.46rem;
  height: 0.46rem;
  margin-right: 0.1rem;
}
.prizelog{
  position: absolute;
  right: 0.2rem;
  top: 0.3rem;
  font-size: 0.3rem;
  color:white;
}
.end .bian{
  background: black;
}
.authcode{
  padding: 0.2rem 0.4rem;
  height: 0.96rem;
  background: white;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}
.limit{
  height: 0.96rem;
  width: 100%;
  background: white;
  font-size: 0.34rem;
  font-weight: 800;
  line-height: 0.96rem;
}
.limit input{
  margin-left: 0.3rem;
}
.firstdiv{
  margin-top: 0.28rem;
  width: 100%;
  height: 1.16rem;
  background: white;
  text-align: center;
  line-height: 1.16rem;
  color:#939393;
  font-size: 0.38rem;
}
.suretwo{
  width: 100%;
  border-radius: 3px;
  background: #CDCDCD;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
  margin-bottom: 0.5rem;
  color:white;
  font-size: 0.34rem;
}
.lastdiv p{
  font-size: 0.24rem;
  padding-top: 0.1rem;
}
.end{
  padding: 0.42rem 0.62rem 0 0.62rem;
}
.sure{
  width: 88%;
  height: 1rem;
  background: #F67B3F;
  text-align: center;
  line-height: 1rem;
  border-radius: 4px;
  color:white;
  font-size: 0.32rem;
  box-shadow: 0px 3px 4px #C4B8B3;
  margin: 0.3rem auto;
}
.last p{
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.1rem;
  color:#DC5857;
  font-size: 0.24rem;
  font-weight: 800;
}
.last{
  padding-top: 0.3rem;
}
.clear{
  clear: both;
}
.payway i{
  float: right;
  color:#CECECE;
  font-size: 0.36rem;
}
.payway{
  width: 100%;
  background: white;
  overflow: hidden;
}
.payway li{
  float: left;
  width: 100%;
  height: 0.92rem;
  font-size: 0.28rem;
  font-weight: 600;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  line-height: 0.92rem;
  border-bottom: 1px solid #EAEAEA;
}
.all{
  padding: 0.2rem;
  padding-top: 0;
}
input{
  border:0;
}
.other{
  border:1px solid #ECECEC;
  width: 5.14rem;
  height: 0.9rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
#inte{
  align-items: center;
}
.other input{
  width: 90%;
}
.moneyall{
  background: white;
  height: 2.76rem;
  width: 100%;
}
.money{
  width: 100%;
  display: flex;
  color:#797979;
  justify-content: space-around;
  padding-top: 0.3rem;
  padding-bottom: 0.2rem;
  font-weight: 900;
}
.money li{
  width: 1.62rem;
  height: 1.12rem;
  text-align: center;
  float: left;
  font-size: 0.3rem;
  color:#787878;
  border:1px solid #ECECEC;
  padding-top: 0.1rem;
}
input{
  font-size: 0.3rem;
}
.orderMain{
width: 100%;
}
.order-box{
  height: 0.8rem;
  background: white;
  width: 100%;
  border-bottom: 1px solid #CCC;
}
.active{
  color:#F67930;
  border-bottom: 0.08rem solid #F67930;
}
#roof{
  width: 50%;
  height: 100%;
  line-height: 0.9rem;
  float: left;
  text-align: center;
}
#sort{
  width: 100%;
  font-size: 0.32rem;
  font-weight: 400;
  line-height: 0.75rem;
}
.headline1{
  line-height: 0.56rem;
  padding-left: 0.2rem;
  color:black;
  font-size: 0.28rem;
  font-weight: 600;
}
.headline2 {
color:black;
line-height: 0.56rem;
padding-left: 0.2rem;
font-size: 0.28rem;
font-weight: 600;
}
.order-box2 .money .pitchon{
  background: #FEF3EF;
  color:#F0824B;
  border:1px solid #F0D8C9;
  font-weight: 900;
}
</style>
