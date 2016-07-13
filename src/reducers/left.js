import * as constants from "../constants/left"

const initialState = {
    scroll: false,
    tests: [{
        info: false,
        index: 0,
        name: "test1"
    }, {
        info: false,
        index: 1,
        name: "test2"
    }, {
        info: false,
        index: 2,
        name: "test3"
    }]
};

export default function left(state = initialState, action) {
    switch (action.type) {

        case constants.GET_SCROLL:
            return { ...state, scroll: action.payload }

        case constants.GET_INFO:
            state.tests[action.index].info = action.payload;
            return { ...state };

        default:
            return state
    }
}