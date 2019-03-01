import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
}from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import Login from '../views/login';
import Home from '../views/home';
import User from '../views/user';
import UserCenter from "../views/user/userCenter";
import UserList from "../views/user/userList";


let store = configureStore();

const router = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/home' component={Home}/>
        <User path='/user'>
          <Switch>
            <Route path='/user/user-center' component={UserCenter}/>
            <Route path='/user/user-list' component={UserList}/>
          </Switch>
        </User>
        <Route path='/login' component={Login}/>
        <Redirect to='/login' /> {/*必须处于路由的最后一行*/}
      </Switch>
    </Router>
  </Provider>
);

export default router;
