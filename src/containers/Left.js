import React, { Component } from "react"
import { connect } from "react-redux"
import ReactDOM from "react-dom"
import { bindActionCreators } from "redux"

import * as rightActions from "../actions/rightActions"
import * as leftActions from "../actions/leftActions"
import Box from "../components/Box"


class Left extends Component {
    addTestsInArray(platform, product) {
        this.tests = this.tests.concat(this.props.right.data[platform][product]);
    }

    addAllTests() {
        var that = this,
            data = that.props.right.data;

        that.tests = [];

        Object.keys(data).forEach(function (platform) {
            var productsOfPlatform = Object.keys(data[platform]);
            productsOfPlatform.forEach(function (productOfPlatform) {
                that.addTestsInArray(platform, productOfPlatform);
            });
        });
    }

    componentWillMount() {
        var that = this,
            data = that.props.right.data;

        that.tests = [];

        Object.keys(data).forEach(function (platform) {
            var productsOfPlatform = Object.keys(data[platform]);
            productsOfPlatform.forEach(function (productOfPlatform) {
                that.tests = that.tests.concat(data[platform][productOfPlatform]);
            });
        });
    }

    componentDidMount() { // спросить про функцию 
        var that = this,
            elem = ReactDOM.findDOMNode(that.refs["pc_left1"]),
            isScroll = elem.offsetWidth > elem.scrollWidth;

        (isScroll != that.props.left.scroll) && that.props.leftActions.getScroll(isScroll);
    }

    componentWillUpdate(nextProps) {
        var that = this,
            right = nextProps.right,
            data = right.data,
            isPlatformsEmpty = !right.platforms.length,
            platformTags = isPlatformsEmpty ? Object.keys(data) : right.platforms,
            productTags = right.products,
            isClear = right.clear !== that.props.right.clear,
            isApply = right.apply !== that.props.right.apply,
            isEmpty = isPlatformsEmpty && !productTags.length;

        if (isClear || isEmpty) {
            that.addAllTests();
            return;
        }

        if (isApply) {
            that.tests = [];
            platformTags.forEach(function (platform) {
                var productsOfPlatform = Object.keys(data[platform]),
                    isProductsInPlatform = false;

                productsOfPlatform.forEach(function (productOfPlatform) {
                    if (productTags.indexOf(productOfPlatform) !== -1) {
                        isProductsInPlatform = true;
                        that.addTestsInArray(platform, productOfPlatform);
                    }
                });

                if (!isProductsInPlatform && !isPlatformsEmpty) {
                    productsOfPlatform.forEach(function (product) {
                        that.addTestsInArray(platform, product);
                    });
                }
            });
        }
    }

    componentDidUpdate() {
        var that = this,
            elem = ReactDOM.findDOMNode(that.refs["pc_left1"]),
            isScroll = elem.offsetWidth > elem.scrollWidth;

        (isScroll != that.props.left.scroll) && that.props.leftActions.getScroll(isScroll);
    }

    render() {
        var that = this,
            data = that.tests || [],
            boxTemplate;

        if (data.length) {
            boxTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <Box data={item} getInfo={that.props.rightActions.getInfo}/>
                    </div>
                )
            });
        } else {
            boxTemplate = <p>No items...</p>
        }

        return <div className="pc_left" ref="pc_left1">
            {boxTemplate}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        right: state.right,
        left: state.left
    };
}

function mapDispatchToProps(dispatch) {
    return {
        rightActions: bindActionCreators(rightActions, dispatch),
        leftActions: bindActionCreators(leftActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Left);