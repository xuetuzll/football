<template>
  <div class="information">
    <h1>我是资料页面</h1>
    <bottom></bottom>
  </div>
</template>

<script>
  import bottom from '../../components/bottom'
  export default {
    name: "information",
    components:{
      bottom
    }
  }
</script>

<style scoped>
.information{
  height: 50000px;
}
</style>
