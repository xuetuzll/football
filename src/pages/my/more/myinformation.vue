<template>
  <div>
    <top :biaoti="title" :show="bt"></top>

    <div class="choose">
      <p v-show="ensure" @click="cli">编辑</p>
      <p v-show="!ensure" @click="cli">取消</p>
    </div>
    <div style="margin: 0 auto;width: 50%;">
      <img src="../../../static/img/tiqiu.png" alt="" >
    </div>
    <div v-show="!ensure"  class="option">
      <ul>
        <li><p>全选</p></li>
        <li><p>反选</p></li>
        <li  @click="cli"><p>删除</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import top from './../../../components/top'
  export default {
    data() {
      return {
        bt: false,
        title: '信息',
        ensure: true
      }
    },
    methods: {
      cli(){
        this.ensure = !this.ensure
      }
    },
    components: {
      top
    }
  }
</script>

<style scoped>
  body{
    background: #EAEAEA;
  }
  .option{
    width: 100%;
    height: 1.5rem;
    padding: 0.26rem  0.5rem 0 0.5rem;
    background: white;
    position: fixed;
    bottom:0;
    border-top: 1px solid #E9E9E9;
  }
  .option ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  li{
    float: left;
    height: 0.9rem;
    width: 31%;
    background: #EAEAEA;
    border-radius: 3px;
    box-shadow: 1px 1px 1px 1px #CCC;
    font-size: 0.26rem;
    text-align: center;
    line-height: 0.9rem;
    color:#5F5F5F;
    font-weight: 600;
  }
.choose{
  width: 1.12rem;
  height: 0.56rem;
  border-radius: 20px;
  border: 1px solid #EAEAEA;
  text-align: center;
  line-height: 0.56rem;
  font-size: 0.28rem;
  color:white;
  position: absolute;
  right: 0.2rem;
  top: 0.3rem;
}
</style>
