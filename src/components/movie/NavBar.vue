<template>
  <div class="nav">
   <ul>
     <li>口碑榜</li>
     <li>新片榜</li>
     <li>正在上映</li>
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
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
</style>
