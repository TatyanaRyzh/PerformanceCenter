import React, { Component } from "react"
import { connect } from "react-redux"
import ReactDOM from "react-dom"
import { bindActionCreators } from "redux"

import * as constants from "../constants/styles"

import dxButton from "devextreme/ui/button"
import * as rightActions from "../actions/rightActions"

class Buttons extends Component {

    componentDidMount() {
        var that = this,
            props = that.props,
            rightActions = props.rightActions,
            right = props.right;

        new dxButton(ReactDOM.findDOMNode(that.refs["clear"]), {
            text: "Clear",
            onClick: function () {
                rightActions.getClear(right.clear);
            }
        }),

            new dxButton(ReactDOM.findDOMNode(that.refs["apply"]), {
                text: "Apply",
                onClick: function () {
                    rightActions.getApply(right.apply);
                }

            });
    }

    render() {
        var cssClass = constants.RIGHT_BUTTONS_CLASS;

        return <div className={cssClass}>
            <div className={cssClass + "_name"} ref="clear"></div>
            <div className={cssClass + "_name " + cssClass + "_apply" } ref="apply" ></div>
        </div>
    }
}


function mapStateToProps(state) {
    return {
        right: state.right
    };
}

function mapDispatchToProps(dispatch) {
    return {
        rightActions: bindActionCreators(rightActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Buttons);