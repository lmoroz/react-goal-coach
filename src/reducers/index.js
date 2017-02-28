import { SIGNED_IN } from '../constants';

let user = {
    email: null
};

const reducer = (state = user, action) => {
    const { email } = action;
    switch (action.type) {
        case SIGNED_IN:
            user = {
                email
            };
            return user;
        default:
            return state;
    }
};
export default reducer;
