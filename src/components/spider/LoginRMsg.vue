<template>
    <div class="msg">
        <div class="msg-title">
            <span>ODC SPIDER</span>
        </div>
        <div class="msg-word">
            <span>God Bless You</span>
        </div>
        <div class="msg-time">            
            <span>{{timeFront}}</span><br>
            <span>{{timeEnd}}</span>
        </div>
    </div>
</template>

<script>
import {LOGINTITLE} from '../../static/index.js'
import moment from 'moment'
export default {
  name: 'LoginRMsg',
  data () {
    return {
      
    }
  },
  computed:{
      timeFront(){
          return moment().format('l');
      },
      timeEnd(){
          return moment().format('h:mm:ss a');
      }
  },
  mounted(){

  },
  methods:{
     
  }
}
</script>

<style scoped>
.msg{
  width:400px;
  min-width:300px;
  height:400px;
  margin-left:calc(22% + 400px);
  margin-top:200px;
  position:absolute;
  top:100px;
  background:url(../../assets/login-bg-4.jpg) no-repeat;
  background-size:cover

}
.msg-title{
    width:100%;
    height:6rem;
    margin-top:2rem;
    background:olive;
}
.msg-title span{
    height:6rem;
    line-height:6rem;
    font-size:3rem;
}
.msg-word{
    height:6rem;
}
.msg-word span{
    height:6rem;
    line-height:6rem;
    font-size:2rem;
    color:#fff;
}
.msg-time{
    height:10rem;
    margin-top:3rem;
}
.msg-time span{
    text-align:left;
    display: block;
    height:2rem;
    font-size:3rem;
    padding-left:2rem;
    margin-top:3rem;
    color:#fff;
}
</style>
