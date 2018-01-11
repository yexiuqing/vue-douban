<template>
  <div class="musiclist">
    <ul>
      <li >
        <vue-router >1111111
          <img src="" alt="">
          </vue-router>
      </li>
    </ul>
  </div>                 
</template>
<script>
import Axios from 'axios'
export default {
  name:"MusicList",
  data () {
    return {

    }
  },
  methods:{
    getListData(){
      Axios.get('')
    } 
  },
  mounted:{

  }
}
</script>
<style>
.musiclist {
  margin-top: 1rem;
}
</style>
