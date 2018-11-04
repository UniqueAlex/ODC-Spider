<template>
    <div class="home-menu">
        <div class="home-menu-list">
            <ul>
                <router-link :to="`/home/${text}`" tag="li" v-for="(text, index) in title" 
                    :key="index" ref="li" @click="active(index,text)">{{text}}</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import {LOGINTITLE} from '../../static/index.js'
import moment from 'moment'
export default {
  name: 'homemenu',
  data () {
    return {
      title:['overview', 'claim', 'timesheet', 'forecast', 'e-learning']
    }
  },
  computed:{

  },
  mounted(){

  },
  methods:{
    active(index, text){
        this.$refs.li.forEach(item => {
            item.classList.remove('active')
        })
        this.$refs.li[index].classList.toggle('active');
    }
  }
}
</script>

<style scoped>
.home-menu{
    height:100%;
    width:200px;
    overflow:hidden;
    background:skyblue;
}
.home-menu-list ul{
    height: 40rem;
    margin: 0;
    padding: 0;
}
.home-menu-list li{
    height: 4rem;
    line-height: 4rem;
    font-size: 2rem;
    margin: 1rem auto 1rem;
    cursor:pointer;
}
.active{
    color:#bbb;
    border:1px solid #000;
}

.home-menu-list li:hover{
    background:#fff
}
</style>
