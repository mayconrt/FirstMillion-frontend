import React, { Component } from 'react'
import { reduxForm, Field, change, dispatch } from 'redux-form'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { init } from '../../store/category/categoryActions'

import Input from './inputForm'
import InputColor from './inputColor'

class CategoryForm extends Component {

    constructor(){
        super()
        this.setColor = this.setColor.bind(this);
    }

    setColor(value){
        this.props.dispatch(change('categoryForm','colorValue', value ))
    }

    render() {
        const { handleSubmit, readOnly } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='card card-danger'>
                    <div className='card-body'>
                        <div>
                            <div className='row'>
                                <Field name='name' component={Input} col='4' placeholder='Name' readOnly={readOnly} />
                                <Field name='type' component={Input} col='2' placeholder='Type' readOnly={readOnly} />
                                <Field name='colorValue' component={Input} col='2' placeholder='Color' readOnly={readOnly} />
                                <InputColor setValue={this.setColor}/>
                                {/* <button type='button' className='btn btn-default' onClick={e=> this.setColor('fsdafds')}>teste</button> */}
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

CategoryForm = reduxForm({ form: 'categoryForm', destroyOnUnmount: false })(CategoryForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init, change, dispatch }, dispatch)
export default connect(null, mapDispatchToProps)(CategoryForm)