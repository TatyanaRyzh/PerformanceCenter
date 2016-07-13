import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import { bindActionCreators } from "redux"

import * as leftActions from "../actions/leftActions"
import Box from "../components/Box"


class Left extends Component {

    componentDidUpdate() {
        var that = this, 
            elem = ReactDOM.findDOMNode(that.refs["pc_left1"]),
        	isScroll = elem.offsetWidth > elem.scrollWidth;

        (isScroll != that.props.left.scroll) && that.props.leftActions.getScroll(isScroll);
    }

    render() {
        var that = this,
            data = that.props.left.tests,
            boxTemplate;

        if (data.length) {
            boxTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <Box data={item} getInfo={that.props.leftActions.getInfo}/>
                    </div>
                )
            });
        } else {
            boxTemplate = <p>No items...</p>
        }

        return <div className="pc_left" ref="pc_left1">
            {boxTemplate}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        left: state.left
    };
}

function mapDispatchToProps(dispatch) {
    return {
        leftActions: bindActionCreators(leftActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Left);