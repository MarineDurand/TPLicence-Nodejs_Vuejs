<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import myHeader from '@/components/myHeader'

  export default {
    name: 'app',
    components: {
      myHeader
    }
  }
</script>

<style>
  #app {
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
