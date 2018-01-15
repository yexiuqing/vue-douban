<template>
  <div class="music">
    <common-header title="Music" bgcolor='#e91e63'/>
    <a-player v-if='show'></a-player >
    <common-footer bgcolor='#e91e63'/>
  </div>
</template>
<script>
import CommonHeader from '../common/Commonheader'
import CommonFooter from '../common/CommonFooter'
import Axios from 'axios'
import aplayer from 'vue-aplayer'
export default {
  name: "Music",
  data () {
    return {
      songs:[],
      musicData:[],
      show: false
      
    }
  },
  mounted() {
    this.getMusicData();
  },
  methods: {
    getMusicData() {
      let _this = this;
      let musicObj = new Object;
      Axios.get('static/musiclist.json')
    .then(res => {
      this.musicData = this.musicData.push(...res.data.songs);
      console.log(res.data.songs)
      for(let i = 0; i < this.musicData.length; i++) {
         this.musicObj.title =  this.musicData[i].name;
         this.musicObj.author =  this.musicData[i].album.name;
         this.musicObj.url =  this.musicData[i].audio;
         this.musicObj.pic =  this.musicData[i].album.picUrl;
         this.musicObj.lrc = '';
        this.songs.push(musicObj)
      }
      console.log('1111111111111'+ this.songs)
    })
    .then({

    })
    }
  },
  components:{
    CommonHeader,
    CommonFooter,
    'a-player':aplayer
  }
}
</script>
<style scoped>

</style>
