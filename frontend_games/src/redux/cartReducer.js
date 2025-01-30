// import { ADDTOCART } from "./actionType";

export const cartReducer = (state=[],action)=>{
    switch(action.type){
        case "ADDTOCART" :
            return [...state,action.payload] ;
         default:
            return state    ;
    }
}