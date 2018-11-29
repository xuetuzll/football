<template>
  <div>
    <top :biaoti="title" :show="bt"></top>

    <div class="head">
    <textarea placeholder="请输入您的建议或问题，不少于5个字"></textarea>
    <input type="text" placeholder="请留下QQ或电话号码" class="secondinp" onkeyup="value=value.replace(/[^\d]/g,'')">
    <span style="color:#D15050;font-size: 0.32rem;">&nbsp（必填）</span>
    <input type="file" class="pull">
      <div class="sure">
        <div class="topull">
          <span>提交</span>
        </div>
      </div>
      <hr>
      <p style="font-size: 0.26rem;">如有遇到问题，请点击此处联系客服QQ<span style="color:blue;text-decoration: underline;">3491079382</span></p>
    </div>

  </div>
</template>

<script>
import top from './../../../components/top'
    export default {
      data(){
          return {
            bt: false,
            title: '信息反馈'
          }
      },
      components: {
        top
      }
    }
</script>

<style scoped>

textarea{
  border-radius: 5px;
  border:2px solid #ADC5CE;
  width: 100%;
  height: 2.48rem;
}
textarea::-webkit-input-placeholder,
input::-webkit-input-placeholder {
    font-size: 0.32rem;
    color: #aab2bd;
}

input{
  font-size: 0.32rem;
}
.head{
  padding: 0.18rem;
}
.secondinp{
  width: 70%;
  height: 0.72rem;
  margin: 0.11rem 0;
  border-radius: 5px;
  border:2px solid #ADC5CE;
}
.pull{
  border-radius: 4px;
  /*border: 2px solid #ADC5CE;*/
}
.topull{
  width: 2.08rem;
  height: 0.68rem;
  background: #F67B3F;
  text-align: center;
  line-height: 0.68rem;
  color:white;
  font-size: 0.3rem;
  border-radius: 4px;
  box-shadow: 0px 4px 1px #CCC;
  float: right;
}
.sure{
  overflow: hidden;
  padding-bottom: 0.1rem;
}
</style>
