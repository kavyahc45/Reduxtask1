import * as ActionTypes from '../Action/types';

const initialState = {
  A: 1
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.A_UP: {
      return { ...state, A: state.A + action.value }
    }
    
    
    default:
      return state;
  }
}