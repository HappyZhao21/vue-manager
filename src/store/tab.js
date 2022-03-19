//存储侧边栏展开信息
export default {
    state:{
        isCollapse:false
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}