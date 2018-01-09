<template>
  <div class="movie">
    <common-header title='Movie' bgcolor='rgb(33, 150, 243)'></common-header>
    <nav-bar></nav-bar >
    <div class="movie-list">
        <movie-list v-for="(item, key) in movieList" :key="key" :img="item.images.small" :title="item.title" :year="item.year" :avg="item.rating.average" :desc="item.genres"></movie-list>     
    </div>
    <div class="loading" v-show="show">
      <img src="../../assets/img/loading.gif" alt="加载中">
    </div>
    <common-footer bgcolor='rgb(33, 150, 243)'></common-footer>
  </div> 
</template>
<script>
import CommonHeader from "../common/CommonHeader";
import CommonFooter from "../common/CommonFooter";
import NavBar from "./NavBar";
import MovieList from "./MovieList";
import Axios from "axios";

export default {
  name: "movie",
  data() {
    return {
      movieList: [],
      show:false,
      total:""
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
      Axios.get("api/movie/top250?count=10&start="+this.movieList.length)
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
    CommonHeader,
    CommonFooter,
    NavBar,
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
.header button {
  color: #fff;
}
.header h2 {
  flex: 1;
  color: #fff;
  text-align: center;
  text-indent: -1rem;
}
.loading {
  margin-bottom: 1rem;
  text-align: center;
}
</style>
