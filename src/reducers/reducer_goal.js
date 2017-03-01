import { SET_GOALS } from '../constants';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_GOALS:
            return action.goals;
        default:
            return state;
    }
};

export default reducer;
