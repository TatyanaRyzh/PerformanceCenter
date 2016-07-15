import * as constants from "../constants/right"
import mainData from "./data"

//var data=mainData;
const initialState = {
    clear: false,
    tests: [{
        info: false,
        index: 0,
        name: "test1",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
        dataForChart: [{
            date: 1997,
            we: 263,
            competitor1: 226,
            competitor2: 10,
            competitor3: 4
        }, {
                date: 1999,
                we: 169,
                competitor1: 256,
                competitor2: 66,
                competitor3: 8
            }, {
                date: 2001,
                we: 57,
                competitor1: 257,
                competitor2: 143,
                competitor3: 16
            }, {
                date: 2003,
                we: 300,
                competitor1: 163,
                competitor2: 127,
                competitor3: 32
            }, {
                date: 2005,
                we: 20,
                competitor1: 103,
                competitor2: 36,
                competitor3: 64
            }, {
                date: 2007,
                we: 101,
                competitor2: 3,
                competitor1: 91,
                competitor3: 128
            }]
    }, {
            info: false,
            index: 1,
            name: "test2",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of",
            dataForChart: [{
                date: 1997,
                we: 248,
                competitor1: 298,
                competitor2: 9,
            }, {
                    date: 1998,
                    we: 172,
                    competitor1: 250,
                    competitor2: 60,
                }, {
                    date: 1999,
                    we: 60,
                    competitor1: 260,
                    competitor2: 153,
                }, {
                    date: 2001,
                    we: 50,
                    competitor1: 184,
                    competitor2: 127,
                }, {
                    date: 2005,
                    we: 20,
                    competitor1: 104,
                    competitor2: 39,
                }, {
                    date: 2007,
                    we: 85,
                    competitor1: 99,
                    competitor2: 300,
                }]
        }, {
            info: false,
            index: 2,
            name: "test3",
            description: "But I must explain",
            dataForChart: [{
                date: 1990,
                we: 260,
                competitor1: 226,
                competitor2: 10,
                competitor3: 55,
                competitor4: 68
            }, {
                    date: 1998,
                    we: 110,
                    competitor1: 255,
                    competitor2: 77,
                    competitor3: 69,
                    competitor4: 110
                }, {
                    date: 2004,
                    we: 160,
                    competitor1: 265,
                    competitor2: 150,
                    competitor3: 34,
                    competitor4: 99
                }, {
                    date: 2007,
                    we: 55,
                    competitor1: 73,
                    competitor2: 127,
                    competitor3: 22,
                    competitor4: 159
                }, {
                    date: 2005,
                    we: 120,
                    competitor1: 103,
                    competitor2: 36,
                    competitor3: 225,
                    competitor4: 90
                }, {
                    date: 2008,
                    competitor1: 95,
                    we: 145,
                    competitor2: 120,
                    competitor3: 34,
                    competitor4: 22
                }]
        }]
}


/*const initialState = {
    clear: false,
    data:data
}
*/

export default function right(state = initialState, action) {
    switch (action.type) {

        case constants.GET_CLEAR:
            return { ...state, clear: action.payload }

        case constants.GET_INFO:
            state.tests[action.index].info = action.payload;
            return { ...state };

        default:
            return state
    }
}