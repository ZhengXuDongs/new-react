import * as types from '../../constant/login';

const initialState = {
  data: {}
};

const LoginReducer = (state, action) =>{
  console.log(action);
  switch (action.type) {
    case types.USER_LOGIN_SUCCESS:
      return action.payload;
    case types.USER_LOGIN_FAILED:
      return action.payload;
    case types.USER_LOGIN_EXAMINE:
      return action.payload;
    case types.USER_LOGIN_FORBID:
      return action.payload;
    default:
      return null;
  }
};


export default LoginReducer;
