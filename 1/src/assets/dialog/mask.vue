<template>
  <div class="mask"></div>
</template>

<script>
  export default {
    name: "assm-mask"
  }
</script>

<style scoped>
  .mask {
    z-index: 999999999999;
    width: 100%;
    height: 100%;
    background-color: #000;
    position: fixed;
    top: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
    filter: alpha(opacity=50);
    opacity: .5;
  }
</style>
