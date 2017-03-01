import { SIGNED_IN } from '../constants';

const initialState = {
    email: null,
    uid: null
};

const reducer = (state = initialState, action) => {
    const {uid, email} = action;
    console.log(action.type, ' reducer: action = ', state);
    switch (action.type) {
        case SIGNED_IN:
            return {
                uid,
                email
            };
        default:
            return state;
    }
};
export default reducer;
