import *as ActionTypes from './types';

export function addition(){
    return function (dispatch) {
      dispatch({
        type:'Add',value: 1
      
      });
    }
  }

  export function substraction(){
    return function (dispatch) {
      dispatch({
        type:'Sub', value: 1
      
      });
    }
  }

  export function even_increment(){
    return function (dispatch) {
      dispatch({
        type:'Even', value: 1
      
      });
    }
  }
  
  