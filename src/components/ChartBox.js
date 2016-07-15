import React, { Component } from "react"
import { connect } from "react-redux"
import ReactDOM from "react-dom"

import * as constants from "../constants/styles"

import dxChart from "devextreme/viz/chart"
import dxCheckBox from "devextreme/ui/check_box"
import dxTabs from "devextreme/ui/tabs"


class ChartBox extends Component {

    componentDidMount() {
        var data = this.props.data,
            competitors = this.props.competitors,
            series_test = [{ valueField: "we", name: "We", width: 5 }];

        //SERIES
        for (let i = 0; i < competitors.length; ++i) {
            if (competitors[i] === "we") continue;
            series_test.push({ valueField: competitors[i], name: competitors[i] })
        }

        this.chart = new dxChart(ReactDOM.findDOMNode(this.refs["chart"]), {
            dataSource: data.dataForChart,
            commonSeriesSettings: {
                argumentField: "date",
                point: {
                    visible: false
                }
            },
            animation: false,
            series: series_test,
            legend: {
                verticalAlignment: "bottom",
                horizontalAlignment: "center",
                itemTextPosition: "right",
                border: {
                    visible: true
                }
            },
            onSeriesClick: function (e) {
                var series = e.target;
                series.isVisible() ? series.hide() : series.show();
            },
            argumentAxis: {
                argumentType: "datetime",
                label: {
                    format: "year"
                }
            },
            valueAxis: {
                visible: true,
                minorGrid: {
                    visible: true
                },
                minorTickCount: 5
            },
            tooltip: {
                enabled: true,
                customizeTooltip: function (arg) {
                    return {
                        text: arg.argumentText + "\n" + arg.seriesName + "\n<b>" + arg.valueText + "</b>"
                    };
                }
            }
        });

        this.checkBox = new dxCheckBox(ReactDOM.findDOMNode(this.refs["checkBox"]), {
            value: true,
            text: "Competitors"
        });

        this.tabs = new dxTabs(ReactDOM.findDOMNode(this.refs["tabs"]), {
            dataSource: [
                { text: "Week" },
                { text: "Mounth" },
                { text: "Half of Year" },
                { text: "Year" }
            ],
            selectedIndex: 0,
        });

    }

    render() {
        var data = this.props.data,
            cssClass = constants.LEFT_BOX_CHARTBOX_CLASS;

        return <div className={cssClass}>
            <div className={cssClass + "_text"}>
                {data.description}
            </div>
            <div className={cssClass + "_buttons"}>
                <div ref="tabs"></div>
            </div>
            <div className={cssClass + "_chart"} ref="chart"></div>
            <div className={cssClass + "_check"}>
                <div ref="checkBox"></div>
            </div>
        </div>
    }
}

export default ChartBox;