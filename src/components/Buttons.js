import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'

import dxButton from "devextreme/ui/button"


export default class Buttons extends Component {

    componentDidMount() {
        new dxButton(ReactDOM.findDOMNode(this.refs["clear"]), {
            text: 'Clear'
        }),

        new dxButton(ReactDOM.findDOMNode(this.refs["apply"]), {
            text: 'Apply'
        });
    }

    render() {
        return <div className="pc_right_buttons">
            <div className="pc_right_buttons_name" ref="clear"></div>
            <div className="pc_right_buttons_name pc_right_buttons_apply" ref="apply" ></div>
        </div>
    }
}


/*function mapActions(actions) {

}

export default connect(mapActions)(Buttons);*/