import { SHOW_CONFIG_DRAWER, HIDE_CONFIG_DRAWER, SHOW_SHIFT_DRAWER, HIDE_SHIFT_DRAWER } from "./constant";

export const show_shift_drawer = () => {
    return { type: SHOW_SHIFT_DRAWER };
};

export const hide_shift_drawer = () => {
    return { type: HIDE_SHIFT_DRAWER };
};

export const show_config_drawer = () => {
    return { type: SHOW_CONFIG_DRAWER };
};

export const hide_config_drawer = () => {
    return { type: HIDE_CONFIG_DRAWER };
};