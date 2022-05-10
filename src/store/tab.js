//存储侧边栏展开信息
export default {
    state:{
        isCollapse:false,
        tabsList:[
            {
                path:'/home',
                name:'home',
                label:'首页',
                icon:'home'
            }
        ],
         currentMenu:null,
         menu:[]
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state,val){
            // 判断点击的值是否为首页，不是就获取值跳转
            if(val.name !== 'home'){
                state.currentMenu=val
                const result= state.tabsList.findIndex(item=>item.name === val.name)
                if(result === -1){
                    state.tabsList.push(val)
                }
            }else{
                state.currentMenu =null
            }
        },
        closeTag(state,val){
            const result=state.tabsList.findIndex(item=>item.name===val.name)
            state.tabsList.splice(result,1)
        }
    }
}