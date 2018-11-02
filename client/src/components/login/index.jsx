import React, {Component} from 'react';
import {NavBar, List, InputItem, Button, WingBlank, WhiteSpace, Radio} from 'antd-mobile';
import Logo from '../logo';

const Item = List.Item;
class Register extends Component {
  render () {
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo/>
        <WingBlank>
          <form>
            <List>
              <WhiteSpace/>
              <InputItem placeholder="请输入用户名">用户名：</InputItem>
              <WhiteSpace/>
              <InputItem placeholder="请输入密码" type="password">密 码：</InputItem>
              <Button type="primary">登 陆</Button>
              <WhiteSpace/>
              <Button>还没有账户</Button>
            </List>
          </form>
        </WingBlank>
      </div>
    )
  }
}

export default Register;