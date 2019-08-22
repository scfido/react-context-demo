import userContext from "./userContext"

//用户信息显示组件，接收顶层的Context
function UserInfo() {
    return (
        <userContext.Consumer>
            {(userContext) => (
                <>
                    <div>用户名:{userContext.username}</div>
                    <div>登录状态：{userContext.isLogin ? "已登录" : "已注销"}</div>
                    <div><button onClick={userContext.logout}>注销</button></div>
                </>
            )}
        </userContext.Consumer>
    );
}

export default UserInfo;