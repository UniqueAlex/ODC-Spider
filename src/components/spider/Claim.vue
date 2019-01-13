<template>
    <div class="claim">
      <div>
        <span class="">{{text.claim.claimCode}}</span>
        <select v-model="selectedCode">
          <option disabled value="">{{text.claim.selectTitle}}</option>
          <option v-for="option in options" v-bind:value="option.code">
            {{ option.code }}
          </option>
        </select>
      </div>
      <div>
        <span class="">{{ text.claim.totalHours }}</span>
        <input class="" v-model="totalHours" @onblur=""/>
        <span v-if="errorEnter" >please enter the number</span>
      </div>
      <div>
        <button class="todo-item-delete-button" :disabled="isAddButtonDisabled" @click="add">
            {{ text.claim.add }}
        </button>
      </div>
      <ul>
        <li v-for="item in addedCodeList">
          <span>{{ item.code }}</span>
          <span>{{ item.hours }}</span>
        </li>
      </ul>
    </div>
</template>

<script>
import {text} from '../../static/index.js'
import moment from 'moment'
import week from '../common/time.js'

export default {
  name: 'claim',
  components: {},
  data () {
    return {
      text: text,
      selectedCode: '',
      totalHours: '',
      options: this.$store.state.claim.claimCodeOption,
      isAddButtonDisabled: true,
      errorEnter: false,
      hourRegx: /^[0-9]+$/,
      addedCodeList: sessionStorage.getItem()
    }
  },
  computed:{
    checkData(){
      const {selectedCode, totalHours} = this;
      return {
        selectedCode, 
        totalHours
      };
    }
  },
  mounted(){
    let weekNum = week.week;
    let userId = JSON.parse(sessionStorage.getItem('userInfo')).userId;
    let requestInfo = {
      weekNum: weekNum,
      userId: userId
    }
    this.$store.dispatch('getClaimed', requestInfo).claim;
  },
  methods:{
    add(){
        let code = this.selectedCode;
        let hours = this.totalHours.trim();
        let claimData = {code, hours};
        this.$store.dispatch('addClaim', claimData).claim;
        this.totalHours = '';
     }
  },
  watch: {
    checkData: function (newVal) {
      if(this.hourRegx.test(newVal.totalHours) && newVal.selectedCode != ''){
        this.isAddButtonDisabled = false;
      } else{
        this.isAddButtonDisabled = true;
      }
    },
    totalHours: function(newVal, oldVal){
      if (newVal != ''){
        if(this.hourRegx.test(newVal)){
          this.errorEnter = false;
        }else{
          this.errorEnter = true;
        }
      } else{
        this.errorEnter = false;
      }

    }
  },
}
</script>

<style scoped>
.claim{
    height: calc(100% - 8rem);
    width: 70%;
    background: deepskyblue;
    margin: auto;
}

</style>
