import { SET_SHIFT_DATA, SET_SELECTED_ROW } from "./constant";
const shift = [
    {
        "key": 1,
        "id": 1,
        "assignment": "Assignment_12",
        "shift": "Buhasa_1",
        "nextShift": "Buhasa_2",
        "prevShift": "",
        "startTime": "10-03-2021",
        "endTime": "10-03-2021",
        "status": "Active"
    },
    {
        "key": 2,
        "id": 2,
        "assignment": "Assignment_13",
        "shift": "Buhasa_2",
        "nextShift": "Buhasa_3",
        "prevShift": "Buhasa_1",
        "startTime": "10-03-2021",
        "endTime": "10-03-2021",
        "status": "Active"
    },
    {
        "key": 3,
        "id": 3,
        "assignment": "Assignment_14",
        "shift": "Buhasa_3",
        "nextShift": "Buhasa_4",
        "prevShift": "Buhasa_2",
        "startTime": "10-03-2021",
        "endTime": "10-03-2021",
        "status": "Active"
    },
    {
        "key": 4,
        "id": 4,
        "assignment": "Assignment_15",
        "shift": "Buhasa_4",
        "nextShift": "Buhasa_5",
        "prevShift": "Buhasa_3",
        "startTime": "10-03-2021",
        "endTime": "10-03-2021",
        "status": "Active"
    },
    {
        "key": 5,
        "id": 5,
        "assignment": "Assignment_16",
        "shift": "Buhasa_5",
        "nextShift": "Buhasa_6",
        "prevShift": "Buhasa_4",
        "startTime": "10-03-2021",
        "endTime": "10-03-2021",
        "status": "Active"
    }
];
export const set_shift_data = () => {
    return { type: SET_SHIFT_DATA, payload: shift };
};

export const set_selected_row = (row) => {
    return { type: SET_SELECTED_ROW, payload: row };
};