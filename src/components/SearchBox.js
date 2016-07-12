import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'

import dxTextBox from "devextreme/ui/text_box"

class SearchBox extends Component {

    componentDidMount() {
        this.textbox = new dxTextBox(ReactDOM.findDOMNode(this.refs["textBox"]), {
            placeholder: "Type Keywords..."
        });
    }

    render() {
        return <div className="pc_right_filter">
            <div className ="pc_right_filter_text"> Search: </div>
            <div  className ="pc_right_filter_element">
                <div ref="textBox"></div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(SearchBox);