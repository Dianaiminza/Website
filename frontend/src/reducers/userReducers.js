
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL,} from "../constants/userConstants";
const initialState = {
  isLoged : false,
  loading: false,
  userInfo:{}
}
function userSigninReducer(state = initialState, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        ...state,
        loading:true 
        };
    case USER_SIGNIN_SUCCESS:
      return { 
        ...state,
        loading: false, 
        userInfo: action.payload,
        isLoged: true
      };
    case USER_SIGNIN_FAIL:
      return {
        ...state,
         loading: false, 
         error: action.payload,
         isLoged:false
        };
    default: 
    return { success: false, message: "not authorised"};
  }
}

export {
  userSigninReducer
}




// import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL,} from "../constants/userConstants";

// function userSigninReducer(state = {}, action) {
//   switch (action.type) {
//     case USER_SIGNIN_REQUEST:
//       return { loading: true };
//     case USER_SIGNIN_SUCCESS:
//       return { loading: false, userInfo: action.payload };
//     case USER_SIGNIN_FAIL:
//       return { loading: false, error: action.payload };
//     default: return state;
//   }
// }

// export {
//   userSigninReducer
// }