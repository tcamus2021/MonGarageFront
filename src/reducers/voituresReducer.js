import { createReducer } from 'redux-create-reducer';
import { GET_VOITURES, GET_VOITURES_SUCCESS } from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    error: false
};

createReducer(initialState, {
    [GET_VOITURES]: state => {
     return {
         isLoading: true,
         error: false
     }
    },
    [GET_VOITURES_SUCCESS]: state => {
        return {
            isLoading: false,
            error: false
        }
    }
});

export default createReducer;