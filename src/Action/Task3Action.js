import * as  ActionTypes from './types';

export function updateA(C) {
  return function (dispatch) {
    dispatch({
      type: "A_UP", value: C,
    
    });
  }
}

export function updateB(D) {
    return function (dispatch) {
      dispatch({
        type: "B_UP", value: D,
      
      });
    }
  }
  
  export function updateC(A) {
    return function (dispatch) {
      dispatch({
        type: "C_UP", value: A,
      
      });
    }
  }

  export function updateD(B) {
    return function (dispatch) {
      dispatch({
        type: "D_UP", value: B,
      
      });
    }
  }
  