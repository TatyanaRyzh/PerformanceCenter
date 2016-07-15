import React, { Component } from "react"
import { connect } from "react-redux"

import Right from '../containers/Right'
import Left from '../containers/Left'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Headlines from "../components/Headlines"

import "../styles/app.css"
import "devextreme/dist/css/dx.common.css"
import "devextreme/dist/css/dx.light.css"

class App extends Component {
    render() {
        return <div>
                <Header />
                <div className="pc_main-left">
                    <Headlines />
                  
                </div>
                <Right />
                <Footer />
            </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(App)
