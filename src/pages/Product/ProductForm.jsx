import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init, getProducts, remove } from '../../store/product/productAction'

import InputForm from './ImputForm'
import ButtonClear from '../../components/buttons/buttonClear'
import ButtonAdd from '../../components/buttons/buttonAdd'
import Button from '../../components/buttons/button'
import FormProductList from './ProductFormList'


class ProductForm extends Component {
    // componentWillMount() {
    //     this.props.getProducts()
    // }

    // renderRows() {
    //     const product = this.props.products || []

    //     return product.map(p => (
    //         <tr key={p._id}>
    //             <td>{p.product}</td>
    //             <td>{p.price}</td>
    //             <td>{p.category}</td>
    //             <td><Button id={p._id} type='button' icon='fa fa-trash' action='secondary' onClick={this.removeClick}/></td>
    //         </tr>
    //     ))
    // }

    // removeClick(id) {
    //     remove(id)
    // }    

    render() {
        const { handleSubmit } = this.props

        return (
            <Fragment>
                <form role='form' onSubmit={handleSubmit}>
                    <div className='card-body'>
                        <div className='row'>
                            <Field name='product' component={InputForm} cols='4' placeholder='Product' />
                            <Field name='price' component={InputForm} cols='2' placeholder='Price' type='number' />
                            <Field name='category' component={InputForm} cols='2' placeholder='Category' />
                            <ButtonClear cols='0' handleClear={this.props.init} type='button' />
                            <ButtonAdd cols='1' />
                        </div>
                    </div>
                </form>
                <FormProductList />
                {/* <div className="card">
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
                </div> */}
            </Fragment>
        )
    }
}

ProductForm = reduxForm({ form: 'productForm', destroyOnUnmount: false })(ProductForm)
const mapStateToProps = state => ({ products: state.productReducer.products })
const mapDispatchToProps = dispatch => bindActionCreators({ init, getProducts, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)
