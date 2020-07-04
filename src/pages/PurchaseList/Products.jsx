import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Field, arrayInsert, arrayRemove, change, dispatch } from 'redux-form'
import Input from './inputForm'
import If from './if'

class Products extends Component {
    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('purchaseNew', 'products', index, item)
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('purchaseNew', 'products', index)
        }
    }

    check(item) {
        this.props.dispatch(change('purchaseNew', item, 'DONE'))
    }


    renderRows() {
        const tabDelete = (this.props.tabId == 'tabDelete' ? true : false)
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index} >

                <td style={{ width: '30%' }}><Field name={`products[${index}].product`} component={Input} placeholder='Product Name' readOnly={this.props.readOnly} /></td>
                <td style={{ width: '15%' }}><Field name={`products[${index}].unitValue`} component={Input} placeholder='Unity Value' readOnly={this.props.readOnly} /></td>
                <td style={{ width: '10%' }}><Field name={`products[${index}].quantity`} component={Input} placeholder='Quantity' readOnly={this.props.readOnly} /></td>
                <td style={{ width: '10%' }}><Field name={`products[${index}].status`} component={Input} placeholder='Status' readOnly={true} /></td>
                <td>
                    <If test={!tabDelete}>
                        <div className='form-group' >
                            <button type='button' className='btn btn-success' onClick={() => this.add(index + 1)}>
                                <i className='fa fa-plus'></i>
                            </button>
                            <button type='button' className='btn btn-warning' onClick={() => this.add(index + 1, item)}>
                                <i className='fa fa-clone'></i>
                            </button>
                            <button type='button' className='btn btn-danger' onClick={() => this.remove(index)}>
                                <i className='fa fa-trash'></i>
                            </button>
                            <button type='button' className='btn btn-success' onClick={() => this.check(`products[${index}].status`)}>
                                <i className='fa fa-check'></i>
                            </button>
                        </div>
                    </If>
                </td>
            </tr>
        ))

    }

    render() {
        const tabDelete = (this.props.tabId == 'tabDelete' ? true : false)

        return (
            <fieldset>
                <legend>Products - Total <strong>{this.props.total}</strong></legend>
                <table >
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Unit Value</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <If test={!tabDelete}>
                                <th>Actions</th>
                            </If>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </fieldset>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove, change, dispatch }, dispatch)
export default connect(null, mapDispatchToProps)(Products)