const initialState = { pseudo: '', team: '', premium: '' };

function user(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'UPDATE_PSEUDO':
            nextState = {
                ...state,
                pseudo: action.pseudo
            };
            return nextState || state;
        default:
            return state
    }
}
export default user