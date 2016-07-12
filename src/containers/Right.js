import React, { Component } from 'react'
import { connect } from 'react-redux'

import Platform from "../components/Platform"
import Product from "../components/Product"
import TagsBox from "../components/TagsBox"
import SearchBox from "../components/SearchBox"
import Buttons  from "../components/Buttons"

class Right extends Component {
    render() {
        return <div className="pc_right">
                <Buttons />
                <Platform />
                <Product />
                <TagsBox />
                <SearchBox />
            </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Right)
