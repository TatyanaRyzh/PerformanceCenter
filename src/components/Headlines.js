import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'

import * as constants from "../constants/styles"
import * as leftActions from "../actions/leftActions"

class Headlines extends Component {

    render() {
        var cssClass = constants.HEADLINES,
            postfixClass = this.props.scroll ? "-scroll" : "";

        return <div className={cssClass}>
            <div className={cssClass + "_name" + postfixClass}>Name</div>
            <div className={cssClass + "_sparkline" + postfixClass}>Last Results</div>
            <div className={cssClass + "_text" + postfixClass}>
                <div className={cssClass + "_time"}>Last Time</div>
                <div className={cssClass + "_place"}>Place</div>
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