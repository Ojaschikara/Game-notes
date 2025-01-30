import { combineReducers, legacy_createStore } from "redux";
import { countReducer } from "./countReducer";
import { cartReducer } from "./cartReducer";


const rootReducer = combineReducers({
    count: countReducer,
    cart : cartReducer,
})
export const store = legacy_createStore(rootReducer);