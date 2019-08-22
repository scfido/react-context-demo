import React from "react"

//创建Context组件
const userContext = React.createContext({
    username: 'admin',
    isLogin: false,
    logout: () => { }, //向上下文设定一个回调方法
});

export default userContext;