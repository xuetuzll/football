<template>
<div class="content-wrap">
    <top :biaoti="title" :show="bt" @queren-click="queren"></top>

    <ul>
        <li v-for="(item,index) in shujushaixuan" :class="{ active: item.flag }" @click="dianji(index)">{{ item.saiming }}</li>
    </ul>

    <ul class="saishinav">
        <li v-for="(item,index) in saishinav" :class="{ active: item.flag }" @click="liebiao(index)">{{ item.saiming}}</li>
    </ul>

    <div class="qiangduibottom">
      <div class="left">
        隐藏<span>123</span>
      </div>
      <div class="right">
        <button v-show="this.tag===0" @click="jingjian">精简</button>
        <button @click="quanxuan">全选</button>
        <button @click="quanbuxuan">全不选</button>
      </div>
    </div>

</div>

</template>

<script>
  import top from './../../../components/top'
    export default {
        name: "saishi",
        data() {
            return {
                "bt": false,//代表没有按钮          
                "title": "国家筛选",
                "tag": 0,
                "shujushaixuan": '',
                "saishi": [
                    {"id":"1","saiming": "英格兰","flag": "true","feilei":"1"},
                    {"id":"2","saiming": "丹麦","flag": "true","feilei":"2"},
                    {"id":"3","saiming": "爱尔兰","flag": "","feilei":"3"},
                    {"id":"4","saiming": "北爱尔兰","flag": "","feilei":"1"},
                    {"id":"5","saiming": "马耳他","flag": "true","feilei":"4"},
                    {"id":"6","saiming": "阿根廷","flag": "true","feilei":"2"},
                    {"id":"7","saiming": "巴西","flag": "","feilei":"3"},
                    {"id":"8","saiming": "乌拉圭","flag": "","feilei":"1"},
                    {"id":"9","saiming": "墨西哥","flag": "true","feilei":"1"},
                    {"id":"10","saiming": "以色列","flag": "true","feilei":"2"},
                    {"id":"11","saiming": "伊朗","flag": "","feilei":"3"},
                    {"id":"12","saiming": "阿拉伯","flag": "","feilei":"1"},
                    {"id":"13","saiming": "西乙","flag": "true","feilei":"1"},
                    {"id":"14","saiming": "巴西甲","flag": "","feilei":"1"},
                    {"id":"15","saiming": "英依超","flag": "true","feilei":"4"},
                    {"id":"16","saiming": "牙买超","flag": "true","feilei":"2"},
                    {"id":"17","saiming": "比千杯","flag": "","feilei":"3"},
                    {"id":"18","saiming": "乌千乙","flag": "","feilei":"1"},
                    {"id":"19","saiming": "沙滩足","flag": "true","feilei":"1"},
                    {"id":"20","saiming": "伊朗超","flag": "true","feilei":"2"},
                    {"id":"21","saiming": "阿尔甲","flag": "","feilei":"3"},
                    {"id":"22","saiming": "以丙","flag": "","feilei":"1"},
                    {"id":"23","saiming": "墨女超","flag": "true","feilei":"1"}
                ],
                "saishinav": [
                    {"saiming": "全部","flag": "true"},
                    {"saiming": "国家","flag": ""},
                    {"saiming": "赛事","flag": ""},
                    {"saiming": "足彩","flag": ""},
                    {"saiming": "竞彩","flag": ""}
                ]
            }
        },
        created: function(){
            console.log(this.$route);
            this.liebiao(this.tag);
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
                /*
                    根据index筛选分类数据
                */
                var liebiaoxiang = [];
                for(var i=0; i<this.saishi.length; i++){
                    if(parseInt(this.saishi[i].feilei)===index){
                        liebiaoxiang.push(this.saishi[i]);
                    }
                    if(parseInt(index)===0){
                        liebiaoxiang.push(this.saishi[i]);
                    }
                }
                this.shujushaixuan = liebiaoxiang;
                for(var j=0; j<this.saishinav.length; j++){
                    this.saishinav[j].flag = '';
                }
                for(var i=0; i<this.saishinav.length; i++){
                    if(i===index){
                        this.saishinav[i].flag = 'true';
                        this.tag = index;
                    }
                }
            },
            queren(){
                this.bt = true;//代表有按钮
                /*
                    请求数据
                */
                var id = [];
                for(var i=0;i<this.saishi.length;i++){
                    if(this.saishi[i].flag == 'true'){
                        id.push(this.saishi[i].id);
                    }
                }
                /*
                    通过路由进来的不进行判断
                    在beforeCreate的时候记录路由
                    在created的时候判断路由是否改变,不行
                                     
                */
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
            },
            jingjian(){
                this.shujushaixuan = this.saishi;
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
