<template>
  <div class="top250">
   <div class="moive-img">
     <img :src="img" alt="图片">
   </div>
   <div class="movie-desc">
      <span><a>{{title}}</a></span>
      <p>
        <span v-for="desclist in desc">{{desclist}}</span>
        ({{year}}) (平均{{avg}}分）
      </p>
     </div>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  props: ['title', 'img', 'year', 'avg', 'desc']
}
</script>

<style scoped>
  .top250 {
    padding: 0.4rem;
    margin:.4rem 0;
  }
  .moive-img {
    float: left;
    width: .8rem;
    height: .8rem;
  }
  .moive-img img {
    width: 100%;
    height: 100%;
  }
  .movie-desc {
    float: left;
    width: 4rem;
    margin-left: .6rem;
    border-bottom: 1px solid #eee;

  }
  .movie-desc span {
    margin-left:.1rem;
  }
</style>
