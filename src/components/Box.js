import React, { Component } from "react"
import { connect } from "react-redux"
import ReactDOM from "react-dom"
import { bindActionCreators } from "redux"

import * as leftActions from "../actions/leftActions"
import * as constants from "../constants/styles"

import ChartBox from "../components/ChartBox"
import dxSparkline from "devextreme/viz/sparkline"

class Box extends Component {
    onBoxClick() {
        var props = this.props;
        props.getInfo(props.data.info, props.data.index);
    }

    componentDidMount() {
        this.sparkline = new dxSparkline(ReactDOM.findDOMNode(this.refs["sparkline"]), {
            dataSource: this.props.data.dataForChart,
            argumentField: "date",
            valueField: "we",
            showMinMax: true,
            tooltip: {
                enabled: false
            }
        });
    }

    render() {
        var data = this.props.data,
            cssClass = constants.LEFT_BOX_CLASS,
            postfixClass = data.info ? "-clicked" : "",
            dataForChart = data.dataForChart,
            lastResult = dataForChart[dataForChart.length - 1],
            competitors = Object.keys(lastResult),
            msArray = [],
            place;

        competitors.splice(competitors.indexOf("date"), 1);
        for (var i = 0; i < competitors.length; i++) {
            msArray.push(lastResult[competitors[i]]);
        }

        msArray.sort(function (a, b) { return a - b; });
        place = msArray.indexOf(lastResult.we) + 1;

        return <div>
            <div className ={cssClass + postfixClass} onClick={:: this.onBoxClick}>
            <div className= {cssClass + "_name-box"}>
                <div className= {cssClass + "_name-box_name"}>{data.name}</div>
                <div className= {cssClass + "_name-box_path"}>Platform => Product</div>
            </div>
            <div className={cssClass + "_sparkline"}  ref="sparkline"></div>
            <div className= {cssClass + "_result-box"}>
                <div className= {cssClass + "_result-box_time"}>{lastResult.we} ms</div>
                <div className= {cssClass + "_result-box_place"}>{ place }</div>
            </div>
        </div>
        { data.info ? (<div><ChartBox data={data} competitors={competitors}/></div>) : "" }
        </div >
    }
}

export default Box;