import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { create } from '../../store/product/productAction'

import ProductForm from './ProductForm'

class ProductRegister extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header border-0">
                        <h3 className="card-title">Products</h3>
                        <div className="card-tools">
                            <a href="#" className="btn btn-tool btn-sm">
                                <i className="fa fa-plus-circle"></i>
                            </a>
                            <a href="#" className="btn btn-tool btn-sm">
                                <i className="fa fa-paper-plane"></i>
                            </a>
                        </div>
                    </div>
                    <ProductForm onSubmit={this.props.create}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ create }, dispatch)
export default connect(null, mapDispatchToProps)(ProductRegister)