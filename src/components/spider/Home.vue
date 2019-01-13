<template>
    <div class="home">
        <HomeHeader/>
        <HomeMenu />
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import {LOGINTITLE} from '../../static/index.js'
import moment from 'moment'
import HomeHeader from '@/components/spider/HomeHeader'
import HomeMenu from '@/components/spider/Homemenu'
import Claim from '@/components/spider/Claim'
import Overview from '@/components/spider/Overview'
import Forecast from '@/components/spider/Forecast'
import Timesheet from '@/components/spider/Timesheet'
import Elearning from '@/components/spider/Elearning'
export default {
  name: 'home',
  components: {HomeHeader, HomeMenu, Overview, Claim, Timesheet, Forecast, Elearning},
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
