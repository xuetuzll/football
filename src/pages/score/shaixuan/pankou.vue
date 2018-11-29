<template>
  <div>
    <top :biaoti="title" :show="bt" @queren-click="queren"></top>

    <div class="pankounav">让球：</div>

    <!--功能:点完其中一项之后，不能点击另一项，直到当前所在项，不为选中状态才能点击-->
    <!--全选全不选针对这个功能设计，只全选全不选当前项-->

    <ul class="clear">
      <li v-for="(item,index) in rangqiu" :class="{ active: item.flag }" @click="rangqiubar(index)">{{ item.rangqiuxiang }}<span>({{ item.rangqiushu }})</span></li>
    </ul>

    <div class="pankounav">大小：</div>

    <ul class="clear">
      <li v-for="(item,index) in daxiao" :class="{ active: item.flag }" @click="daxiaobar(index)">{{ item.daxiaoxiang }}<span>({{ item.daxiaoshu }})</span></li>
    </ul>

    <div class="qiangduibottom">
        <div class="left">
            符合条件&nbsp<span>4</span>&nbsp场</br>让球/大小可多选或混选
        </div>
        <div class="right">
            <button @click="quanxuannew">全选</button>
            <button @click="quanbuxuannew">全不选</button>
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
              "title": "盘口筛选",
              "rangqiu": [
                {"id": "1","rangqiuxiang": "受两球半","rangqiushu": "1","flag": ""},
                {"id": "2","rangqiuxiang": "受两球/两球半","rangqiushu": "1","flag": ""},
                {"id": "3","rangqiuxiang": "受球半","rangqiushu": "2","flag": ""},
                {"id": "4","rangqiuxiang": "受一球/球半","rangqiushu": "2","flag": ""},
                {"id": "5","rangqiuxiang": "受半球/一球","rangqiushu": "5","flag": ""},
                {"id": "6","rangqiuxiang": "受半球","rangqiushu": "2","flag": ""},
                {"id": "7","rangqiuxiang": "受平手/半球","rangqiushu": "9","flag": ""},
                {"id": "8","rangqiuxiang": "平手","rangqiushu": "16","flag": ""},
                {"id": "9","rangqiuxiang": "平手/半球","rangqiushu": "16","flag": ""},
                {"id": "10","rangqiuxiang": "半球","rangqiushu": "19","flag": ""},
                {"id": "11","rangqiuxiang": "半球/一球","rangqiushu": "12","flag": ""},
                {"id": "12","rangqiuxiang": "一球","rangqiushu": "8","flag": ""},
                {"id": "13","rangqiuxiang": "一球/球半","rangqiushu": "7","flag": ""},
                {"id": "14","rangqiuxiang": "球半","rangqiushu": "2","flag": ""},
                {"id": "15","rangqiuxiang": "球半/两球","rangqiushu": "2","flag": ""},
                {"id": "16","rangqiuxiang": "两球/两球半","rangqiushu": "1","flag": ""},
                {"id": "17","rangqiuxiang": "两球半/三球","rangqiushu": "1","flag": ""},
                {"id": "18","rangqiuxiang": "未开盘","rangqiushu": "86","flag": ""}
              ],
              "daxiao": [
                {"id": "1","daxiaoxiang": "2","daxiaoshu": "1","flag": ""},
                {"id": "2","daxiaoxiang": "2/2.5","daxiaoshu": "1","flag": ""},
                {"id": "3","daxiaoxiang": "2.5","daxiaoshu": "1","flag": ""},
                {"id": "4","daxiaoxiang": "2.5/3","daxiaoshu": "1","flag": ""},
                {"id": "5","daxiaoxiang": "3","daxiaoshu": "1","flag": ""},
                {"id": "6","daxiaoxiang": "3/3.5","daxiaoshu": "2","flag": ""},
                {"id": "7","daxiaoxiang": "3.5","daxiaoshu": "9","flag": ""},
                {"id": "8","daxiaoxiang": "3.5/4","daxiaoshu": "16","flag": ""},
                {"id": "9","daxiaoxiang": "未开盘","daxiaoshu": "16","flag": ""}
              ],
              "code": "0"
            }
        },
        created: function(){
            this.queren();
        },
        methods: {
          //点击的时候判断是否开关打开，开关关上
          //这样直接给他传哪个开关打开的，用状态码
          //一开始点击的时候判断状态码，之后根据状态码确定能否点击，如果当前所有的flag都为空，更新状态码
          rangqiubar(index){
            var k1 = '';
            var k2 = '';
            var flag = ''
            switch(parseInt(this.code)){
              case 0: k1 = true;k2 = true;break;
              case 1: k1 = true;break;
              case 2: k2 = true;break;
            }
            if(!k1)return;
            for(var i=0; i<this.rangqiu.length; i++){
              for(var j=0; j<this.rangqiu.length; j++){
                if(this.rangqiu[j].flag == 'true'){
                  this.code = 1;
                }
              }
              if (i === index) {
                if (this.rangqiu[index].flag == 'true') {
                  flag = '';
                  for(var j=0; j<this.rangqiu.length; j++){
                    if(this.rangqiu[j].flag != 'true'){
                      this.code = 0;
                    }
                  }
                } else {
                  flag = 'true';
                }
                this.rangqiu[index].flag = flag;
              }
            }
          },
          daxiaobar(index){
            var k1 = '';
            var k2 = '';
            var flag = ''
            switch(parseInt(this.code)){
              case 0: k1 = true;k2 = true;break;
              case 1: k1 = true;break;
              case 2: k2 = true;break;
            }
            if(!k2)return;
            for(var i=0; i<this.daxiao.length; i++){
              for(var j=0; j<this.daxiao.length; j++){
                if(this.daxiao[j].flag == 'true'){
                  this.code = 2;
                }
              }
              if (i === index) {
                if (this.daxiao[index].flag == 'true') {
                  flag = '';
                  for(var j=0; j<this.daxiao.length; j++){
                    if(this.daxiao[j].flag != 'true'){
                      this.code = 0;
                    }
                  }
                } else {
                  flag = 'true';
                }
                this.daxiao[index].flag = flag;
              }
            }
          },
          quanxuannew(){
            switch(parseInt(this.code)){
              case 0: alert('请选择让球或大小其中一项');break;
              case 1:
                for(var i=0; i<this.rangqiu.length; i++){
                  this.rangqiu[i].flag = 'true';
                }
                this.code = 1;
                break;
              case 2:
                for(var i=0; i<this.daxiao.length; i++){
                  this.daxiao[i].flag = 'true';
                }
                this.code = 2;
                break;
            }
          },
          quanbuxuannew(){
            switch(parseInt(this.code)){
              case 0: alert('您还没有选择其中一项');break;
              case 1:
                for(var i=0; i<this.rangqiu.length; i++){
                  this.rangqiu[i].flag = '';
                }
                this.code = 0;
                break;
              case 2:
                for(var i=0; i<this.daxiao.length; i++){
                  this.daxiao[i].flag = '';
                }
                this.code = 0;
                break;
            }
          },
          queren(){
            this.bt = true;
            switch(parseInt(this.code)){
              case 0: alert('您还没选择需要确认的项目');break;
              case 1:
                var xuanxiangbiao = [];
                for(var i=0; i<this.rangqiu.length; i++){
                  if(this.rangqiu[i].flag == 'true'){
                    xuanxiangbiao.push(1+'-'+i);
                  }
                }
                alert(xuanxiangbiao);
                break;
              case 2:
                var xuanxiangbiao = [];
                for(var i=0; i<this.daxiao.length; i++){
                  if(this.daxiao[i].flag == 'true'){
                    xuanxiangbiao.push(2+'-'+i);
                  }
                }
                alert(xuanxiangbiao);
                break;
            }
          }
        },
        components: {
          top
        }
    }
</script>

<style scoped>
body{
  background:#ccc;
}

.active{
  background: #FBE39B;
  color: #B6531A;

}

.pankounav{
    background: #cdcdcd;
    width:100%;
    height:0.69rem;
    font-size:0.26rem;
    text-align: left;
    padding: 0.16rem;
}

ul{
    margin: 0.06rem;
    height:5.4rem;
}
ul:last-of-type{
    height:2.8rem;
}
li{
    text-align: center;
    float: left;
    width: 32.2%;
    height:0.78rem;
    margin: 0.04rem;
    line-height:0.78rem;
    font-size:0.2rem;
    background: #fff;
}
.clear{
    display:block;
    content:'';
    clear:both;
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
