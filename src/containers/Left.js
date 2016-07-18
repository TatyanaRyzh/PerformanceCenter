import React, { Component } from "react"
import { connect } from "react-redux"
import ReactDOM from "react-dom"
import { bindActionCreators } from "redux"

import * as rightActions from "../actions/rightActions"
import * as leftActions from "../actions/leftActions"
import Box from "../components/Box"


class Left extends Component {

    componentDidUpdate() {
        var that = this,
            elem = ReactDOM.findDOMNode(that.refs["pc_left1"]),
            isScroll = elem.offsetWidth > elem.scrollWidth;

        (isScroll != that.props.left.scroll) && that.props.leftActions.getScroll(isScroll);
    }

    componentWillUpdate(nextProps) {
        debugger;

        if(nextProps.right.apply != this.props.right.apply){
            this.tests = [];
            var that = this, 
                platforms = that.props.right.platforms,
                products = that.props.right.products,
                data = that.props.right.data;
           
            for(let i=0; i < platforms.length; i++){
                for(let j=0; j < products.length; j++){ // добавить индексацию объектов
                    if (data[platforms[i]][products[j]])    
                        that.tests = that.tests.concat(data[platforms[i]][products[j]])
                }
            }
        }
    }

    render() {
        debugger;
        if (!(this.tests)){
            (this.tests = [])
        }
        var that = this,
            data = that.tests,
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