import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserHeader extends Component {
 render() {
        if (!this.props.user) {
            return null
        }

        return <div>{this.props.user.name}</div>
    }
}

const mapStateToProps = ({ users }, ownProps) => {
    return { user: users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps)(UserHeader)