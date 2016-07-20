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
        debugger;
        var props = this.props;
        props.getInfo(props.data.info, props.data.index, props.data.platform, props.data.product);
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

    nth(d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    colorPlace(d) {
        switch (d) {
            case 1: return "_st";
            case 2: return "_nd";
            default: return "_th";
        }
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
                <div className= {cssClass + "_name-box_path"}>{data.platform} => {data.product}</div>
            </div>
            <div className={cssClass + "_sparkline"}  ref="sparkline"></div>
            <div className= {cssClass + "_result-box"}>
                <div className= {cssClass + "_result-box_time"}>{lastResult.we} ms</div>
                <div className= {cssClass + "_result-box_place" + this.colorPlace(place)}>{place + this.nth(place) }  </div>
            </div>
        </div>
        { data.info ? (<div><ChartBox data={data} competitors={competitors}/></div>) : "" }
        </div >
    }
}

export default Box;