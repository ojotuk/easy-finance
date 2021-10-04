import * as actionTypes from "../action-types"

const initialState={
    auth:null,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SIGN_OUT:
        localStorage.removeItem("user")
        return {
          ...state,auth:null,isLogged:false,token:null
        };
      default:
        return state;
    } 
  };
  
  export default authReducer;