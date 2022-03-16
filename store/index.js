
//引用前安装 npm install vuex@3.6.2 --save

import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        tab
    }
})