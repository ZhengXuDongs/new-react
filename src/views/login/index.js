import React, {Component} from 'react';
import * as types from '../../redux/constant/login';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/action/login';


class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      name:'',
      account: '',
      password: '',
      code: null,
      message: ''
    }
  }

  componentWillMount() {
    console.log(this.props)
    if(this.props.location.state) {
      const param = this.props.location.state;
      this.setState({
        id: param.id,
        name: param.name
      })
    }
  }



  jumpToHome = () => {
    this.props.history.push({pathname: '/home', state: {id:1, name: '战三'}});
  };

  accountChange = (e) =>{
    console.log(e.target.value);
    this.setState({
      account: e.target.value
    })
  };

  passwordChange = (e) =>{
    this.setState({
      password: e.target.value
    })
  };

  handleSubmit = () =>{

    const {account, password} = this.state;
    const data = {
      account: account,
      password: password
    };
    console.log(this.props)
    this.props.userLogin(data);
    /*this.props.store.dispatch({type: types.USER_LOGIN_LOADING, data: data})*/
  };

  componentWillReceiveProps(nextProps) {
    console.log('数据有变化', nextProps);
  }

  render() {
    const {id, name} = this.state;
    let {  code, message } = this.props;
    return <div>
      <h1>我是Login页面</h1>
      <input type={'text'} onChange={this.accountChange}/>
      <input type={'text'} onChange={this.passwordChange}/>
      <button onClick={this.jumpToHome.bind()}>跳转</button>
      <button onClick={this.handleSubmit.bind()}>登录</button>
      <p>{id}</p>
      <p>{name}</p>
      <p>code: {code}</p>
      <p>message: {message}</p>
    </div>
  }

}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state, ownProps) => {
  console.log('state:', state)
  return {
    code: state.LoginReducer && state.LoginReducer.code,
    message: state.LoginReducer && state.LoginReducer.msg,
  }
};

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) =>{
  return {
    userLogin (data) {
      dispatch(userLogin(data));
      // 执行setPageTitle会返回一个函数
      // 这正是redux-thunk的所用之处:异步action
      // 上行代码相当于
      /*dispatch((dispatch, getState) => {
          dispatch({ type: 'USER_LOGIN_LOADING', data: data })
      )*/
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
