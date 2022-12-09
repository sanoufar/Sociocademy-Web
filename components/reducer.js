export const initialState = {
    user: null,
    now_playing: null,
    classroom: null
};

export const actionTypes = {
    SET_USER: "SET_USER",
    SET_NOW_PLAYING: "SET_NOW_PLAYING",
    SET_CLASSROOM: "SET_CLASSROOM"
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
            };
        case actionTypes.SET_CLASSROOM:
            return {
                ...state,
                classroom: action.classroom
            }
        default:
            return state;
    }
};

export default reducer;