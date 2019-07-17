const initialState = { email: null, password: null, team: null, premium: false, token: null };

const UserReducer = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case 'CONNECT':
            nextState = {
                ...state,
                email: action.email,
                password: action.password,
                token: action.token
            };
            return nextState || state;
        case 'UPDATE_TEAM':
            nextState = {
                ...state,
                team: action.team
            };
            return nextState || state;
        default:
            return state
    }
};

export default UserReducer;