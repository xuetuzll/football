<template>
<div class="content-wrap">
    <top :biaoti="title" :show="bt" @queren-click="queren"></top>

    <ul>
        <li v-for="(item,index) in saishi" :class="{ active: item.flag }" @click="dianji(index)">{{ item.saiming }}</li>
    </ul>

    <ul class="saishinav">
        <li v-for="(item,index) in saishinav" :class="{ active: item.flag }" @click="liebiao(index)">{{ item.saiming}}</li>
    </ul>

    <div class="qiangduibottom">
      <div class="left">
        隐藏<span>123</span>
      </div>
      <div class="right">
        <button>精简</button>
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
                "title": "赛事筛选",
                "saishi": [
                    {"id":"1","saiming": "西甲","flag": "true"},
                    {"id":"2","saiming": "德甲","flag": "true"},
                    {"id":"3","saiming": "意甲","flag": ""},
                    {"id":"4","saiming": "法甲","flag": ""},
                    {"id":"5","saiming": "西甲","flag": "true"},
                    {"id":"6","saiming": "德甲","flag": "true"},
                    {"id":"7","saiming": "意甲","flag": ""},
                    {"id":"8","saiming": "法甲","flag": ""},
                    {"id":"9","saiming": "西甲","flag": "true"},
                    {"id":"10","saiming": "德甲","flag": "true"},
                    {"id":"11","saiming": "意甲","flag": ""},
                    {"id":"12","saiming": "法甲","flag": ""},
                    {"id":"13","saiming": "西甲","flag": "true"},
                ],
                "saishinav": [
                    {"saiming": "足球","flag": "true"},
                    {"saiming": "国家","flag": ""},
                    {"saiming": "足彩","flag": ""},
                    {"saiming": "竞猜","flag": ""},
                    {"saiming": "北单","flag": ""}
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
              for(var i=0; i<this.saishi.length; i++){
                if(this.saishi[i].flag == 'true'){
                  s++;
                }
              }
              for(var i=0; i<this.saishi.length; i++){
                if(s>=0) {
                  if (i === index) {
                    if (this.saishi[index].flag == 'true') {
                      s--;
                      if(s<1){
                        alert("必须有一个选中");
                        return;
                      }
                      flag = '';
                    } else {
                      flag = 'true';
                    }
                    this.saishi[index].flag = flag;
                  }
                }
              }
            },
            liebiao(index){
                for(var j=0; j<this.saishinav.length; j++){
                    this.saishinav[j].flag = '';
                }
                for(var i=0; i<this.saishinav.length; i++){
                    if(i===index){
                        this.saishinav[i].flag = 'true';
                    }
                }
            },
            queren() {
                this.bt = true;
                var id = [];
                for(var i=0;i<this.saishi.length;i++){
                    if(this.saishi[i].flag == 'true'){
                        id.push(this.saishi[i].id);
                    }
                }
                alert(id);
            },
            quanxuan(){
                for(var i=0; i<this.saishi.length; i++){
                    this.saishi[i].flag = 'true';
                }
            },
            quanbuxuan(){
                for(var i=0; i<this.saishi.length; i++){
                    this.saishi[i].flag = '';
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
.content-wrap .saishinav{
  margin:0;
  position:absolute;
  left:0;
  bottom: 0.87rem;
  width:100%;
  background: #ECEDFF;
}
.content-wrap .saishinav .active{
  color: #FF791B;
  width: 15%;
  margin:0 2.5%;
  border-bottom: 0.1rem solid #FF791B;
}
.content-wrap .saishinav li{
  margin:0;
  float:left;
  display: block;
  width: 20%;
  line-height: 0.7rem;
  height:0.7rem;
  text-align: center;
  font-size: 0.25rem;
  border:none;
  background: #ECEDFF;
}

.qiangduibottom{
  position:absolute;
  bottom: 0;
  width:100%;
  height: 0.87rem;
  background: #472E93;
}
.left{
  color:#E4E2E6;
  font-size:0.29rem;
  position:absolute;
  left:0.3rem;
  line-height:0.87rem;
  display:inline-block;
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
