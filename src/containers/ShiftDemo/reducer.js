import { SET_SHIFT_DATA, SET_SELECTED_ROW } from "./constant";
let defaultState = {
    shift: [],
    selectedRow: null
};

const shiftReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SHIFT_DATA:
            return {
                ...state,
                shift: action.payload
            };
        case SET_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        default:
            return state;
    }
};

export default shiftReducer;