import { SET_COMPLETED_GOALS } from '../constants';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_COMPLETED_GOALS:
            return action.completedGoals;
        default:
            return state;
    }
};

export default reducer;
