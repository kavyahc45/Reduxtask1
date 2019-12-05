import * as ActionTypes from '../Action/types';

const initialState = {
  B: 1
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.B_UP: {
      return { ...state, B: state.B + action.value }
    }
    
    
    default:
      return state;
  }
}