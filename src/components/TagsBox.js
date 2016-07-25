import React, { Component } from "react"
import { connect } from "react-redux"
import ReactDOM from "react-dom"
import { bindActionCreators } from "redux"

import * as constants from "../constants/styles"
import dxTagBox from "devextreme/ui/tag_box"
import * as rightActions from "../actions/rightActions"


class TagsBox extends Component {

    componentDidMount() {
        
        var that = this,
            data = that.props.right.data,
            platforms = Object.keys(data);

        that.tags = [];
        platforms.forEach(function (platform) {
            Object.keys(data[platform]).forEach(function (product) {
                Object.keys(data[platform][product]).forEach(function (test) {
                    data[platform][product][test].tags.forEach(function (tag) {
                        if (that.tags.indexOf(tag) === -1) {
                            that.tags.push(tag);
                        }
                    });
                })
            });
        });

        that.tagbox = new dxTagBox(ReactDOM.findDOMNode(that.refs["tagBox"]), {
            placeholder: "Any",
            items: that.tags,
            /*onValueChanged: function (e) {
                that.props.rightActions.setRightTags(e.value);
            }*/
        });
    }

    componentWillUpdate(nextProps) {
        /*
        var that = this,
            oldRightData = that.props.right,
            nextRightData = nextProps.right,
            isApply = nextRightData.apply !== oldRightData.apply,
            isClear = nextRightData.clear !== oldRightData.clear,
            productsIsChanged = nextRightData.products !== oldRightData.products,
            platformsIsChanged = nextRightData.platforms !== oldRightData.platforms,
            platformsTags = nextRightData.platforms,
            productsTags = nextRightData.products,
            tagsIsChaged = nextRightData.tags !== oldRightData.tags,
            data = oldRightData.data;

        if (isClear) {
            that.tagbox.reset();
            return;
        }

        if (productsIsChanged || platformsIsChanged) {

            that.tags = [];
            if (!platformsTags.length) {
                platformsTags = Object.keys(this.props.right.data);
            }

            if (!productsTags.length) {
                platformsTags.forEach(function (platform) {
                    Object.keys(data[platform]).forEach(function (product) {
                        if (productsTags.indexOf(product) === -1)
                            productsTags.push(product);
                    });
                });
            }


            platformsTags.forEach(function (platform) {
                Object.keys(data[platform]).forEach(function (product) {
                    if (productsTags.indexOf(product) !== -1) {
                        Object.keys(data[platform][product]).forEach(function (test) {
                            data[platform][product][test].tags.forEach(function (tag) {
                                if (that.tags.indexOf(tag) === -1) {
                                    that.tags.push(tag);
                                }
                            });
                        });
                    }
                });
            });
            that.tagbox.option("items", that.tags);
        }*/
    }

    render() {
        var cssClass = constants.RIGHT_FILTER_CLASS;

        return <div className={cssClass}>
            <div className ={cssClass + "_text"}> Tags: </div>
            <div className ={cssClass + "_element"}>
                <div  ref="tagBox"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TagsBox);