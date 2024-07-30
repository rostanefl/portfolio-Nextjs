import { combineReducers } from 'redux';

const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  example: exampleReducer,

});

export default rootReducer;
