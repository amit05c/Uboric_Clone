import {legacy_createStore,applyMiddleware,combineReducers} from "redux"

import thunk from 'redux-thunk'
import { reducer as ProductReducer } from "./ProductsReducer/reducer"
import {reducer as CartReducer} from "./CartReducer/reducer"


const rootReducer= combineReducers({ProductReducer,CartReducer})
export const store= legacy_createStore(rootReducer,applyMiddleware(thunk))