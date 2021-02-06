import * as ActionTypes from './ActionTypes';


export const Feedback = (state = {
  isLoading: true,
  errMess: null,
  feedback: []
}, action) => {
  switch (action.type) {
    case ActionTypes.POST_FEEDBACK:
      return { ...state, isLoading: false, errMess: null, feedback: action.payload };
    
    default:
      return state;
  }
}