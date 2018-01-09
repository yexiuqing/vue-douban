<template>
  <div class="book">
    <common-header title="Book" bgcolor='#3F51B5'/>
    <common-footer bgcolor='#3F51B5'/>
  </div>
</template>
<script>
import CommonHeader from '../common/Commonheader'
import CommonFooter from '../common/CommonFooter'
export default {
  name: "Book",
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
