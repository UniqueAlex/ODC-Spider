<template>
    <div class="home-heander">
        <div class="home-header-title">
            <span>ODC</span>
        </div>
        <div class="home-header-time">
            <span>{{weekStart}} ~ {{weekEnd}}</span>
        </div>
        <div class="home-header-logininfo">
            <span class="home-header-logininfo-name">Bin</span>
            <div class="home-header-logininfo-menu">
                <span>Logout</span>
            </div>
        </div>
    </div>
</template>

<script>
import {LOGINTITLE} from '../../static/index.js'
import moment from 'moment'
import week from '../common/time.js'
export default {
  name: 'homeheader',
  data () {
    return {
      weekStart: week.weekStartDate,
      weekEnd: week.weekEndDate
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
.home-heander{
  width:100%;
  height:5rem;
  background:#333;
  flex-flow: row nowrap;
  justify-content:space-between;
  display: flex;
  position:fixed;
  top:0;
}
.home-header-title{
  order:1;
  height:5rem;
}
.home-header-title span{
    vertical-align:middle;
    line-height:5rem;
    text-align: center;
    width:10rem;
    display:inline-block;
    font-size:2.5rem;
    font-weight: 400;
    cursor: pointer;
    color:#fff;
}
.home-header-logininfo{
  order:3;
  height:100%;
  margin-right:1rem;
}
.home-header-time{
    order:2;
    color:#fff;
    height:100%;
}
.home-header-time span{
    vertical-align:middle;
    line-height:5rem;
    text-align: center;
    display:inline-block;
    font-size:1.5rem;
    font-weight: 400;
    cursor: pointer;
    color:#fff;
}
.home-header-logininfo-name{
    width: 4rem;
    height: 4rem;
    display: block;
    margin-top: 0.5rem;
    background-color: white;
    line-height: 4rem;
    border-radius: 2rem;
    font-size:2rem;
}
.home-header-logininfo:hover .home-header-logininfo-menu{
    display:block;
}
.home-header-logininfo-menu{
    width:5rem;
    height:3rem;
    right:0.5rem;
    background:royalblue;
    position: absolute;
    display:none;
    border-radius: 1rem;
    cursor: pointer;
}
.home-header-logininfo-menu span{
    height:3rem;
    line-height:3rem;
    color:#bbb;
}
</style>
