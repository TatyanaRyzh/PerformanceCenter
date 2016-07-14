import * as constants from "../constants/right"

export function getClear(name) {
    return {
        type: constants.GET_CLEAR,
        payload: !name
    };
}
