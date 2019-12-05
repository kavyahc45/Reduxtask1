import * as  ActionTypes from './types';

export function updateA(B) {
  return function (dispatch) {
    dispatch({
      type: "A_UP", value: B,
    
    });
  }
}

export function updateB(A) {
    return function (dispatch) {
      dispatch({
        type: "B_UP", value: A,
      
      });
    }
  }
  
