<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/user">
      <el-button  type="success">user按钮</el-button>
    </router-link>

    <router-link to="/home">
      <el-button  type="success">home按钮</el-button>
    </router-link>

    <el-button @click="open1" type="success">成功按钮</el-button>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      radio: '1'
    };
  },
  props: {
    msg: String
  },
  methods: {
    open1() {
    alert("Success")
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
