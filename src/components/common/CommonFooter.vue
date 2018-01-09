<template>
  <div class="footer" :style={background:bgcolor}>
   <ul>
     <li><router-link to="/movie">电影</router-link></li>
     <li><router-link to="/music">音乐</router-link></li>
     <li><router-link to="/book">书籍</router-link></li>
     <li><router-link to="/picture">图片</router-link></li>
   </ul>
  </div>
</template>
<script>
export default {
  name: 'CommonFooter',
  props:['bgcolor']
}
</script>

<style scoped>
  .footer {
    background: rgb(33, 150, 243);
    height: 1rem;
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  .footer ul {
     display: flex;
  }
  .footer li {
    flex:1;
    color: #eee;
    text-align: center;
    line-height: 1rem;

  }
  .footer li a{
        color: #ccc;
  }
  .footer a.router-link-active {
    color: #fff;
  }
</style>
