<template>
  <div class="myguess">
    <top></top>
    <ul class="all">
      <li>战绩</li>
      <li>周</li>
      <li>月</li>
      <li>季</li>
    </ul>
    <ul class="us">
      <li>胜率</li>
      <li style="color:#EE8E5D;">{{count}}</li>
      <li style="color:#EE8E5D;">{{count}}</li>
      <li style="color:#EE8E5D;">{{count}}</li>
    </ul>
    <ul class="us">
      <li>盈利率</li>
      <li style="color:#EE8E5D;">{{count}}</li>
      <li style="color:#EE8E5D;">{{count}}</li>
      <li style="color:#EE8E5D;">{{count}}</li>
    </ul>
    <ul class="guessclassify">
      <li>最新竞猜</li>
      <li>历史竞猜</li>
      <li>查看记录</li>
      <li>我的关注</li>
    </ul>
  </div>
</template>

<script>
  import top from '../../../components/top_two'
    export default {
        name: "myguess",
      data() {
        return {
          active: 'tab-container1',
          count: '0%'
        }
      },
      components:{
          top
      }
    }
</script>

<style scoped>
  .guessclassify{
    width: 100%;
    height: 0.8rem;
    background: #F6F6F6;
    margin-top: 0.2rem;
    border-top: 1px solid #ECECEC;
    border-bottom: 1px solid #ECECEC;
    display: flex;
    justify-content: space-around;
  }
  .guessclassify li{
    font-size: 0.3rem;
    text-align: center;
    line-height: 0.7rem;
    color:#605F70;
    font-weight: 600;
    float: left;
    padding: 0 0.1rem 0 0.1rem;
    margin: 0 0.2rem 0 0.2rem;
    border-bottom: 0.1rem solid blue;
  }
  .us all{
    width: 100%;
  }
  .all li{
    width: 25%;
    height: 0.6rem;
    background: #F6F6F6;
    float: left;
    text-align: center;
    line-height: 0.6rem;
    border-bottom: 1px solid #EAEAEA;
    border-right: 1px solid #EAEAEA;
    font-size: 0.28rem;
    font-weight: 600;
  }
  .us li{
   width: 25%;
    height: 0.72rem;
    background: #FFFFFF;
    float: left;
    text-align: center;
    line-height: 0.72rem;
    border-bottom: 1px solid #EAEAEA;
    border-right: 1px solid #EAEAEA;
    font-size: 0.28rem;
    font-weight: 600;
  }
table{
  width: 100%;
}
.item {
  display: inline-block;
}

.nav {
  padding: 10px;
  border-radius: 0 !important;
}

.link {
  color: inherit;
  padding: 20px;
  display: block;
}
</style>
