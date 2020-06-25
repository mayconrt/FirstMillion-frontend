import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init, getProducts, remove } from '../../store/product/productAction'

import Button from '../../components/buttons/button'


class ProductFormList extends Component {
    componentWillMount() {
        this.props.getProducts()
    }

    renderRows() {
        const product = this.props.products || []
        return product.map(p => (
            <tr key={p._id}>
                <td>{p.product}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td><Button id={p._id} type='submit' icon='fa fa-trash' action='secondary' onClick={this.removeClick} /></td>
            </tr>
        ))
    }

    removeClick(id) {
        remove(id)
    }

    render() {
        return (
            <form role='form'>
                <div className="card">
                    <div className="card-body p-0">
                        <table className="table table-striped table-valign-middle">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderRows()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </form>
        )
    }
}

ProductFormList = reduxForm({ form: 'productFormList', destroyOnUnmount: false })(ProductFormList)
const mapStateToProps = state => ({ products: state.productReducer.products })
const mapDispatchToProps = dispatch => bindActionCreators({ init, getProducts, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProductFormList)
