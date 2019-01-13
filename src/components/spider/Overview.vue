<template>
    <div class="overview">
      <ul class="overview-list">
          <li class="overview-list-details" v-for="(details, index) in list" :key="index">
            <p class="overview-list-details-title" >{{details.title}}</p>
            <p class="overview-list-details-status" >{{details.isCompleted?"completed":"not completed"}}</p>
          </li>
      </ul>
    </div>
</template>

<script>
import {LOGINTITLE} from '../../static/index.js'
import moment from 'moment'
export default {
  name: 'overview',
  components: {},
  data () {
    return {
      list: this.$store.state.overviewList,

    }
  },
  computed:{

  },
  mounted(){
    if(this.$store.state.overviewList.length == 0){
      let userId = JSON.parse(sessionStorage.getItem('userInfo')).userId;
      let userInfo = {
        userId: userId
      }
      this.$store.dispatch('overview', userInfo);
    }
  },
  methods:{
     
  }
}
</script>

<style scoped>
.overview{
    height: calc(100% - 8rem);
    width: 70%;
    background:darksalmon;
    margin: auto;
}
.overview-list{
  margin:0;
  padding:0;
}
.overview-list li{
  display:flex;
  justify-content: space-around;
  background:cadetblue;
  margin:auto;
  width:70%;
}
.overview-list li > p{
  text-align: center;
  justify-content:center;
}
</style>
