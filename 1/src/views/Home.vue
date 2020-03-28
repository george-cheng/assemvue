<template>
  <div class="">
    <router-link :to="{path: '/dialog'}">a11aaa</router-link>
  </div>
</template>

<script>
  import {guid} from "@/assets/common.js";

  export default {
    name: 'home',
    components: {},
    methods: {},
    created() {

      this.$dialog.OpenWindow({
        width: 100,
        height: 100,
        title: 'xxx',
        closeCallBack: ()=>{

        }
      });

      console.log(guid());
      let params = {
        aa: '2'
      };
      this.ajaxJson({
        url: 'http://47.96.119.161/app/php/home.php',
        data: params,
        successCall: (data) => {
          console.log(data);
        }
      })
    }
  }
</script>

<style scoped lang="less">
  @import "../../static/index.css";
</style>
