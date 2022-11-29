import * as types from './actionType'
import axios from 'axios'
const token=localStorage.getItem("token")
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

const updateCartRequest = ()=>{
    return{
        type:types.UPDATE_CART_REQUEST
    }
}
const updateCartSuccess = (data)=>{
    return{
        type:types.UPDATE_CART_SUCCESS,data
    }
}
const updateCartFailure = ()=>{
    return{
        type:types.UPDATE_CART_FAILURE
    }
}

const deleteCartRequest = ()=>{
    return{
        type:types.DELETE_CART_REQUEST
    }
}
const deleteCartSuccess = (data)=>{
    return{
        type:types.DELETE_CART_SUCCESS,data
    }
}
const deleteCartFailure = ()=>{
    return{
        type:types.DELETE_CART_FAILURE
    }
}
export const updateCartData = (id,params)=>(dispatch)=>{
    dispatch(updateCartRequest())
    return axios.patch(`https://scary-tick-trench-coat.cyclic.app/cart/update/${id}`,params,{
        headers: { authorization : `Bearer ${token}` }
      }
      ).then((res)=>{
        console.log(res.data)
    }).then((dispatch(getCartData())))
    .catch((e)=>{
        dispatch(updateCartFailure())
    })
}

export const deleteCartData = (id)=>(dispatch)=>{
    dispatch(deleteCartRequest())
    return axios.delete(`https://scary-tick-trench-coat.cyclic.app/cart/delete/${id}`,{
        headers: { authorization : `Bearer ${token}` }
      })
    // .then((res)=>{ dispatch(deleteCartSuccess(res.data))
    // })
    .then(dispatch(getCartData()))
    .catch((e)=>{
        dispatch(deleteCartFailure())
    })
}

export const getCartData =  ()=>async(dispatch)=> {
        dispatch(handleCartRequest())
       await axios.get(`https://scary-tick-trench-coat.cyclic.app/cart/cartdata`,{
        headers: { authorization : `Bearer ${token}` }
      })
      .then((res)=>{return dispatch({type: types.GET_CART_SUCCESS,data:(res.data)})})
      
        .catch(e=>dispatch(handleCartFailure(e)))
}

