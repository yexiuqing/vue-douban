<template>
  <div class="music">
    <common-header title="Music" bgcolor='#e91e63'/>
    <router-view></router-view>
    <common-footer bgcolor='#e91e63'/>
  </div>
</template>
<script>
import CommonHeader from '../common/Commonheader'
import CommonFooter from '../common/CommonFooter'
export default {
  name: "Music",
  data () {
    return {

    }
  },
  components:{
    CommonHeader,
    CommonFooter
  }
}
</script>
<style scoped>

</style>
