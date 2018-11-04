<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/spider/Login'
export default {
  name: 'App',
  components:{Login},
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
  height:100%;
}
html{
  margin:0px;
  padding:0px;
  height:100%;
  font-size:12px;
  background:#eee
}
body{
  margin:0px;
  padding:0px;
  height:calc(100% - 5rem);
}
ul li{
  list-style-type:none;
}
</style>
