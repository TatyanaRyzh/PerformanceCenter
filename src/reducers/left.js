import * as constants from "../constants/left"

const initialState = {
    scroll: false
};

export default function left(state = initialState, action) {
    switch (action.type) {

        case constants.GET_SCROLL:
            return { ...state, scroll: action.payload }

        default:
            return state
    }
}