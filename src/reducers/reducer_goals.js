import { SET_GOALS, CHECK_GOAL } from '../constants';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_GOALS:
            return action.goals;
        case CHECK_GOAL:
            return action.goals;
        default:
            return state;
    }
};

export default reducer;
