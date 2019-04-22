import * as types from '../../constant/login';

const initialState = {
  userData: {
    age: '12'
  }
};

const LoginReducer = (state=initialState, action) =>{
  console.log(action,state);
  switch (action.type) {
    case types.USER_LOGIN_SUCCESS:
      console.log(state,initialState)
      console.log({...state.userData})
      return {...state, 'userData': {...state.userData, ...action.payload}};
    case types.USER_LOGIN_FAILED:
      return action.payload;
    case types.USER_LOGIN_EXAMINE:
      return action.payload;
    case types.USER_LOGIN_FORBID:
      return action.payload;
    case 'GET_USER_INFO':
      return state;
    default:
      return initialState;
  }
};


export default LoginReducer;
