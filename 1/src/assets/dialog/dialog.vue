<template>
  <div>
    <div v-show="isShow" class="AlertBox" :style="{width: width+'px',height: height+'px',
      marginLeft: marginLeft+'px',marginTop: marginTop+'px',zIndex:zIndex}">
      <div v-if="isHead" class="AlertBoxHead">
        <h3>
          <span>{{title}}</span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "assm-dialog",
    data() {
      return {}
    },
    props: {
      id: String,
      title: String,
      isShow: Boolean,
      isHead: Boolean,
      width: String,
      height: String,
      marginLeft: String,
      marginTop: String,
      zIndex: Number
    },
    created() {
      console.log(111);
    }

  }
</script>

<style scoped lang="less">
  .AlertBox {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 8px;
    box-shadow: 0 0 12px #000;
    background-color: #fff;
  }
  .AlertBoxHead{
    width: 100%;
    height: 40px;
    background-color: #329ee7;
    border-radius: 8px 8px 0 0;
    cursor: move;
    h3{
      font-size: 16px;
      font-family: '宋体';
      font-weight: bold;
      color: #fff;
      line-height: 40px;
      padding-left: 16px;
    }
  }
</style>





























