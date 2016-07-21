import React, { Component } from "react"
import { connect } from "react-redux"
import ReactDOM from "react-dom"

import * as constants from "../constants/styles"

import dxChart from "devextreme/viz/chart"
import dxCheckBox from "devextreme/ui/check_box"
import dxTabs from "devextreme/ui/tabs"

function getMonthName(numberOfMonth) {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Аug", "Sept", "Oct", "Nov", "Dec" ];
    return month[numberOfMonth];
}

class ChartBox extends Component {

    componentDidMount() {
        var that = this,
            data = that.props.data,
            dataForChart = data.dataForChart,
            competitors = that.props.competitors,
            isCompetitorsVisible = false,
            series = [{ valueField: "we", name: "We", width: 5 }];

        competitors.forEach(function (competitor) {
            competitor !== "we" && series.push({ valueField: competitor, name: competitor });
        });

        that.chart = new dxChart(ReactDOM.findDOMNode(that.refs["chart"]), {
            dataSource: dataForChart.slice(dataForChart.length - 7, dataForChart.length),
            commonSeriesSettings: {
                argumentField: "date",
                point: {
                    visible: false
                }
            },
            animation: false,
            series: series,
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
                tickInterval: "day",
                label: {
                    customizeText: function (arg) {
                        return arg.value.getDate() + "/" + getMonthName(arg.value.getMonth());
                    }
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

        that.checkBox = new dxCheckBox(ReactDOM.findDOMNode(that.refs["checkBox"]), {
            value: true,
            text: "Competitors",
            onValueChanged: function () {
                var actionName = that.checkBox.option("value") ? "show" : "hide";

                that.chart.getAllSeries().forEach(function (series) {
                    series.name !== "We" && series[actionName]();
                });
            }
        });

        that.tabs = new dxTabs(ReactDOM.findDOMNode(that.refs["tabs"]), {
            dataSource: [
                { text: "Week" },
                { text: "Month" },
                { text: "Half of Year" },
                { text: "Year" }
            ],
            selectedIndex: 0,
            onItemClick: function (e) {
                var period = 7,
                    tickInterval = "day",
                    customizeTextFunc = function (arg) {
                        return arg.value.getDate() + "/" + getMonthName((arg.value.getMonth()));
                    };

                switch (e.itemIndex) {
                    case 1:
                        period = 30;
                        customizeTextFunc = function (arg) {
                            return arg.value.getDate() + "/" + getMonthName((arg.value.getMonth())) + "/" + arg.value.getFullYear();
                        }
                        break;
                    case 2:
                        period = 180;
                        tickInterval = "month";
                        customizeTextFunc = function (arg) {
                            return arg.value.getDate() + "/" + getMonthName((arg.value.getMonth())) + "/" + arg.value.getFullYear();
                        }
                        break;
                    case 3:
                        period = 365;
                        tickInterval = "month";
                        customizeTextFunc = function (arg) {
                            return getMonthName((arg.value.getMonth())) + "/" + arg.value.getFullYear();
                        };
                        break;
                }

                that.chart.option("dataSource", dataForChart.slice(dataForChart.length - period, dataForChart.length));
                that.chart.option("argumentAxis", {
                    tickInterval: tickInterval,
                    label: {
                        customizeText: customizeTextFunc
                    }
                })
            }
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