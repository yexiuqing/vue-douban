<template>
  <div class="movie">
    <div class="movie-list">
        <movie-list v-for="(item, key) in movieList" :key="key" :img="item.images.small" :title="item.title" :year="item.year" :avg="item.rating.average" :desc="item.genres"></movie-list>     
    </div>
  </div> 
</template>
<script>
import MovieList from './MovieList'
import Axios from "axios";

export default {
  name: "movie",
  data() {
    return {
      movieList: [],
      showLoading: true
    };
  },
  mounted() {
    let _this = this
    window.onscroll = function() {
      let scrollTop = document.documentElement.scrollTop;
      let screenHeight = document.documentElement.clientHeight;
      let htmlHeight = document.documentElement.scrollHeight;
      if (scrollTop + screenHeight >= htmlHeight ) {
        _this.getData()
        _this.show = true;
      } 
    };
    this.getData()
  },
  methods: {
    getData() {
      Axios.get("api/movie/coming_soon?count=10&start="+this.movieList.length)
        .then(res => {
          console.log(res.data)
          this.total = res.data.total;
          this.movieList = this.movieList.concat(res.data.subjects);
          this.show = true;
        })
        .then(res => {
          console.log("error");
        });
    }
    
  },
  components: {
    MovieList
  }
};
</script>

<style scoped>
.movie-list {
  margin: 2rem 0 1.4rem 0;
}
.header {
  position: absolute;
  top: 0;
  background: rgb(33, 150, 243);
  height: 1rem;
  width: 100%;
  display: flex;
}
</style>
