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

          <el-table :data="tableData">
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

      <el-card style="height: 280px">
        <!--折线图-->
        <!--<div style="height: 280px" ref="echarts"></div>-->
        <echart :chartData="echartsData.order" style="height: 280px"></echart>
      </el-card>

      <div class="graph">

        <el-card style="height: 260px">
        <!--柱状图-->
        <!-- <div style="height: 240px" ref="userEcharts"></div>-->
          <echart :chartData="echartsData.user" style="height: 240px"></echart>
        </el-card>

        <el-card style="height: 260px">
        <!--饼图-->
        <!-- <div style="height: 240px" ref="videoEcharts"></div>-->
          <echart :chartData="echartsData.video" :isAxisChart="false" style="height: 240px"></echart>
        </el-card>

      </div>

    </el-col>

  </el-row>

</template>

<script>

//import {getMenu} from "@/api/data";
import {getData} from "@/api/data";
//import * as echarts from 'echarts'
import Echart from '../../components/ECharts'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",
  components: {
    Echart
  },
  data () {
    return {
      userImage: require('/src/assets/images/zxq.jpg'),
      tableData:[
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
      ],
      echartsData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {
          series: []
        }
      }

    }
  },
  mounted() {
    getData().then(res=>{
      const {code,data}  = res.data
      if (code === 20000){
        console.log(data,"-------chartdata-------")
        this.tableData = data.tableData
        const order = data.orderData
        //折线图x轴数据
        const xData = order.date
        //获取所有key值
        const keyAarry = Object.keys(order.data[0])
        //这些图内容数据
        const series = []
        keyAarry.forEach(key => {
          series.push({
            name: key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })

        // const option = {
        //   xAxis: {
        //     data: xData
        //   },
        //   yAxis: {},
        //   //折线图标题分类
        //   legend: {
        //     data: keyAarry
        //   },
        //   series
        // }
        //将数据初始化折线图上
        // const E = echarts.init(this.$refs.echarts)
        // E.setOption(option)
        this.echartsData.order.xData = xData
        this.echartsData.order.series = series


        //用户柱状图
        // const userOption = {
        //
        //   legend: {
        //     // 图例文字颜色
        //     textStyle: {
        //       color: "#333",
        //     },
        //   },
        //   grid: {
        //     left: "20%",
        //   },
        //   // 提示框
        //   tooltip: {
        //     trigger: "axis",
        //   },
        //   xAxis: {
        //     type: "category", // 类目轴
        //     data: data.userData.map(item => item.date),
        //     axisLine: {
        //       lineStyle: {
        //         color: "#17b3a3",
        //       },
        //     },
        //     axisLabel: {
        //       interval: 0,
        //       color: "#333",
        //     },
        //   },
        //   yAxis: [
        //     {
        //       type: "value",
        //       axisLine: {
        //         lineStyle: {
        //           color: "#17b3a3",
        //         },
        //       },
        //     },
        //   ],
        //   color: ["#2ec7c9", "#b6a2de"],
        //   series: [
        //     {
        //       name: '新增用户',
        //       data: data.userData.map(item => item.new),
        //       type: 'bar'
        //     },
        //     {
        //       name: '活跃用户',
        //       data: data.userData.map(item => item.active),
        //       type: 'bar'
        //     }
        //   ]
        // }
        // const U = echarts.init(this.$refs.userEcharts)
        // U.setOption(userOption)

        this.echartsData.user.xData = data.userData.map(item => item.date)
        this.echartsData.user.series = [
          {
            name: '新增用户',
            data: data.userData.map(item => item.new),
            type: 'bar'
          },
          {
            name: '活跃用户',
            data: data.userData.map(item => item.active),
            type: 'bar'
          }
        ]

        //视频饼图
        // const videoOption = {
        //
        //       tooltip: {
        //         trigger: "item",
        //       },
        //       color: [
        //         "#0f78f4",
        //         "#dd536b",
        //         "#9462e5",
        //         "#a6a6a6",
        //         "#e1bb22",
        //         "#39c362",
        //         "#3ed1cf",
        //       ],
        //      series: [
        //        {
        //          data: data.videoData,
        //          type: 'pie'
        //        }
        //      ]
        // }
        // const V = echarts.init(this.$refs.videoEcharts)
        // V.setOption(videoOption)

        this.echartsData.video.series =  [
            {
            data: data.videoData,
            type: 'pie'
           }
         ]
      }
    })


  }
}
</script>

<style scoped>

</style>