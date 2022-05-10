<template>
 <header>

   <div class="l-content">

     <el-button @click="handerMenu()" plain icon="el-icon-menu" size="mini">
     </el-button>

     <el-breadcrumb separator="/">
       <el-breadcrumb-item  v-for="item in tags"  :key="item.path" :to="{ path: item.path }"> {{item.label}} </el-breadcrumb-item>
     </el-breadcrumb>

   </div>

    <div class="r-content">
      <el-dropdown trigger="click" size="mini" style="padding-top: 10%">
            <span class="el-dropdown-link" style="color: white">
              <img class="user" :src="userImage">
            </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">设置</el-dropdown-item>
          <el-dropdown-item command="e" divided>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

 </header>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "CommonHeader",
  data(){
    return{
      userImage: require('../assets/images/zxq.jpg')
    }
  },
  methods:{
    handerMenu(){
      this.$store.commit("collapseMenu")
    }
  },
  computed:{
    ...mapState({
      tags:state => state.tab.tabsList
    })
  }
}
</script>

<style lang="less" scoped>
header{
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;

}
.l-content{
  display: flex;
  align-content: center;
  .el-button{
    margin-right:20px ;

  }
}
.r-content{
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
