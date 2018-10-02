<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import login from './components/spider/Login'
export default {
  name: 'App',
  components:{login},
  data () {
    return {

    }
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
html{
  margin:0px;
  padding:0px;
  font-size:12px;
  background:#eee
}
body{
  margin:0px;
  padding:0px;
}
</style>
