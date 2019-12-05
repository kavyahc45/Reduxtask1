import * as ActionTypes from '../Action/types';

const initialState = {
  C: 1
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.C_UP: {
      return { ...state, C: state.C + action.value }
    }
    
    
    default:
      return state;
  }
}