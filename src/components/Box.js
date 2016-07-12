import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'

import dxSparkline from "devextreme/viz/sparkline"

//stub
var data1 = [{
        month: 1,
        2010: 1115
    }, {
        month: 2,
        2010: 1099
    }, {
        month: 3,
        2010: 1114
    }, {
        month: 4,
        2010: 1150
    }, {
        month: 5,
        2010: 1205
    }, {
        month: 6,
        2010: 1235
    }, {
        month: 7,
        2010: 1193
    }, {
        month: 8,
        2010: 1220
    }, {
        month: 9,
        2010: 1272
    }, {
        month: 10,
        2010: 1345
    }, {
        month: 11,
        2010: 1370
    }, {
        month: 12,
        2010: 1392
}];

class Box extends Component {

    componentDidMount() {
        this.sparkline = new dxSparkline(ReactDOM.findDOMNode(this.refs["sparkline"]), {
            dataSource: data1,
            argumentField: "month",
            valueField: "2010",
            type: "line",
            showMinMax: true,
            tooltip: {
                format: "currency"
            }
        }); 
    }

    render() {
        return <div className = "pc_left_box">
                <div className= "pc_left_box_name-box">
                    <div className= "pc_left_box_name-box_name">Chart with 1000 points</div>
                    <div className= "pc_left_box_name-box_path">Platform => Product</div>
                </div>
                <div className="pc_left_box_sparkline"  ref="sparkline"></div>
                <div className= "pc_left_box_result-box">
                    <div className= "pc_left_box_result-box_time">time</div>
                    <div className= "pc_left_box_result-box_place">place</div>
                </div>
            </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Box);