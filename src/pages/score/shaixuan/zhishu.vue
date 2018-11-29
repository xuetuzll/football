<template>
  <div>
    <top :biaoti="title" :show="bt" @queren-click="queren"></top>

    <ul>
        <li v-for="(item,index) in zhishu" :class="{ active: item.flag }" @click="dianji(index)">{{ item.zhishuming }}</li>
    </ul>

    <div class="pankoubottom">
        <div class="left">
            符合条件&nbsp<span>4</span>&nbsp场</br>让球/大小可多选或混选
        </div>
        <div class="right">
            <button @click="quanxuan">全选</button>
            <button @click="quanbuxuan">全不选</button>
        </div>
    </div>
  </div>
</template>

<script>
  import top from './../../../components/top'
    export default {
        data () {
            return {
              "bt": false,
              "title": "指数筛选",
              "zhishu": [
                {"id":"1","zhishuming": "亚盘","flag": "true"},
                {"id":"2","zhishuming": "大小","flag": "true"},
                {"id":"3","zhishuming": "欧赔","flag": ""},
                {"id":"4","zhishuming": "角球","flag": ""}
              ]
            }
        },
        created: function(){
            this.queren();
        },
        methods: {
          dianji(index){
            var flag = ''
            var s = 0;
            for(var i=0; i<this.zhishu.length; i++){
              if(this.zhishu[i].flag == 'true'){
                s++;
              }
            }
            for(var i=0; i<this.zhishu.length; i++){
              if(s>=0) {
                if (i === index) {
                  if (this.zhishu[index].flag == 'true') {
                    s--;
                    if(s<1){
                      alert("必须有一个选中");
                      return;
                    }
                    flag = '';
                  } else {
                    flag = 'true';
                  }
                  this.zhishu[index].flag = flag;
                }
              }
            }
          },
          queren() {
            this.bt = true;
            var id = [];
            for(var i=0;i<this.zhishu.length;i++){
              if(this.zhishu[i].flag == 'true'){
                id.push(this.zhishu[i].id);
              }
            }
            alert(id);
          },
          quanxuan(){
            for(var i=0; i<this.zhishu.length; i++){
              this.zhishu[i].flag = 'true';
            }
          },
          quanbuxuan(){
            for(var i=0; i<this.zhishu.length; i++){
              this.zhishu[i].flag = '';
            }
          }
        },
        components: {
          top
        }
    }
</script>

<style scoped>
.active{
  background: #d9d9d9;
}

ul{
  margin-left: 0.3rem;
  margin-top: 0.24rem;
}
li{
  text-align: center;
  float: left;
  width: 22%;
  height:0.98rem;
  margin: 0.08rem;
  line-height:0.98rem;
  font-size:0.35rem;
  background: #fff;
}
ul .active{
  background: #FBE39B;
  border: 1px solid #9D5C24;
  color: #A05D1A;
}

.pankoubottom{
    position:absolute;
    bottom: 0;
    width:100%;
    height: 1.2rem;
    background: #472E93;
    border: 1px solid yellow;
}
.left{
    color:#fff;
    font-size:0.3rem;
    position:absolute;
    left:0.1rem;
    margin-top:0.18rem;
}
.left span{
    color: #DDC120;
}
.right{
    color: #9B9E95;
    position:absolute;
    right:0.2rem;
}
.right button{
    height: 0.8rem;
    width: 1.6rem;
    line-height: 0.6rem;
    margin: 0.2rem 0;
    font-size: 0.4rem;
}
</style>
