import { SIGNED_IN } from '../constants';

const initialState = {
    email: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNED_IN:
            return state;
        default:
            return state;
    }
};
export default reducer;
