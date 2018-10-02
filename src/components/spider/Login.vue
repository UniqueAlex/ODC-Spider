<template>
    <div>
        <LoginLMsg/>
        <LoginRMsg/>
    </div>
</template>

<script>
import LoginLMsg from '@/components/spider/LoginLMsg.vue'
import LoginRMsg from '@/components/spider/LoginRMsg.vue'
import moment from 'moment'
export default {
  name: 'Login',
  components: {LoginLMsg, LoginRMsg},
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
