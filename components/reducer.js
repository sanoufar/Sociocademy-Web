export const initialState = {
    user: null,
    now_playing: null
};

export const actionTypes = {
    SET_USER: "SET_USER",
    SET_NOW_PLAYING: "SET_NOW_PLAYING"
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.SET_NOW_PLAYING:
            return {
                ...state,
                now_playing: action.now_playing
            }
        default:
            return state;
    }
};

export default reducer;