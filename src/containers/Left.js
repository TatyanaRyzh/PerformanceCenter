import React, { Component } from "react"
import { connect } from "react-redux"
import ReactDOM from "react-dom"
import { bindActionCreators } from "redux"

import * as rightActions from "../actions/rightActions"
import * as leftActions from "../actions/leftActions"
import Box from "../components/Box"

class Left extends Component {
    addTestsInArray(platform, product, search) {
        var that = this,
            tests = that.props.right.data[platform][product];

        if (search === "") {
            that.tests = that.tests.concat(tests);
        } else {
            Object.keys(tests).forEach(function (test) {
                if (tests[test].name.toUpperCase().indexOf(search) > -1) {
                    that.tests.push(tests[test]);
                }
            });
        }
    }

    addAllTests(nextProps) {
        var that = this,
            data = nextProps.right.data,
            search = nextProps.right.search;

        that.tests = [];

        Object.keys(data).forEach(function (platform) {
            var productsOfPlatform = Object.keys(data[platform]);
            productsOfPlatform.forEach(function (productOfPlatform) {
                that.addTestsInArray(platform, productOfPlatform, search);
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

    componentDidMount() {
        var that = this,
            elem = ReactDOM.findDOMNode(that.refs["pc_left1"]),
            isScroll = elem.offsetWidth > elem.scrollWidth;

        (isScroll != that.props.left.scroll) && that.props.leftActions.getScroll(isScroll);
    }

    componentWillUpdate(nextProps) {
        var that = this,
            right = nextProps.right,
            search = right.search,
            data = right.data,
            isPlatformsEmpty = !right.platforms.length,
            platformTags = isPlatformsEmpty ? Object.keys(data) : right.platforms,
            productTags = right.products,
            isClear = right.clear !== that.props.right.clear,
            isApply = right.apply !== that.props.right.apply,
            isSort = nextProps.right.sort !== that.props.right.sort,
            isEmpty = isPlatformsEmpty && !productTags.length;

        if (isClear || isApply || isSort) {
            if (that.tests.length && isSort && !isApply && !isClear) {
                var firstValue = nextProps.right.sort ? 1 : -1,
                    secondValue = nextProps.right.sort ? -1 : 1;

                that.tests.sort(function (a, b) {
                    if (b.name < a.name) {
                        return firstValue;
                    }
                    if (b.name > a.name) {
                        return secondValue;
                    }
                    return 0;
                });
                return;
            }

            if (isClear || isEmpty) {
                that.addAllTests(nextProps);
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
                            that.addTestsInArray(platform, productOfPlatform, search);
                        }
                    });

                    if (!isProductsInPlatform && !isPlatformsEmpty) {
                        productsOfPlatform.forEach(function (product) {
                            that.addTestsInArray(platform, product, search);
                        });
                    }
                });
            }
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