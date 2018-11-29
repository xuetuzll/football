<template>
    <div>
      <top :biaoti="title" :show="bt"></top>

      <ul>
        <li>
          <i class="iconfont  icon-suo6"></i><input type="password" placeholder="原来的密码">
        </li>
        <li>
          <i class="iconfont  icon-suo6"></i><input type="password" placeholder="新密码（6-16位）">
        </li>
      </ul>
      <div class="sure">
        <div>
        <p>提交</p>
        </div>
      </div>
    </div>
</template>

<script>
  import top from './../../../components/top'
    export default {
      data(){
          return {
            bt: false,
            title: '修改密码'
          }
      },
      components: {
        top
      }
    }
</script>

<style scoped>

  input{
    border:0;
    margin-left: 0.2rem;
    font-size: 0.3rem;
  }
  i{
    color:#CCCCCC;
    font-size: 0.32rem;
  }
  ul{
    margin-top: 0.3rem;
    background: white;
  }
  li{
    padding: 0.3rem 0.4rem;
    border-bottom: 1px solid #EAEAEA;
  }
  .sure{
    padding: 0.3rem 0.4rem 0 0.4rem;
  }
.sure div{
  text-align: center;
  color:white;
  background: #CCCCCC;
  border-radius: 4px;
  font-size: 0.34rem;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  letter-spacing: 10px;
}
</style>
