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
            that.products = that.products.concat(Object.keys(data[platforms[i]]));
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
        if (nextProps.right.products != this.props.right.products)// спросить про бесконечный цикл
            return;
        var platforms = nextProps.right.platforms,
            data = this.props.right.data,
            products = [],
            newSelected = [],
            items = this.tagbox.option("selectedItems");

        if (platforms.length) {
            for (let i = 0; i < platforms.length; i++) {
                products = products.concat(Object.keys(data[platforms[i]]));
            }
        } else {
            products = this.products;
        }

        this.tagbox.option("items", products);

        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < products.length; j++) {
                if (items[i] == products[j]) {
                    newSelected.push(items[i]);
                }
            }
        }
        this.tagbox.option("value", newSelected);

        (nextProps.right.clear != this.props.right.clear) && this.tagbox.reset();
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
