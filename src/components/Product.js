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
        for (let i = 0; i < platforms.length; i++) {
            let test = Object.keys(data[platforms[i]]);
            for (let j = 0; j < test.length; j++) {
                if (that.products.indexOf(test[j]) === -1) {
                    that.products = that.products.concat(test[j]);
                }
            }
        }

        that.tagbox = new dxTagBox(ReactDOM.findDOMNode(that.refs["tagBox"]), {
            placeholder: "Any",
            items: that.products,
            onValueChanged: function (e) {
                that.props.rightActions.setRightProducts(e.value);
            }
        });
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.right.products != this.props.right.products)
            return;
        var platforms = nextProps.right.platforms,
            that = this,
            data = that.props.right.data,
            products = [],
            newSelectedProducts = [],
            items = that.tagbox.option("selectedItems");

        if (platforms.length) {
            for (let i = 0; i < platforms.length; i++) {
                let tests = Object.keys(data[platforms[i]]);
                for (let j = 0; j < tests.length; j++) {
                    if (products.indexOf(tests[j]) === -1) {
                        products.push(tests[j]);
                    }
                }
            }
        } else {
            products = that.products;
        }

        that.tagbox.option("items", products);

        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < products.length; j++) {
                if (items[i] == products[j]) {
                    newSelectedProducts.push(items[i]);
                }
            }
        }
        that.tagbox.option("value", newSelectedProducts);

        (nextProps.right.clear != that.props.right.clear) && that.tagbox.reset();
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
