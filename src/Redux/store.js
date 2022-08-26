
// NOTE: use this store variable to create a store.
import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from "redux";
  import thunk from "redux-thunk";
  import { reducer as ProductReducer} from "./ProductsReducer/reducer"
  import { reducer as ContactReducer } from "./ContactReducer/reducer"
  import {reducer as CartReducer} from "./CartReducer/reducer"
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const rootReducer = combineReducers({ 
    ProductReducer,
    ContactReducer,
<<<<<<< HEAD
=======
    CartReducer
>>>>>>> b3ac429d0247f54362ebc42fb90348bd6a761c5c
   });
  
  const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  
  export default store;
  
  
  // NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
  
  if (window.Cypress) {
    window.store = store;
  }

