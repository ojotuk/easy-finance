import * as actionTypes from "../action-types"

export const showCategory=(category)=>{
    return{
        type:actionTypes.SHOW_CATEGORY,
        payload:category
    }
}

export const showDeviceTab=(tab)=>{
    return{
        type:actionTypes.SHOW_DEVICE_TAB,
        payload:tab
    }
}
