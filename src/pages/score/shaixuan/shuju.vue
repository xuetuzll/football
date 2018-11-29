<template>
  <div>
    <top :biaoti="title" :show="bt" @queren-click="queren"></top>

    <ul class="qiangduiul">
        <li v-for="(item,x) in tuijian" class="qiangduili">
          <p>{{ item.tuijianming }}</p>
          <span v-for="(item,y) in item.tuijianji" @click="dianji(x,y)" :class="{ active: item.flag }">{{ item.dengji }}</span>
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
              "title": '数据筛选',
              "tuijian": [
                {"id": "1","tuijianming": "亚盘推荐",
                  "tuijianji": [
                    {"id": "1","dengji": "5级(10)","flag": "true"},
                    {"id": "2","dengji": "4级(10)","flag": ""},
                    {"id": "3","dengji": "3级(10)","flag": ""},
                    {"id": "4","dengji": "2级(10)","flag": ""},
                    {"id": "5","dengji": "1级(10)","flag": ""}
                  ]
                },
                {"id": "2","tuijianming": "欧盘推荐",
                  "tuijianji": [
                    {"id": "1","dengji": "5级(10)","flag": "true"},
                    {"id": "2","dengji": "4级(10)","flag": ""},
                    {"id": "3","dengji": "3级(10)","flag": ""},
                    {"id": "4","dengji": "2级(10)","flag": ""},
                    {"id": "5","dengji": "1级(10)","flag": ""}
                  ]
                },
                {"id": "3","tuijianming": "大小推荐",
                  "tuijianji": [
                    {"id": "1","dengji": "5级(10)","flag": "true"},
                    {"id": "2","dengji": "4级(10)","flag": ""},
                    {"id": "3","dengji": "3级(10)","flag": ""},
                    {"id": "4","dengji": "2级(10)","flag": ""},
                    {"id": "5","dengji": "1级(10)","flag": ""}
                  ]
                },
                {"id": "4","tuijianming": "角球推荐",
                  "tuijianji": [
                    {"id": "1","dengji": "5级(10)","flag": "true"},
                    {"id": "2","dengji": "4级(10)","flag": ""},
                    {"id": "3","dengji": "3级(10)","flag": ""},
                    {"id": "4","dengji": "2级(10)","flag": ""},
                    {"id": "5","dengji": "1级(10)","flag": ""}
                  ]
                },
                {"id": "5","tuijianming": "射门推荐",
                  "tuijianji": [
                    {"id": "1","dengji": "5级(10)","flag": "true"},
                    {"id": "2","dengji": "4级(10)","flag": ""},
                    {"id": "3","dengji": "3级(10)","flag": ""},
                    {"id": "4","dengji": "2级(10)","flag": ""},
                    {"id": "5","dengji": "1级(10)","flag": ""}
                  ]
                },
                {"id": "6","tuijianming": "进攻数据",
                  "tuijianji": [
                    {"id": "1","dengji": "5级(10)","flag": "true"},
                    {"id": "2","dengji": "4级(10)","flag": ""},
                    {"id": "3","dengji": "3级(10)","flag": ""},
                    {"id": "4","dengji": "2级(10)","flag": ""},
                    {"id": "5","dengji": "1级(10)","flag": ""}
                  ]
                },
                {"id": "7","tuijianming": "控球数据",
                  "tuijianji": [
                    {"id": "1","dengji": "5级(10)","flag": "true"},
                    {"id": "2","dengji": "4级(10)","flag": ""},
                    {"id": "3","dengji": "3级(10)","flag": ""},
                    {"id": "4","dengji": "2级(10)","flag": ""},
                    {"id": "5","dengji": "1级(10)","flag": ""}
                  ]
                }
              ],
              "shuoming": "1.亚盘推荐：按过往盘路，现场数据等经人工智能分析的结果<br>2.欧盘推荐：按过往赛果，现场数据等经人工智能分析的结果<br>3.大小推荐：按过往同比分下进球情况，现场数据等经人工智能的结果<br>4.射门数据：推荐射门比（主/客）净值大于1倍或射门10次以上未进球的比赛<br>5.进球数量：推荐进攻比（主/客）净值大于1倍或射门10次以上未进球的比赛<br>6.控球数据：推荐控球率大于60%的比赛<br><br>注：数据级数越高推荐度越高，仅供参考"
            }
        },
        created: function(){
            this.queren();
        },
        methods: {
          /*
            写法一：每次点精简的时候刷新页面，这样子的data是从服务端获取的，这样能记录用户曾经点击过的记录，
            写法二，每次点击前，拷贝一份数据，改其中一份数据，另一份数据不变，点击提交的时候把改的数据提交上去，同时更新另一份数据。用户退出后删除缓存。
            问题来了，这边点击的事件是，每次点击都修改数据，但是还没提交。
            这样子可以考虑，每次点击精简，重新从服务器上请求数据。
            这样子点完确认之后就保存数据到数据库，记录了用户的数据。
            最终写法：有一个后台数据库，精简的作用是实现请求数据，全选的目的是前端实现所有的页面active类名，确认的目的是提交数据
            程序上的写法，页面第一次请求数据进行渲染，每一个功能单一。
            这边没有连数据库，请求的数据在前端就进行更改了，所以没有实现这一块的功能。
          */
          dianji(x,y){
            var s = 0;
            for (var z = 0; z < this.tuijian[x].tuijianji.length; z++) {
              if (this.tuijian[x].tuijianji[z].flag == 'true') {
                s++;
              }
            }
            for(var i=0; i<this.tuijian.length; i++){
              for(var j=0; j<this.tuijian[i].tuijianji.length; j++){
                if(s=>1){
                  if(i===x && j===y){
                    if(this.tuijian[i].tuijianji[j].flag == 'true'){
                      s--;
                      if(s<1){
                        alert('必须有一个选中');
                        return;
                      }
                      this.tuijian[i].tuijianji[j].flag = '';
                    }else{
                      this.tuijian[i].tuijianji[j].flag = 'true';
                    }
                  }
                }
              }
            }
          },
          quanxuan(){
            for(var i=0; i<this.tuijian.length; i++){
              for(var j=0; j<this.tuijian[i].tuijianji.length; j++) {
                this.tuijian[i].tuijianji[j].flag = 'true'
              }
            }
          },
          queren(){
            this.bt = true;
            var xuanxiangbiao = [];
            for(var i=0; i<this.tuijian.length; i++){
              for(var j=0; j<this.tuijian[i].tuijianji.length; j++) {
                if(this.tuijian[i].tuijianji[j].flag == 'true'){
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
  font-size: 0.02rem;
  padding: 0 0.2rem;
  margin-top:0.18rem;
}
.qiangduili p{
  font-size: 0.28rem;
  text-align:left;
  padding-left:0.05rem;
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
