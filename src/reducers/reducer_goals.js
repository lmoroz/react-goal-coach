import { SET_GOALS, SET_COMPLETED_GOALS } from '../constants';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_GOALS:
            return action.goals;
        case SET_COMPLETED_GOALS:
            return action.completedGoals;
        default:
            return state;
    }
};

export default reducer;
