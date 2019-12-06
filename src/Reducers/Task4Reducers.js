import *as ActionTypes from '../Action/types';

const initialState={ 
    number:1
    }
    export default (state=initialState,action)=>{
    switch(action.type)
    {
    case ActionTypes.Add:
    {
    return{...state,number:state.number+action.value};
    } 
    break;
    case ActionTypes.Sub:
    {
    return{...state,number:state.number-action.value};
    }
    break;
    case ActionTypes.Even:
    {
    if(state.number%2===0){
    return{...state,number:state.number+action.value};
    
    }
    // break;
    }
    default: return state;
    
    } 
    }
