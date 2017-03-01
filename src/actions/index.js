import { SIGNED_IN, SET_GOALS, SET_COMPLETED_GOALS } from '../constants';

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

export const setCompletedGoals = (completedGoals) => {
    const action = {
        type: SET_COMPLETED_GOALS,
        completedGoals
    };
    return action;
};
