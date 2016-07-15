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
        var cssClass = constants.LEFT_BOX_CLASS,
            data = this.props.data,
            chart = data.dataForChart,
            postfixClass = data.info ? "-clicked" : "",
            competitors = Object.keys(chart[chart.length - 1]),
            index = competitors.indexOf("date"),
            times = [];

        competitors.splice(index, 1);
        for (var i = 0; i < competitors.length; i++) {
            times.push(chart[chart.length - 1][competitors[i]]);
        }

        function compareNumeric(a, b) {
            return a - b;
        }
        times.sort(compareNumeric);

        var place = function (times) {
            for (let i = 0; i < times.length; ++i) {
                if (chart[chart.length - 1].we === times[i]) return i + 1;
            }
        }

        return <div>
            <div className ={cssClass + postfixClass} onClick={::this.onBoxClick}>
            <div className= {cssClass + "_name-box"}>
                <div className= {cssClass + "_name-box_name"}>{data.name}</div>
                <div className= {cssClass + "_name-box_path"}>Platform => Product</div>
            </div>
            <div className={cssClass + "_sparkline"}  ref="sparkline"></div>
            <div className= {cssClass + "_result-box"}>
                <div className= {cssClass + "_result-box_time"}>{chart[chart.length - 1].we} ms</div>
                <div className= {cssClass + "_result-box_place"}>{place(times) }</div>
            </div>
        </div>
        { data.info ? (<div><ChartBox data={data} competitors={competitors}/></div>) : "" }
        </div >
    }
}

export default Box;