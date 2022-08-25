import { GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionType"

const initCart= {
    isLoading: false,
    isError: false,
    cartData: []
}

export const reducer =(state=initCart,action)=>{
    const {type,data} = action
    switch(type){
        case GET_CART_REQUEST:
            return {
                ...state,
                isLoading: true
            }

            case GET_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cartData: data,
                isError: false
            }

            case GET_CART_FAILURE:
            return {
                ...state,
                isError: false
            }



        default:
            return state
    }
}