<template>
    <div class="home">
        <HomeHeader/>
        <HomeMenu />
        <router-view></router-view>
    </div>
</template>

<script>
import {LOGINTITLE} from '../../static/index.js'
import moment from 'moment'
import HomeHeader from '@/components/spider/HomeHeader'
import HomeMenu from '@/components/spider/Homemenu'
import Claim from '@/components/spider/Claim'
import Overview from '@/components/spider/Overview'
export default {
  name: 'home',
  components: {HomeHeader, HomeMenu, Overview, Claim},
  data () {
    return {
      
    }
  },
  computed:{

  },
  mounted(){

  },
  methods:{
     
  }
}
</script>

<style scoped>
.home{
  height:100%;
  display: flex;
}

</style>
