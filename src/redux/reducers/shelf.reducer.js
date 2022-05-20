import { combineReducers } from 'redux';


const shelfReducer = (state= [],action) => {
  console.log('reducer payload--->', action.payload)
    switch (action.type) {
        case 'SET_SHELF':
          return action.payload;
        default:
          return state;
      }

}

export default shelfReducer;