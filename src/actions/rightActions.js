import * as constants from "../constants/right"

export function getClear(name) {
    return {
        type: constants.GET_CLEAR,
        payload: !name
    };
}

export function getInfo(sost, i) {
    return {
        type: constants.GET_INFO,
        payload: !sost,
        index: i
    };
}