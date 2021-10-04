import * as actionTypes from "../action-types"
import dummyData from "./dummyData";

const initialState={
    products:[...dummyData()],
    display:[]
}


const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SHOW_CATEGORY:
        const items = state.products.filter(item=>item.category===action.payload);
        return {
          ...state,display:[...items]
        };
      default:
        return state;
    } 
  };
  
  export default deviceReducer;