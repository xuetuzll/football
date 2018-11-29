<template>
<div>
  <top :biaoti="title" :show="bt"></top>

  <div>
    <img src="../../../static/img/pic1.png" alt="图片失败">
  </div>
</div>
  
</template>

<script>
  import top from './../../../components/top'
    export default {
      data(){
          return {
            bt: false,
            title: '关于我们'
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

img{
  width:100%;
}
</style>

