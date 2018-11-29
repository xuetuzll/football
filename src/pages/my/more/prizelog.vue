<template>
  <div>
    <top :biaoti="title" :show="bt"></top>

    <div style="margin: 0 auto;width: 50%;">
    <img src="../../../static/img/tiqiu.png" alt="" >
    </div>
  </div>
</template>

<script>
  import top from './../../../components/top'
    export default {
      data(){
          return {
            bt: false,
            title: '兑换记录'
          }
      },
      components: {
        top
      }
    }
</script>

<style scoped>

</style>
