<template>
  <div id="app">
        <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'transitionLeft'
    }
  },
}
</script>

<style>
  @import 'style/style.css';
  @import './fon/iconfont.css';
</style>
