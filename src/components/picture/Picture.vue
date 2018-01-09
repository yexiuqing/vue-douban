<template>
  <div class="music">
    <common-header title="Picture" bgcolor='#00bcd4'/>
    <common-footer bgcolor='#00bcd4'/>
  </div>
</template>
<script>
import CommonHeader from '../common/Commonheader'
import CommonFooter from '../common/CommonFooter'
export default {
  name: "Picture",
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
