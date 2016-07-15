import React, { Component } from "react"
import { connect } from "react-redux"

class Footer extends Component {
    render() {
        return <div className="pc_footer" >@Max_Katy </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Footer);