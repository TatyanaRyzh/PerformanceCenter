import * as constants from "../constants/right"
import * as mainData from "./data"

var data = mainData.mainData;

const initialState = {
    clear: false,
    apply: false,
    platforms: [],
    products: [],
    tags: [],
    data: data,
    info: false
}

export default function right(state = initialState, action) {
    switch (action.type) {

        case constants.GET_CLEAR:
            return { ...state, clear: action.payload }

        case constants.GET_APPLY:
            return { ...state, apply: action.payload }

        case constants.GET_INFO://todo
            state.data[action.platform][action.product][action.index].info = action.payload;
            return { ...state };

        case constants.SET_RIGHT_PLAT:
            return { ...state, platforms: action.payload }

        case constants.SET_RIGHT_PROD:
            return { ...state, products: action.payload }

        default:
            return state
    }
}