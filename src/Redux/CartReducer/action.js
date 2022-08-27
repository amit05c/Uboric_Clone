import * as types from './actionType'
import axios from 'axios'
const handleCartRequest= ()=>{
    return {
        type:types.GET_CART_REQUEST
    }
}


const handleCartFailure= ()=>{
    return {
        type:types.GET_CART_FAILURE
    }
}

export const getCartData =  ()=>async(dispatch)=> {
        dispatch(handleCartRequest())
      await axios.get(`http://localhost:8080/cart`)
      .then((res)=>{return dispatch({type: types.GET_CART_SUCCESS,data:(res.data)})})
        .catch(e=>dispatch(handleCartFailure(e)))
}

