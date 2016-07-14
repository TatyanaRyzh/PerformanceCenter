import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'

import * as constants from "../constants/styles"

import dxChart from "devextreme/viz/chart"
import dxCheckBox from "devextreme/ui/check_box"
import dxTabs from "devextreme/ui/tabs"

var dataSource = [{
    year: 1997,
    smp: 263,
    mmp: 226,
    cnstl: 10,
}, {
        year: 1999,
        smp: 169,
        mmp: 256,
        cnstl: 66,
    }, {
        year: 2001,
        smp: 57,
        mmp: 257,
        cnstl: 143,
    }, {
        year: 2003,
        smp: 0,
        mmp: 163,
        cnstl: 127,
    }, {
        year: 2005,
        smp: 20,
        mmp: 103,
        cnstl: 36,
    }, {
        year: 2007,
        smp: 0,
        mmp: 91,
        cnstl: 3,
    }];

var dataTabs = [
    { text: "Week" },
    { text: "Mounth" },
    { text: "Half of Year" },
    { text: "Year" }
];


class ChartBox extends Component {

    componentDidMount() {
        this.chart = new dxChart(ReactDOM.findDOMNode(this.refs["chart"]), {
            dataSource: dataSource,
            commonSeriesSettings: {
                argumentField: "year",
                point: { 
                    visible: false
                }
            },
            animation: false,
            series: [
                { valueField: "smp", name: "SMP", width: 5 },
                { valueField: "mmp", name: "MMP" },
                { valueField: "cnstl", name: "Cnstl" },
            ],
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
            argumentAxis:{
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
                //format: "year",
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
            dataSource: dataTabs,
            selectedIndex: 0,
        });

    }

    render() {
        var cssClass = constants.LEFT_BOX_CHARTBOX;
        return <div className={cssClass}>
                <div className={cssClass + "-box_text"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ChartBox);