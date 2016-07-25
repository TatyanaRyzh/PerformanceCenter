import React, { Component } from "react"
import { connect } from "react-redux"
import ReactDOM from "react-dom"
import { bindActionCreators } from "redux"

import * as constants from "../constants/styles"
import dxTagBox from "devextreme/ui/tag_box"
import * as rightActions from "../actions/rightActions"

class Product extends Component {
    componentDidMount() {
        var that = this,
            data = that.props.right.data,
            platforms = Object.keys(data);

        that.products = [];
        platforms.forEach(function (platform) {
            Object.keys(data[platform]).forEach(function (product) {
                if (that.products.indexOf(product) === -1) {
                    that.products = that.products.concat(product);
                }
            });
        });

        that.products.sort(function (a, b) {
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
            items: that.products,
            onValueChanged: function (e) {
                that.props.rightActions.setRightProducts(e.value);
            }
        });
    }

    componentWillUpdate(nextProps, nextState) {
        var that = this,
            oldRightData = that.props.right,
            nextRightData = nextProps.right,
            tagsIsChanged = nextRightData.tags !== oldRightData.tags,
            isApply = nextRightData.apply !== oldRightData.apply,
            isClear = nextRightData.clear !== oldRightData.clear,
            productsIsChanged = nextRightData.products !== oldRightData.products,
            platformsTags = nextRightData.platforms,
            data = oldRightData.data,
            products = [],
            newSelectedProducts = [],
            selectedItems = that.tagbox.option("selectedItems");

        //if (tagsIsChanged || nextRightData.platforms !== oldRightData.platforms)//pri etom ne obnovlyaet
        //    return;

        if (isApply || productsIsChanged) {
            return;
        }

        if (platformsTags.length) {
            platformsTags.forEach(function (platform) {
                Object.keys(data[platform]).forEach(function (product) {
                    if (products.indexOf(product) === -1) {
                        products.push(product);
                    }
                });
            });
        } else {
            products = that.products;
        }

        /*
        products.sort(function (a, b) {
            if (b < a) {
                return 1;
            }

            if (b > a) {
                return -1;
            }
            return 0;
        });*/

        that.tagbox.option("items", products);

        if (isClear) {
            that.tagbox.reset();
            return;
        }

        selectedItems.forEach(function (selectedItem) {
            products.forEach(function (product) {
                if (selectedItem === product) {
                    newSelectedProducts.push(selectedItem);
                }
            });
        });

        that.tagbox.option("value", newSelectedProducts);
    }

    render() {
        var cssClass = constants.RIGHT_FILTER_CLASS;

        return <div className={cssClass}>
            <div className ={cssClass + "_text"}> Product: </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
