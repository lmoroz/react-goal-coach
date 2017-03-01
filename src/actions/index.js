import { SIGNED_IN, SET_GOALS } from '../constants';

export const logUser = (email, uid) => {
    const action = {
        type: SIGNED_IN,
        email,
        uid
    };
    console.log('logUser action: ', action);
    return action;
};


export const setGoals = (goals) => {
    const action = {
        type: SET_GOALS,
        goals
    };
    return action;
};
