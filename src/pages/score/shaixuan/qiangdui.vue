<template>
  <div>
    <top :biaoti="title" :show="bt" @queren-click="queren"></top>

    
    <ul class="qiangduiul">
        <li v-for="(item,x) in qiangdui" class="qiangduili">
          <p>{{ item.xuanxiangming }}</p>
          <span v-for="(item,y) in item.xuanxiangzhi"
                @click="dianji(x,y)"
                :class="{ active: item.flag }">{{ item.xuanxiang }}</span>
        </li>
        <p class="shuoming" v-html="shuoming"></p>
    </ul>
    

    <div class="qiangduibottom">
        <div class="left">
            符合条件&nbsp<span>0</span>&nbsp场</br>以Crown赔率数据统计
        </div>
        <div class="right">
            <button>精简</button>
            <button @click="quanxuan">全部</button>
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
              "title": "强队筛选",
              "qiangdui": [
                {"id": "1","xuanxiangming": "让2球(或以上)",
                  "xuanxiangzhi": [
                    {"id": "1","xuanxiang": "-2(10)","flag": "true"},
                    {"id": "2","xuanxiang": "-1(10)","flag": ""},
                    {"id": "3","xuanxiang": "0(10)","flag": ""},
                    {"id": "4","xuanxiang": "+1(10)","flag": ""},
                    {"id": "5","xuanxiang": "+2(10)","flag": ""}
                  ]
                },
                {"id": "2","xuanxiangming": "让1。75球",
                  "xuanxiangzhi": [
                    {"xuanxiang": "-2(10)","flag": "true"},
                    {"xuanxiang": "-1(10)","flag": ""},
                    {"xuanxiang": "0(10)","flag": ""},
                    {"xuanxiang": "+1(10)","flag": ""},
                    {"xuanxiang": "+2(10)","flag": ""}
                  ]
                },
                {"id": "3","xuanxiangming": "让1.5球",
                  "xuanxiangzhi": [
                    {"xuanxiang": "-2(10)","flag": "true"},
                    {"xuanxiang": "-1(10)","flag": ""},
                    {"xuanxiang": "0(10)","flag": ""},
                    {"xuanxiang": "+1(10)","flag": ""},
                    {"xuanxiang": "+2(10)","flag": ""}
                  ]
                },
                {"id": "4","xuanxiangming": "让1.25球",
                  "xuanxiangzhi": [
                    {"xuanxiang": "-2(10)","flag": "true"},
                    {"xuanxiang": "-1(10)","flag": ""},
                    {"xuanxiang": "0(10)","flag": ""},
                    {"xuanxiang": "+1(10)","flag": ""},
                    {"xuanxiang": "+2(10)","flag": ""}
                  ]
                },
                {"id": "5","xuanxiangming": "让1球",
                  "xuanxiangzhi": [
                    {"xuanxiang": "-2(10)","flag": "true"},
                    {"xuanxiang": "-1(10)","flag": ""},
                    {"xuanxiang": "0(10)","flag": ""},
                    {"xuanxiang": "+1(10)","flag": ""},
                    {"xuanxiang": "+2(10)","flag": ""}
                  ]
                },
                {"id": "6","xuanxiangming": "让0.75球",
                  "xuanxiangzhi": [
                    {"xuanxiang": "-2(10)","flag": "true"},
                    {"xuanxiang": "-1(10)","flag": ""},
                    {"xuanxiang": "0(10)","flag": ""},
                    {"xuanxiang": "+1(10)","flag": ""},
                    {"xuanxiang": "+2(10)","flag": ""}
                  ]
                },
                {"id": "7","xuanxiangming": "让0.5球",
                  "xuanxiangzhi": [
                    {"xuanxiang": "-2(10)","flag": "true"},
                    {"xuanxiang": "-1(10)","flag": ""},
                    {"xuanxiang": "0(10)","flag": ""},
                    {"xuanxiang": "+1(10)","flag": ""},
                    {"xuanxiang": "+2(10)","flag": ""}
                  ]
                },
                {"id": "8","xuanxiangming": "射门比(1倍)",
                  "xuanxiangzhi": [
                    {"xuanxiang": "-2(10)","flag": "true"},
                    {"xuanxiang": "-1(10)","flag": ""},
                    {"xuanxiang": "0(10)","flag": ""},
                    {"xuanxiang": "+1(10)","flag": ""},
                    {"xuanxiang": "+2(10)","flag": ""}
                  ]
                },
                {"id": "9","xuanxiangming": "进攻比(1倍)",
                  "xuanxiangzhi": [
                    {"xuanxiang": "-2(10)","flag": "true"},
                    {"xuanxiang": "-1(10)","flag": ""},
                    {"xuanxiang": "0(10)","flag": ""},
                    {"xuanxiang": "+1(10)","flag": ""},
                    {"xuanxiang": "+2(10)","flag": ""}
                  ]
                },
                {"id": "10","xuanxiangming": "角球差(5个)",
                  "xuanxiangzhi": [
                    {"xuanxiang": "-2(10)","flag": "true"},
                    {"xuanxiang": "-1(10)","flag": ""},
                    {"xuanxiang": "0(10)","flag": ""},
                    {"xuanxiang": "+1(10)","flag": ""},
                    {"xuanxiang": "+2(10)","flag": ""}
                  ]
                },
                {"id": "11","xuanxiangming": "控球率(>60%)",
                  "xuanxiangzhi": [
                    {"xuanxiang": "-2(10)","flag": "true"},
                    {"xuanxiang": "-1(10)","flag": ""},
                    {"xuanxiang": "0(10)","flag": ""},
                    {"xuanxiang": "+1(10)","flag": ""},
                    {"xuanxiang": "+2(10)","flag": ""}
                  ]
                }
              ],
              "shuoming": "注:让球均为初盘"
            }
        },
        created: function(){
            this.queren();
        },
        methods: {
          dianji(x,y){
            /*做法1：不考虑全选，只做单选*/
            // var s = 0;
            // for(var i=0; i<this.qiangdui.length; i++){
            //   for(var j=0; j<this.qiangdui[i].xuanxiangzhi.length; j++){
            //     if(i===x && j===y){
            //       for(var z=0; z<this.qiangdui[i].xuanxiangzhi.length; z++){
            //         this.qiangdui[i].xuanxiangzhi[z].flag = '';
            //       }
            //       this.qiangdui[i].xuanxiangzhi[j].flag = true;
            //     }
            //   }
            // }

            /*做法2：考虑多选及全选*/
            var s = 0;
            for (var z = 0; z < this.qiangdui[x].xuanxiangzhi.length; z++) {
              if (this.qiangdui[x].xuanxiangzhi[z].flag == 'true') {
                s++;
              }
            }
            for(var i=0; i<this.qiangdui.length; i++){
              for(var j=0; j<this.qiangdui[i].xuanxiangzhi.length; j++){
                if(s=>1){
                  if(i===x && j===y){
                    if(this.qiangdui[i].xuanxiangzhi[j].flag == 'true'){
                      s--;
                      if(s<1){
                        alert('必须有一个选中');
                        return;
                      }
                      this.qiangdui[i].xuanxiangzhi[j].flag = '';
                    }else{
                      this.qiangdui[i].xuanxiangzhi[j].flag = 'true';
                    }
                  }
                }
              }
            }
          },
          quanxuan(){
            for(var i=0; i<this.qiangdui.length; i++){
              for(var j=0; j<this.qiangdui[i].xuanxiangzhi.length; j++) {
                this.qiangdui[i].xuanxiangzhi[j].flag = 'true'
              }
            }
          },
          queren(){
            this.bt = true;
            var xuanxiangbiao = [];
            for(var i=0; i<this.qiangdui.length; i++){
              for(var j=0; j<this.qiangdui[i].xuanxiangzhi.length; j++) {
                if(this.qiangdui[i].xuanxiangzhi[j].flag == 'true'){
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
    margin-top:0.57rem;
}
.qiangduili{
    display:flex;
    justify-content: space-between;
    font-size: 0.24rem;
    padding: 0 0.2rem;
    margin-top:0.18rem;
}
.qiangduili p{
    /*
      组件化注意这个宽度要确定
      强队width要固定，数据宽度要自适应。
    */
    width: 1.9rem;
    text-align:left;
    padding-left:0.05rem;
    font-size: 0.24rem;
}
.qiangduili span{
    width: 1rem;
    text-align:center;
    border: 1px solid #ccc;
    font-size:0.24rem;
}

.shuoming{
  margin-top:1.57rem;
  font-size:0.24rem;
  color: #888;
  padding:0.25rem;
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
