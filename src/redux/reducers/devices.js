import * as actionTypes from "../action-types"
import dummyData from "./dummyData";

const initialState={
    products:[...dummyData()],
    display:[],
    tab:null,
}


const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SHOW_CATEGORY:
        const items = state.products.filter(item=>item.category===action.payload);
        return {
          ...state,display:[...items]
        };
      case actionTypes.SHOW_DEVICE_TAB:
        return {
          ...state,tab:action.payload
        };
      default:
        return state;
    } 
  };
  
  export default deviceReducer;