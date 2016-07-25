import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import { bindActionCreators } from "redux"

import * as constants from "../constants/styles"
import dxTagBox from "devextreme/ui/tag_box"
import * as rightActions from "../actions/rightActions"


class Platform extends Component {

    componentDidMount() {
        var that = this,
            platforms = Object.keys(that.props.right.data),
            product = [];

        platforms.sort(function (a, b) {
            if (b < a) {
                return 1;
            }
            if (b > a) {
                return -1;
            }
            return 0;
        });
        
        that.tagbox = new dxTagBox(ReactDOM.findDOMNode(that.refs["tagBox"]), {
            placeholder: "Any",
            items: platforms,
            onValueChanged: function (e) {
                that.props.rightActions.setRightPlatforms(e.value);
            }
        });
    }

    componentWillUpdate(nextProps) {
        (nextProps.right.clear != this.props.right.clear) && this.tagbox.reset(); /*this.tagbox.option("selectedItems", []);*/
    }

    render() {
        var cssClass = constants.RIGHT_FILTER_CLASS;

        return <div className={cssClass}>
            <div className ={cssClass + "_text"}> Platform: </div>
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

function mapDispatchToProps(dispatch) {
    return {
        rightActions: bindActionCreators(rightActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Platform);

