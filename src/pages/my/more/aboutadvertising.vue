<template>
<div>
  <top :biaoti="title" :show="bt"></top>

</div>
  
</template>

<script>
  import top from './../../../components/top'
    export default {
      data(){
          return {
            bt: false,//代表没有按钮    
            title: '关于广告'
          }
      },
      components: {
        top
      }
    }
</script>

<style scoped>

</style>

