import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { init } from '../../store/purchaseList/purchaseActions'

import Input from './inputForm'
import Products from './Products'

class PurchaseForm extends Component {

    // calculateSummary() {
    //     const sum = (t, v) => t + v
    //     return {
    //         sumOfProducts: this.props.products.map(c => +c.unitValue || 0).reduce(sum)
    //     }
    // }

    render() {
        const { handleSubmit, readOnly, products } = this.props
        // const { sumOfProducts} = this.calculateSummary()

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='card card-danger'>
                    <div className='card-body'>
                        <div>
                            <div className='row'>
                                <Field name='name' component={Input} col='4' placeholder='name' readOnly={readOnly} />
                                <Field name='month' component={Input} col='1' placeholder='month' readOnly={readOnly} />
                                <Field name='year' component={Input} col='1' placeholder='year' readOnly={readOnly} />
                            </div>
                            <Products list={products} readOnly={readOnly} total={0} tabId={this.props.tabId} />
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

PurchaseForm = reduxForm({ form: 'purchaseNew', destroyOnUnmount: false })(PurchaseForm)
const selector = formValueSelector('purchaseNew')
const mapStateToProps = state => ({ products: selector(state, 'products') })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PurchaseForm)