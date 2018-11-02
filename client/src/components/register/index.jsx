import React, {Component} from 'react';
import {NavBar, List, InputItem, Button, WingBlank, WhiteSpace, Radio} from 'antd-mobile';
import Logo from '../logo';

const Item = List.Item;
class Register extends Component {
  state = {
    username: '',
    password: '',
    rePassword: '',
    type: 'boss'
  }
  //定义setUsername方法
  // setUsername = val => {
  //更新状态
  //   this.setState ({
  //     username: val
  //   })
  // }
  // setPassword = val => {
  //   this.setState ({
  //     password: val
  //   })
  // }
  handleChange = (name, val) => {
    this.setState({
      [name]: val
    })
  }
  
  register = () => {
    //获取表单数据
    const {username, password, rePassword, type} = this.state;
    //发送ajax请求
  }
  toLogin = () => {
    //跳转到登录路由，编程式导航
    this.props.history.replace('/login');
  }
  render () {
    const {type} = this.state;
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo/>
        <WingBlank>
          <form>
            <List>
              <WhiteSpace/>
              <InputItem placeholder="请输入用户名" onChange={val => this.handleChange('username', val)}>用户名：</InputItem>
              <WhiteSpace/>
              <InputItem
                placeholder="请输入密码"
                type="password"
                onChange={val => this.handleChange('password', val)}
              >密 码：</InputItem>
              <WhiteSpace/>
              <InputItem
                  placeholder="请输入确认密码"
                  type="password"
                  onChange={val => this.handleChange('rePassword', val)}>确认密码：</InputItem>
              <WhiteSpace/>
              <Item>
                用户类型:&nbsp;&nbsp;
                <Radio
                  className="my-radio"
                  checked={type === 'dashen'}
                  onClick={() => this.handleChange('type', 'dashen')}
                >大神</Radio>&nbsp;&nbsp;
                <Radio
                  className="my-radio"
                  checked={type === 'boss'}
                  onClick={() => this.handleChange('type', 'boss')}
                >老板</Radio>
                <WhiteSpace/>
                <Button type="primary" onClick={this.register}>注 册</Button>
                <WhiteSpace/>
                <Button onClick={this.toLogin}>已有账户</Button>
              </Item>
            </List>
          </form>
        </WingBlank>
      </div>
    )
  }
}

export default Register;
//通过事件收集数据onChange
/*
跳转路由的方式：路由导航链接、编程式导航
路由组件有三个对象：prop——push的特点有回退键浏览记录——反之replace
                  单页面时用replace
 */