import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { init } from '../../store/fixedExpense/fixedActions'

import Input from './inputForm'
import InputSelect from '../../components/inputs/inputSelect'

class FixedForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        const dataOptions = [
            { name: "DONE", value: "DONE" },
            { name: "PENDING", value: "PENDING" }
        ]


        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='card card-danger'>
                    <div className='card-body'>
                        <div>
                            <div className='row'>
                                <Field name='name' component={Input} col='4' placeholder='Name' readOnly={readOnly} />
                                <Field type='number' name='value' component={Input} col='2' placeholder='Value' readOnly={readOnly} />
                                <Field type='number' name='dueDate' component={Input} col='1' placeholder='Due Date' readOnly={readOnly} />
                                <Field name='status' component={InputSelect} col='2' readOnly={readOnly} data={dataOptions}/>
                                <Field type = 'date' name='lastDate' component={Input} col='3' placeholder='Last Date' readOnly={readOnly} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>submit</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

FixedForm = reduxForm({ form: 'fixedForm', destroyOnUnmount: false })(FixedForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(FixedForm)