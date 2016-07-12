import React, { Component } from 'react'
import { connect } from 'react-redux'
import Box from "../components/Box"

class Left extends Component {
    render() {
        return <div className="pc_left">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Left);