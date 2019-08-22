import styles from './index.css';
import Box from "../components/Box"
import UserInfo from "../components/UserInfo"
import userContext from "../components/userContext"
import React from "react"


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      username: "未登录",
    };
  }

  logout() {
    this.setState({
      isLogin: false,
      username: "未登录",
    });
  }

  handlNameChange(e) {
    this.setState({
      username: e.target.value,
      isLogin: true
    });
  }

  render() {

    return (
      <div className={styles.normal}>
        <h1>Context</h1>
        <p>Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。</p>
        <h1>模拟用户登录</h1>
        <span>输入用户名登录</span>
        <div>
          用户名：<input type="text" value={this.state.username} onChange={this.handlNameChange.bind(this)} />
        </div>

        <h1>模拟子孙组件显示登录信息</h1>
        <userContext.Provider value={{...this.state, logout:this.logout.bind(this)}}>
          <Box>
          <UserInfo />
        </Box>
        </userContext.Provider>
      </div >
    )
  }
}

export default App
