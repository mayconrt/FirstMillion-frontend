import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class ExpenseEdit extends Component {
        
    render() {
        const { handleSubmit } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                {this.props.children}
            </form>
        )
    }
}

ExpenseEdit = reduxForm({ form: 'expenseEdit', destroyOnUnmount:false })(ExpenseEdit)


export default ExpenseEdit