<template>

  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <div class="grid-content bg-purple">
        <el-card class="box-card" shadow="hover">
          <div  class="user">
             <img :src="userImage">
            <div class="=userinfo">
              <p class="name">
                Admin
              </p>
              &nbsp;
              <p class="access">
                Zxq超级管理员
              </p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间:<span>2022-02-24</span></p>
            <p>上次登录地点:<span>宁波</span></p>
          </div>
        </el-card>
        <el-card style="margin-top: 20px;height: 460px" >

          <el-table :data="tableDta">
            <el-table-column
                v-for="(val,key) in tableLable"
                :key="key"
                :prop="key"
                :label="val"
                >
            </el-table-column>
          </el-table>

        </el-card>
      </div>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
          <el-card v-for="item in countData" :key="item.name" :body-style="{ display:'flex',padding:0}">
            <i class="icon" :class="'el-icon-'+item.icon" :style="{background:item.color}"></i>
            <div class="detail">
               <p class="num">￥{{item.value}}</p>
              <p class="txt">{{item.name}}</p>
            </div>
          </el-card>
      </div>
    </el-col>
  </el-row>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",
  data () {
    return {
      userImage: require('/src/assets/images/zxq.jpg'),
      tableDta:[
        {
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: 'vivo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '苹果',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '小米',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '三星',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '魅族',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        }
      ],
      tableLable:{
        name: '课程',
        todayBuy:'今日购买',
        monthBuy:'本月购买',
        totalBuy:'总购买'
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ]

    }
  }
}
</script>

<style scoped>

</style>