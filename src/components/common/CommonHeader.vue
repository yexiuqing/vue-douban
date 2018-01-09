<template>
  <div class="header" :style="{background:bgcolor}">
    <button>首页</button>
    <h2>{{title}}</h2>
  </div>
</template>
<script>
export default {
  name: 'CommonHeader',
  props:['title', 'bgcolor']
}
</script>

<style scoped>
  .header {
    position: fixed;
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
    flex:1;
    color: #fff;
    text-align: center;
    text-indent: -1rem;
  }
</style>
