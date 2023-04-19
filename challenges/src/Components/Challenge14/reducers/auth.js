import { types } from "../types";

const initialState = {
    user: null,
    displayName:null,
  };
  
  export const authReducer = (state ={},action)=>{
    switch(action.type){
      case types.login:
        return{
          uid:action.payload.uid,
          name: action.payload.displayName
        };

      case types.logout:
        return initialState;
      default: return state;

    

    }
  }
  

  