import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { create, update, remove } from '../../store/expenseReport/reportActionCreations'

import Form from './form'

class ExpenseNew extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.create}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    create, update, remove
}, dispatch)
export default connect(null, mapDispatchToProps)(ExpenseNew)