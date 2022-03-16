# vue后台管理项目入门

## 安装环境

### 1.查看node环境

```
C:\Users\Administrator>node -v
v16.14.0
```

### 2.安装国内镜像

```
npm config set registry https://registry.npm.taobao.org
```

### 3.安装cnpm

```
npm install -g cnpm --registry=https://registry.npm.taobao.org

安装yarn包管理工具
npm install -g yarn
```

### 4.安装vue-cli脚手架构建工具

```
cnpm install -g @vue/cli

修改vue版本
确定vue的安装版本与vue-template-compiler一致
使用 npm install vue@2.5.16 --save指定vue版本安装

创建vue项目
vue create vueproject
```

## element-ui的使用

### 1.结合脚手架引入

1.使用npm 安装

```
npm i element-ui -S
```

### 2.全部引入

```
取消按需引入
npm uninstall babel-plugin-component -D

import {ElementUI} from 'element-ui';
Vue.use(ElementUI)
```

### 3.按需引入

```
import {Button,Radio} from 'element-ui';

Vue.use(Button)
Vue.use(Radio)
```

### 4.使用案例

```html
```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
```

```
## VUE 路由的使用

### 1.引入vue-router
```

npm i vue-router@3.3.0
```
## 