import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'

import * as constants from "../constants/styles"
import dxTagBox from "devextreme/ui/tag_box"
import * as rightActions from "../actions/rightActions"


class Product extends Component {

    componentDidMount() {
        this.tagbox = new dxTagBox(ReactDOM.findDOMNode(this.refs["tagBox"]), {
            placeholder: "Any",
            items: [
                "HD Video Player", //stub
                "SuperHD Video Player",
                "SuperPlasma 50",
                "SuperLED 50",
                "SuperLED 42"
            ]
        });
    }

    componentWillUpdate(nextProps, nextState) {
        (nextProps.right.clear != this.props.right.clear) && this.tagbox.reset();
    }

    render() {
        var cssClass = constants.RIGHT_FILTER;
        
        return <div className={cssClass}>
            <div className ={cssClass + "_text"}> Product: </div>
            <div className ={cssClass + "_element"}>
                <div ref="tagBox"></div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        right: state.right
    }
}

export default connect(mapStateToProps)(Product);