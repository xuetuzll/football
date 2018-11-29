<template>
    <!--
      头部的思路：
      a标签跳转=>go(-1)
      按钮和样式的特点：有按钮没样式，没按钮有样式。
    -->
    <div class="wrap">
      <a @click="$router.go(-1)"><</a>
      <div class="content">
          <h2 :class="{ title : !show }">{{biaoti}}</h2>
      </div>
      <button v-if="show" @click="$emit('queren-click')">确认</button>
    </div>
</template>

<script>
export default {
    props: ['biaoti','show']
}
</script>

<style>
.wrap{
  background: #452E94;
  width:100%;
  height: 1.11rem;
  display:flex;
  justify-content: space-between;
}
.wrap a{
  display:block;
  font-size:0.6rem;
  margin:0.16rem;
  height: 0.56rem;
  width: 1.2rem;
  border-radius:2rem;
  text-align:center;
  background: #452E94;
  color:#e6d9f3;
}
.wrap button{
  display:block;
  font-size:0.28rem;
  margin:0.3rem 0.18rem;
  height: 0.56rem;
  width: 1.5rem;
  border:1px solid #ccc;
  border-radius:1.2rem;
  text-align:center;
  background: #452E94;
  color:#e6d9f3;
}
.content{
  width: 100%;
}
.content h2{
  color: #E0E0EA;
  text-align: center;
  font-size: 0.35rem;
  line-height:1.11rem;
}
.title{
  color: #E0E0EA;
  text-align: center;
  font-size: 0.35rem;
  line-height:1.11rem;
  margin-right:1.2rem;
}
</style>

