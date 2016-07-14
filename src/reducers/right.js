import * as constants from "../constants/right"

const initialState = {
    clear: false
}

export default function right(state = initialState, action) {
    switch (action.type) {

        case constants.GET_CLEAR:
            return { ...state, clear: action.payload }

        default:
            return state
    }
}