// {
//     type:'' ,
//     payload: ''
// }
import {UserActionTypes} from './user.types'

const INITIAL_STATE = {
    currentUser: ''
};

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            console.log(action.payload)
            return {
                ...state,
                currentUser: action.payload
            };

        default:
            return state;
    }
};