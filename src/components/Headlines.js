import React, { Component } from "react"
import { connect } from "react-redux"
import ReactDOM from "react-dom"
import { bindActionCreators } from "redux"

import * as constants from "../constants/styles"
import * as rightActions from "../actions/rightActions"

function cssArrow(state) {
    switch (state) {
        case 0:
            return "-right";
        case 1:
            return "-bottom";
        case -1:
            return "-top";
    }
}

class Headlines extends Component {
    onNameClick() {
        var props = this.props;
        props.rightActions.setSort(props.right.sort);
    }

    render() {
        var cssClass = constants.HEADLINES_CLASS,
            postfixClass = this.props.scroll ? "-scroll" : "",
            sort = this.props.right.sort,
            state = 0;

        if (sort !== 0) {
            state = sort ? 1 : -1;
        }

        return <div className={cssClass}>
            <div className={cssClass + "_name" + postfixClass}>
                <div className={cssClass + "_name_sort"} onClick={::this.onNameClick}>
                    <div className={cssClass + "_name_sort-name"}>Name</div>
                    <div className={cssClass + "_name_sort-hint" + cssArrow(state) }> </div>
                </div>
        </div >
            <div className={cssClass + "_sparkline" + postfixClass}>Last Results</div>
            <div className={cssClass + "_text" + postfixClass}>
                <div className={cssClass + "_time"}>Last Time</div>
                <div className={cssClass + "_place"}>Place</div>
            </div>
        </div >
    }
}

function mapStateToProps(state) {
    return {
        right: state.right,
        scroll: state.left.scroll
    }
}
function mapDispatchToProps(dispatch) {
    return {
        rightActions: bindActionCreators(rightActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Headlines);
