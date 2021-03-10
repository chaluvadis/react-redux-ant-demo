import { SHOW_SHIFT_DRAWER, HIDE_SHIFT_DRAWER } from "./constant";

let defaultState = {
    showShiftModal: false,
    showConfigModal: false
};

const utilReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_SHIFT_DRAWER:
            return {
                ...state,
                showShiftModal: true
            };
        case HIDE_SHIFT_DRAWER:
            return {
                ...state,
                showShiftModal: false
            };
        default:
            return state;
    }
};

export default utilReducer;