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
    info: false,
    sort: false
}

export default function right(state = initialState, action) {
    switch (action.type) {

        case constants.GET_CLEAR:
            Object.keys(state.data).forEach(function (platform) {
                Object.keys(state.data[platform]).forEach(function (product) {
                    Object.keys(state.data[platform][product]).forEach(function (test) {
                        state.data[platform][product][test].info = false;
                    })
                })
            });

            return { ...state, clear: action.payload, sort: false }

        case constants.GET_APPLY:
            let platforms,
                products;

            platforms = state.platforms.length ? state.platforms : Object.keys(state.data);

            platforms.forEach(function (platform) {
                products = state.products.length ? state.products : Object.keys(state.data[platform]);

                products.forEach(function (product) {
                    if (state.data[platform][product]) {
                        Object.keys(state.data[platform][product]).forEach(function (test) {
                            state.data[platform][product][test].info = false;
                        });
                    }

                });
            });
            return { ...state, apply: action.payload, sort: false }

        case constants.GET_INFO://todo
            state.data[action.platform][action.product][action.index].info = action.payload;
            return { ...state };

        case constants.SET_RIGHT_PLAT:
            return { ...state, platforms: action.payload }

        case constants.SET_RIGHT_PROD:
            return { ...state, products: action.payload }

        case constants.SET_LEFT_SORT:
            return { ...state, sort: action.payload }

        default:
            return state
    }
}