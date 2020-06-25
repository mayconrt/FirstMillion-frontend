import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import InputForm from '../../components/inputs/inputForm'

class ExpenseEdit extends Component {
    componentWillMount(){
        this.props.editHandle()
    }
    
    render() {
        const { handleSubmit } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='card card-danger'>
                    <div className='card-body'>
                        <div className='row'>
                            <Field name='description' component={InputForm} cols='4' placeholder='Description' />
                            <Field name='value' component={InputForm} cols='2' placeholder='Value' />
                            <Field name='category' component={InputForm} cols='2' placeholder='Category' />
                            <Field name='paymentType' component={InputForm} cols='2' placeholder='Payment Type' />
                        </div>
                    </div>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>submit</button>
                </div>                
            </form>
        )
    }
}

export default reduxForm({ form: 'expenseNew', destroyOnUnmount: false })(ExpenseEdit)