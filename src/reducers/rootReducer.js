import { createReducer } from 'redux-create-reducer';
import { LAUNCH_APP } from '../constants/actionTypes';

const initialState = {
    error: false
};

createReducer(initialState, {
    [LAUNCH_APP]: (state) => {
     return {
      ...state
     }
    }
});

export default createReducer;