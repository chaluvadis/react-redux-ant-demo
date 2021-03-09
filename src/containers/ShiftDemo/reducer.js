import { SHOW_CONFIG_DRAWER, HIDE_CONFIG_DRAWER, SHOW_SHIFT_DRAWER, HIDE_SHIFT_DRAWER } from "./constant";

let defaultState = {
    showShiftModal: false,
    showConfigModal: false
};

const shiftReducer = (state = defaultState, action) => {
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
        case SHOW_CONFIG_DRAWER:
            return {
                ...state,
                showConfigModal: true
            };
        case HIDE_CONFIG_DRAWER:
            return {
                ...state,
                showConfigModal: false
            };
        default:
            return state;
    }
};

export default shiftReducer;