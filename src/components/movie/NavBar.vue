<template>
  <div class="nav">
   <ul>
     <li><router-link to='/movie/koubei'>口碑榜</router-link></li>
     <li><router-link to='/movie/xinpian'>新片榜</router-link></li>
     <li><router-link to='/movie/shangying'>正在上映</router-link></li>
   </ul>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .nav {
    background: rgb(33, 150, 243);
    height: 1rem;
    width: 100%;
    position: fixed;
    top:1rem;
  }
  .nav ul {
     display: flex;
  }
  .nav li {
    flex:1;
    color: #ccc;
    text-align: center;
    line-height: 1rem;
  }
  .nav li a.router-link-active{
     color: #fff;
  }
</style>
