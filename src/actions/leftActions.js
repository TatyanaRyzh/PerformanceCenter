import * as constants from "../constants/left"

export function getScroll(name) {
    return {
        type: constants.GET_SCROLL,
        payload: name
    };
}

