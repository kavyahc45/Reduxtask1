import * as ActionTypes from '../Action/types';

const initialState = {
  D: 1
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.D_UP: {
      return { ...state, D: state.D + action.value }
    }
    
    
    default:
      return state;
  }
}