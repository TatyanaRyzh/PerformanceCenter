import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'

import dxTagBox from "devextreme/ui/tag_box"


class TagsBox extends Component {

    componentDidMount() {
        this.tagbox = new dxTagBox(ReactDOM.findDOMNode(this.refs["tagBox"]), {
            items: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                "SuperLED 50",
                "SuperLED 42"
            ]
        });
    }

    render() {
        return <div className="pc_right_filter">
            <div className ="pc_right_filter_text"> Tags: </div>
            <div className ="pc_right_filter_element">
                <div  ref="tagBox"></div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(TagsBox);