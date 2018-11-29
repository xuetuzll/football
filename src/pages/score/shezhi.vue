<template>
  <div>
    <top :biaoti="title" :show="bt"></top>

    <div class="nav-bar"></div>

    <ul class="shezhi">
      <li v-for="(item,x) in shezhili" :class="[item.code==='3'? 'nav-bar-li-dou':'nav-bar-li']">

        <label class="left">{{ item.shezhiming }}</label>
        <!--
          1.v-if判断
          2.第二层v-for循环遍历
          code 1:使用多选框 绑定事件区分开
          code 2:切换按钮
          code 3:多选加切换

          推送我关注的意义是，为了把多选框的值传导到服务器上。
          

          code 4:单选框 绑定事件区分开   1
          code 5:弹出框
          code 6:滑动组件
          iconfont icon-xuanzhong
        -->

        <div class="right" v-if="item.code == 1">
          <p v-for="(item,y) in item.xuanxiang" @click="dianji(x,y)"><i :class="[item.flag===true?'iconfont icon-xuanzhong':'iconfont icon-icon-test']"></i><span>{{ item.name }}</span></p>
        </div>

        <mt-switch v-if="item.code == 2" v-model="item.value" @change="qiehuan(x)"></mt-switch>

        <div class="double" v-if="item.code == 3">
          <mt-switch v-model="item.value" @change="qiehuan(x)"></mt-switch>
          
          <div class="fenceng">
            <div v-for="(item,y) in item.xuanxiang" @click="dianji(x,y)" class="nav-bar-wrap"><i :class="[item.flag===true?'iconfont icon-xuanzhong':'iconfont icon-icon-test']"></i><span>{{ item.name }}</span></div>
          </div>

        </div>

        <div class="right-button" v-if="item.code == 5">
          <div v-for="(item,y) in item.people" class="right-b-l">
            <span>{{ item.ren }}</span>
            <div class="bck" @click="tanchuc(y)">
              <span>{{ item.options | flagTrue }}</span>
              <span></span>
              <span></span>
            </div>
          </div>         
        </div>

        <div class="right" v-if="item.code == 6">
          <mt-range v-model="start" :value="start" :step="1" :min="min" :max="max"></mt-range>
          <span class="pinlv">{{ start }}秒</span>
        </div>

      </li>

      
    </ul>
    
    <div class="nav-bar"></div>
    <div class="nav-bar"></div>
    
    <mt-popup v-model="tanchu">
      <mt-radio
        title="声音设置"
        align="right"
        v-model="value"
        :options="this.shezhili[2].people[this.blog].options"
        @change="check">
      </mt-radio>
    </mt-popup>
      

  </div>
</template>

<script>
  import top from './../../components/top'
  export default {
    data () {
      return {
        bt: false,
        tanchu: false,
        value: '1',
        blog: 0,
        start: 5,
        max: 30,
        min: 5,
        step: 1,
        "title": "足球比分设置",
        "shezhili": [
          {"id": "1", "shezhiming": "进球提示","code": "1","xuanxiang": [
              {"id":"1","name":"声音",flag: true},
              {"id":"2","name":"振动",flag: false},
              {"id":"3","name":"弹窗",flag: false}
            ]
          },
          {"id": "2", "shezhiming": "红牌显示","code": "1","xuanxiang": [
              {"id":"1","name":"声音",flag: false},
              {"id":"2","name":"振动",flag: false},
              {"id":"3","name":"弹窗",flag: false}
            ]
          },
          {"id": "3", "shezhiming": "进球声音","code": "5","people": [
              {"id":"1","ren":"主",options: [
                  {label:'默认',value: '1',flag: false},
                  {label:'贝司',value: '2',flag: true},
                  {label:'嘟嘟',value: '3',flag: false}
                ]
              },
              {"id":"2","ren":"客",options: [
                  {label:'默认',value: '1',flag: true},
                  {label:'贝司',value: '2',flag: false},
                  {label:'嘟嘟',value: '3',flag: false}
                ]
              }
            ]
          },
          {"id": "4", "shezhiming": "数据显示","code": "1","xuanxiang": [
              {"id":"1","name":"让球","flag":true},
              {"id":"2","name":"大小","flag":true},
              {"id":"3","name":"欧赔","flag":true}
            ]  
          },
          {"id": "5", "shezhiming": "仅提示我关注的","code": "2","value":true},
          {"id": "6", "shezhiming": "置顶功能","code": "2","value":true},
          {"id": "7", "shezhiming": "按时间排序","code": "2","value":true},
          {"id": "8", "shezhiming": "按联赛排序","code": "2","value":false},
          {"id": "9", "shezhiming": "黄牌提示","code": "2","value":false},
          {"id": "10", "shezhiming": "排名显示","code": "2","value":false},
          {"id": "11", "shezhiming": "推送我关注的","value":true,"code": "3","xuanxiang": [
              {"id":"1","name":"赛前","flag":true},
              {"id":"2","name":"进球","flag":false},
              {"id":"3","name":"半/完场","flag":false},
              {"id":"4","name":"红牌","flag":false}
            ]
          },
          {"id": "12", "shezhiming": "数据刷新时间","code": "6"},
          {"id": "13", "shezhiming": "语言","code": "1","xuanxiang": [
              {"id":"1","name":"简体","flag":true},
              {"id":"2","name":"繁体","flag":false},
              {"id":"3","name":"Crown","flag":false}
            ]
          },
          {"id": "14", "shezhiming": "夜间模式","code": "2","value":false},
          {"id": "15", "shezhiming": "全屏显示","code": "2","value":false},
          {"id": "16", "shezhiming": "自动锁屏","code": "2","value":false},
          {"id": "17", "shezhiming": "关于广告","code": "0"}
        ]
      }
    },
    filters: {
      flagTrue: function(myInput){
        for(var i=0; i<myInput.length; i++){
          if(myInput[i].flag===true){
            return myInput[i].label;
          }
        }
      }
    },
    methods: {
      dianji(x,y){
        var z=0;
        var t=0;
        for(var i=0; i<this.shezhili.length; i++){
          if(i==x){
            z=this.shezhili[i].code;
          }
        }
        for(var i=0; i<this.shezhili[3].xuanxiang.length; i++){
          if(this.shezhili[3].xuanxiang[i].flag){
            t++;
          }         
        }
        for(var i=0; i<this.shezhili.length; i++){
          if(this.shezhili[i].code==z){
            for(var j=0; j<this.shezhili[i].xuanxiang.length; j++){
              var s = this.shezhili[i].xuanxiang[j].flag;
              if(i===x && j===y){
                if(x==3&&t<=2&&s){
                  alert('至少选择两项');
                  return;
                }
                if(x==12){
                  if(s){
                    alert('必须有一个被选中');
                    return;
                  }
                  for(var m=0; m<this.shezhili[i].xuanxiang.length; m++){
                    this.shezhili[i].xuanxiang[m].flag = false;
                  }
                }
                if(s == true){
                  s = false;
                  alert(x+'-'+y+'-'+s);
                }else{
                  s = true;
                  alert(x+'-'+y+'-'+s);
                }
              }
              this.shezhili[i].xuanxiang[j].flag=s;
            }
          }
        }
      },
      qiehuan(x){
        if(x==6){
          if(this.shezhili[6].value){
            this.shezhili[7].value = false;
            alert(x+1+'-'+this.shezhili[7].value);
          }else{
            this.shezhili[7].value = true;
            alert(x+1+'-'+this.shezhili[7].value);
          }
        }
        if(x==7){
          if(this.shezhili[7].value){
            this.shezhili[6].value = false;
            alert(x-1+'-'+this.shezhili[6].value);
          }else{
            this.shezhili[6].value = true;
            alert(x-1+'-'+this.shezhili[6].value);
          }
        }
        if(x==10){
          var car = [];
          for(var j=0; j<this.shezhili[10].xuanxiang.length; j++){
            if(this.shezhili[10].xuanxiang[j].flag){
              car.push(x+'-'+j+'-'+this.shezhili[10].xuanxiang[j].flag);
            }
          }
          if(this.shezhili[10].value){
            alert(car);
          }
        }else{
          if(this.shezhili[x].value){
            alert(x+'-'+this.shezhili[x].value);
          }else{
            alert(x+'-'+this.shezhili[x].value);
          }
        }
      },
      tanchuc(y){
        
        this.blog = y;
        // this.$emit('tanchuc', this.blog);
        this.tanchu = !this.tanchu;
      },
      check(){

        // this.$once('tanchuc',function(y){
        //   if(y===0){
            
        //   }else{
        //     // for(var i=0;i<this.shezhili[2].people[y].options.length;i++){
        //     //   if(this.shezhili[2].people[y].options[i].value == val){
        //     //     this.shezhili[2].people[1].options[i].value = val;
        //     //   }
        //     // }
        //   }
        // })

        this.tanchu = !this.tanchu;
      }
    },
    watch: {
      /*
        用mint-ui单选框有两个问题
        1.当前选中的不能选择问题
        2.多个单选框v-model只能绑定一个的问题
      */

      value(val){
        alert(2+'-'+this.blog+'-'+val);
        for(var i=0;i<this.shezhili[2].people[this.blog].options.length;i++){
          this.shezhili[2].people[this.blog].options[i].flag = false;
          if(this.shezhili[2].people[this.blog].options[i].value === val){
            this.shezhili[2].people[this.blog].options[i].value = val;
            this.shezhili[2].people[this.blog].options[i].flag = true;
          }
        }
        
      }
    },
    components: {
      top
    }
  }
</script>

<style>
body{
  background:#fff;
}

.active{
  background: #d9d9d9;
}

.nav-bar{
  width:100%;
  height:0.29rem;
  background:#EAEAEA;
}
nav-bar-li-dou{
  display:flex;
  flex-direction:column;
  height:1.44rem;
  line-height:0.72rem;
  width:100%;
  border-bottom:1px solid #ccc;
}
.nav-bar-li-dou .left{
  display:block;
  font-size:0.26rem;
  padding-left:0.24rem;
  line-height:0.72rem;
  height:0.72rem;
  color:#414141;
  width:100%;
  border-bottom:1px solid #ccc;
}
.double{
  position:relative;
}
.nav-bar-li{
  display:flex;
  position:relative;
  height:0.72rem;
  line-height:0.72rem;
  width:100%;
  border-bottom:1px solid #ccc;
}
.nav-bar-li .left{
  font-size:0.26rem;
  padding-left:0.24rem;
  color:#414141;
  width:30%;
}
.nav-bar-li .right{
  font-size:0.26rem;
  display:flex;
  width:70%;
}
.nav-bar-li .right p{
  display:inline-block;
}
.nav-bar-li .right p span{
  padding-left:0.1rem;
}
.nav-bar-li .right p i{
  font-size:0.26rem;
}
.nav-bar-li .right p:nth-of-type(2){
  position:absolute;
  right:2.2rem;
}
.nav-bar-li .right p:last-of-type{
  position:absolute;
  right:0.2rem;
}

.right-button{
  position:relative;
  font-size:0.26rem;
  display:flex;
  width:70%;
  line-height:0.5rem;
  padding-top:0.1rem;
}

.right-b-l{
  flex:1;
  position:absolute;
  top:0.11rem;
}
.right-b-l:last-child{
  right:0.16rem;
}
.bck{
  display:inline-block;
  width:1.8rem;
  height:0.52rem;
  line-height:0.5rem;
  border:1px solid #989797;
  border-radius: 5px;
  font-size:0.26rem;
  position:relative;
  padding-left: 0.4rem;
}
.bck span:nth-of-type(2){
  width:30%;
  height:0.48rem;
  display:block;
  background:#C5C6C6;
  position:absolute;
  right:0;
  top:0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.bck span:nth-of-type(3){
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 0.1rem solid transparent;
  border-right: 0.1rem solid transparent;
  border-top: 0.12rem solid #000;
  position:absolute;
  right:0.16rem;
  top:0.2rem;
}

.fenceng{
  width:100%;
  font-size:0.26rem;
  display:flex;
  height:0.72rem;
  line-height:0.72rem;
  border-bottom:1px solid #ccc;
}

.shezhi .nav-bar-li-dou .nav-bar-wrap{
  width:25%;
  padding-left:7%;
  height:0.72rem;
  line-height:0.72rem;
}
.icon-xuanzhong{
  color:orange;
}

</style>
