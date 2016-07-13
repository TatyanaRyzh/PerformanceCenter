import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'

import * as leftActions from "../actions/leftActions"

class Headlines extends Component {

    render() {
        var postfixClass = this.props.scroll ? "-scroll" : "";
        return <div className="pc_headlines">
            <div className={"pc_headlines_name" + postfixClass}>Name</div>
            <div className={"pc_headlines_sparkline" + postfixClass}>Last Results</div>
            <div className={"pc_headlines_text" + postfixClass}>
                <div className="pc_headlines_time">Last Time</div>
                <div className="pc_headlines_place">Place</div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        scroll: state.left.scroll
    }
}

export default connect(mapStateToProps)(Headlines);