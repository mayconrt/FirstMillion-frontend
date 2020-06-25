import React, { Fragment, Component } from 'react'
import { Field } from 'redux-form'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { remove, update } from '../../store/expenseReport/reportActionCreations'

import If from '../if'

class TableRowContent extends Component {

    constructor(props) {
        
        super(props)
        this.state = {
            edit: false,
            _id: this.props.list._id,
            paymentDate: this.props.list.paymentDate,
            description: this.props.list.description,
            value: this.props.list.value,
            category: this.props.list.category,
            paymentType: this.props.list.paymentType
        }


    }

    changePaymentDate(value) {
        this.setState({ paymentDate: value })
    }

    changeDescription(value) {
        this.setState({ description: value })
    }

    changeValue(value) {
        this.setState({ value: value })
    }

    changeCategory(value) {
        this.setState({ category: value })
    }

    changepaymenttype(value) {
        this.setState({ paymentType: value })
    }

    editClick(show) {
        let edit = false

        if (!show) {
            update(this.state)

            if(this.state.paymentDate == '' ||
            this.state.description == '' ||
            this.state.value == '' ||
            this.state.category == '' ||
            this.state.paymentType == ''
            ){
                edit = true
            }

            this.setState({edit: edit})

        } else{
            this.setState({edit: show})
        }
        
    }

    removeClick(e) {
        e.preventDefault()
        const renderRows= this.props.handleRows

        remove(this.state)
        renderRows()
        
    }


    render() {
        return (
            <Fragment key={this.props.list._id}>
                <If test={!this.state.edit}>
                    <tr key={this.state._id}>
                        <td>{this.state.paymentDate}</td>
                        <td>{this.state.description}</td>
                        <td>{this.state.value}</td>
                        <td>{this.state.category}</td>
                        <td>{this.state.paymentType}</td>
                        <td>
                            <div className='row'>
                                <button type='button' onClick={e => this.editClick(e)} className='btn btn-primary'><i className='fa fa-edit'></i></button>
                                <button type='submit' onClick={e => this.removeClick(e)} className='btn btn-danger'><i className='fa fa-trash'></i></button>
                            </div>
                        </td>
                    </tr>
                </If>

                <If test={this.state.edit}>
                    <tr key={this.props.list._id}>
                        <td><div className='cols 10'><input className='form-control' name='paymentDate' placeholder='Payment Date' value={this.state.paymentDate} onChange={e => this.changePaymentDate(e.target.value)} /></div></td>
                        <td><div className='cols 10'><input className='form-control' name='description' placeholder='description' value={this.state.description} onChange={e => this.changeDescription(e.target.value)} /></div></td>
                        <td><div className='cols 10'><input className='form-control' name='value' placeholder='value' value={this.state.value} onChange={e => this.changeValue(e.target.value)} /></div></td>
                        <td><div className='cols 10'><input className='form-control' name='category' placeholder='category' value={this.state.category} onChange={e => this.changeCategory(e.target.value)} /></div></td>
                        <td><div className='cols 10'><input className='form-control' name='paymentType' placeholder='paymentType' value={this.state.paymentType} onChange={e => this.changePaymentType(e.target.value)} /></div></td>
                        <td>
                            <div className='row'>
                                <button onClick={e => this.editClick(false)} className='btn btn-success'><i className='fa fa-check'></i></button>
                            </div>
                        </td>
                    </tr>
                </If>
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ remove, update }, dispatch)
export default connect(mapDispatchToProps)(TableRowContent)