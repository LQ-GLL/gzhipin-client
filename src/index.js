import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import Login from './components/login';
import Main from './components/main';
import Register from './components/register';
import store from './redux/store';

ReactDOM.render((
  // 1、管理store对象的状态 2、重新渲染组件
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));

