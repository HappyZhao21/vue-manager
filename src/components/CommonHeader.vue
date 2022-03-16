<template>
 <header>


   <div class="l-content">
     <div class="grid-content bg-purple" style="text-align: center">
       <el-button plain icon="el-icon-menu" size="mini" style="margin-top: 10%">
       </el-button>
     </div>
     <h3  style="color: #fff">首页</h3>
   </div>

    <div class="r-content">
      <el-dropdown trigger="click" size="mini" style="padding-top: 10%">
            <span class="el-dropdown-link" style="color: white">
              <img class="user" :src="userImage">
            </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">黄金糕</el-dropdown-item>
          <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>


 </header>
</template>

<script>
export default {
  name: "CommonHeader",
  data(){
    return{
      userImage: require('../assets/images/user.png')
    }
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
  align-items: center;
  .el-button{
    margin-right: 20px;
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