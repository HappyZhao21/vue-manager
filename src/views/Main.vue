<template>
  <el-container style="height: 100%">

    <el-aside width="auto">
       <common-aside></common-aside>
    </el-aside>

    <el-container>

      <el-header>
        <common-header></common-header>
      </el-header>

      <common-tag></common-tag>

      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>

</template>

<script>

import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";
import CommonTag from "@/components/CommonTag";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main",
  components:{
    CommonAside,
    CommonHeader,
    CommonTag
  },
  data(){
    return {}
  }
}
</script>

<style lang="less" scoped>
.el-header{
  background: black;
}
.el-main{
  padding-top: 0;
}
</style>