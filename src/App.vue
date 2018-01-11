<template>
  <div id="app">
    <hello-world/>
  </div>
</template>

<script>
import Hello from '@/components/HelloWorld'
export default {
  name: 'app',
  components:{
    'hello-world':Hello,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
