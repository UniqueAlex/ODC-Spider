<template>
    <div class="forecast">
      <div>
        <span class=""></span>
        <input class="" v-model="forecastDate"/>
      </div>
    </div>
</template>

<script>
import {LOGINTITLE} from '../../static/index.js'
import moment from 'moment'
export default {
  name: 'forecast',
  components: {},
  data () {
    return {
      forecastDate: ''
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
.forecast{
    height: calc(100% - 8rem);
    width: 70%;
    background:antiquewhite;
    margin: auto;
}

</style>
