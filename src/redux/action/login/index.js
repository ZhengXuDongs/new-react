import * as types from '../../constant/login';


export const loginSuccess = (data) =>{
  return {
    type: types.USER_LOGIN_SUCCESS,
    payload: data
  }
};

export const loginFailed = (error) =>{
  return {
    type: types.USER_LOGIN_FAILED,
    payload: error
  }
};

export const loginExamine = (data) =>{
  return {
    type: types.USER_LOGIN_EXAMINE,
    payload: data
  }
};

export const loginForbid = (error) =>{
  return {
    type: types.USER_LOGIN_FORBID,
    payload: error
  }
};


export const userLogin = (data) => dispatch =>{
  console.log(data);
  if(data.account === '1') {
    dispatch(loginSuccess({code: 200, msg:'登录成功'}))
  }else if(data.account === '2') {
    dispatch(loginFailed({code: 201, msg:'登录失败'}))
  }else if(data.account === '3') {
    dispatch(loginForbid({code: 202, msg:'您被禁止了'}))
  }else if(data.account === '4') {
    dispatch(loginExamine({code: 203, msg:'审核中'}))
  }
};
