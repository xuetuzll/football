<template>
  <div>
    <top :biaoti="title" :show="bt" @queren-click="queren"></top>

    <ul class="qiangduiul">
      <li v-for="(item,x) in tiaojian" class="qiangduili">
        <p>{{ item.tiaojianxiang }}</p>
        <span v-for="(item,y) in item.tiaojianzhi" @click="dianji(x,y)" :class="{ active: item.flag }">{{ item.fanwei }}</span>
      </li>
    </ul>

    <div class="qiangduibottom">
        <div class="left">
            符合条件&nbsp<span>4</span>&nbsp场</br>让球/大小可多选或混选
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
          "title": "条件筛选",
          "tiaojian": [
            {"id": "1","tiaojianxiang": "连胜场次",
              "tiaojianzhi": [
                {"id": "1","fanwei": "3-4","flag": "true"},
                {"id": "2","fanwei": "5-6","flag": ""},
                {"id": "3","fanwei": "7+","flag": ""}
              ]
            },
            {"id": "2","tiaojianxiang": "连负场次",
              "tiaojianzhi": [
                {"id": "1","fanwei": "3-4","flag": "true"},
                {"id": "2","fanwei": "5-6","flag": ""},
                {"id": "3","fanwei": "7+","flag": ""}
              ]
            },
            {"id": "3","tiaojianxiang": "连续赢盘",
              "tiaojianzhi": [
                {"id": "1","fanwei": "3-4","flag": "true"},
                {"id": "2","fanwei": "5-6","flag": ""},
                {"id": "3","fanwei": "7+","flag": ""}
              ]
            },
            {"id": "4","tiaojianxiang": "连续输盘",
              "tiaojianzhi": [
                {"id": "1","fanwei": "3-4","flag": "true"},
                {"id": "2","fanwei": "5-6","flag": ""},
                {"id": "3","fanwei": "7+","flag": ""}
              ]
            },
            {"id": "5","tiaojianxiang": "连续大球",
              "tiaojianzhi": [
                {"id": "1","fanwei": "3-4","flag": "true"},
                {"id": "2","fanwei": "5-6","flag": ""},
                {"id": "3","fanwei": "7+","flag": ""}
              ]
            },
            {"id": "6","tiaojianxiang": "连胜小球",
              "tiaojianzhi": [
                {"id": "1","fanwei": "3-4","flag": "true"},
                {"id": "2","fanwei": "5-6","flag": ""},
                {"id": "3","fanwei": "7+","flag": ""}
              ]
            },
            {"id": "7","tiaojianxiang": "近20场赢盘率",
              "tiaojianzhi": [
                {"id": "1","fanwei": "60-69","flag": "true"},
                {"id": "2","fanwei": "70-79","flag": ""},
                {"id": "3","fanwei": "80+","flag": ""}
              ]
            },
            {"id": "8","tiaojianxiang": "近20场输盘率",
              "tiaojianzhi": [
                {"id": "1","fanwei": "60-69","flag": "true"},
                {"id": "2","fanwei": "70-79","flag": ""},
                {"id": "3","fanwei": "80+","flag": ""}
              ]
            },
            {"id": "9","tiaojianxiang": "近20场大球率",
              "tiaojianzhi": [
                {"id": "1","fanwei": "60-69","flag": "true"},
                {"id": "2","fanwei": "70-79","flag": ""},
                {"id": "3","fanwei": "80+","flag": ""}
              ]
            },
            {"id": "10","tiaojianxiang": "近20场小球率",
              "tiaojianzhi": [
                {"id": "1","fanwei": "60-69","flag": "true"},
                {"id": "2","fanwei": "70-79","flag": ""},
                {"id": "3","fanwei": "80+","flag": ""}
              ]
            }
          ]
        }
    },
    created: function(){
        this.queren();
    },
    methods: {
      dianji(x,y){
        var s = 0;
        for (var z = 0; z < this.tiaojian[x].tiaojianzhi.length; z++) {
          if (this.tiaojian[x].tiaojianzhi[z].flag == 'true') {
            s++;
          }
        }
        for(var i=0; i<this.tiaojian.length; i++){
          for(var j=0; j<this.tiaojian[i].tiaojianzhi.length; j++){
            if(s=>1){
              if(i===x && j===y){
                if(this.tiaojian[i].tiaojianzhi[j].flag == 'true'){
                  s--;
                  if(s<1){
                    alert('必须有一个选中');
                    return;
                  }
                  this.tiaojian[i].tiaojianzhi[j].flag = '';
                }else{
                  this.tiaojian[i].tiaojianzhi[j].flag = 'true';
                }
              }
            }
          }
        }
      },
      queren(){
        this.bt = true;
        var xuanxiangbiao = [];
        for(var i=0; i<this.tiaojian.length; i++){
          for(var j=0; j<this.tiaojian[i].tiaojianzhi.length; j++) {
            if(this.tiaojian[i].tiaojianzhi[j].flag == 'true'){
              var q = i+'-'+j;
              xuanxiangbiao.push(q);
            }
          }
        }
        alert(xuanxiangbiao);
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

.qiangduiul{
}
.qiangduili{
  display:flex;
  justify-content: space-between;
  font-size: 0.26rem;
  padding: 0 0.2rem;
  line-height:0.84rem;
}
.qiangduili p{
  /*
    组件化注意这个宽度要确定
    强队width要固定，数据宽度要自适应。
  */
  line-height:0.84rem;
  width: 1.9rem;
  text-align:left;
  padding-left:0.05rem;
  font-size: 0.26rem;
}
.qiangduili span{
  margin-top:0.1rem;
  width: 1.65rem;
  height:0.65rem;
  line-height:0.65rem;
  text-align:center;
  border: 1px solid #ccc;
  font-size:0.26rem;
}
/*
ul{
  width:100%;
}
li:nth-of-type(4n-3){
  border: none;
  background:none;
}
li{
  font-size:0.26rem;
  width:23%;
  float:left;
  height:0.65rem;
  line-height:0.65rem;
  text-align:center;
  border:1px solid #ccc;
  margin:0.8%;
  background: #fff;
}
*/

.qiangduibottom{
  position:absolute;
  bottom: 0;
  width:100%;
  height: 0.87rem;
  background: #472E93;
}
.left{
  color:#E4E2E6;
  font-size:0.24rem;
  position:absolute;
  left:0.1rem;
  margin-top:0.1rem;
}
.left span{
  color: #DDC120;
}
.right{
  position:absolute;
  right:0.2rem;
}
.right button{
  height: 0.6rem;
  width: 1.56rem;
  line-height: 0.6rem;
  margin-top: 0.14rem;
  font-size: 0.29rem;
  color: #979E95;
  background: #fff;
}
</style>
