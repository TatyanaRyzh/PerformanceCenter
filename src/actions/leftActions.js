import * as constants from "../constants/left"

export function getScroll(name) {
    return {
        type: constants.GET_SCROLL,
        payload: name
    };
}

export function getInfo(sost, i) {
    return {
        type: constants.GET_INFO,
        payload: !sost,
        index: i
    };
}