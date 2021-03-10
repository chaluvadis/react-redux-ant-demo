import { SHOW_SHIFT_DRAWER, HIDE_SHIFT_DRAWER } from "./constant";

export const show_shift_drawer = () => {
    return { type: SHOW_SHIFT_DRAWER };
};

export const hide_shift_drawer = () => {
    return { type: HIDE_SHIFT_DRAWER };
};
