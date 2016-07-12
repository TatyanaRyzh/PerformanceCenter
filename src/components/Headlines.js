import React, { Component } from 'react'

class Headlines extends Component {
    render() {
        return <div className="pc_headlines" >
            <div className="pc_headlines_name">Name</div>
            <div className="pc_headlines_sparkline">Sparkline</div>
            <div className="pc_headlines_time">Time</div>
            <div className="pc_headlines_place">Place</div>
        </div>
    }
}

export default Headlines;