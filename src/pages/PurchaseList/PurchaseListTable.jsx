import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete, clone } from '../../store/purchaseList/purchaseActions'


class PurchaseListTable extends Component {
    componentWillMount() {
        this.props.getList()
    }

    clone(){
        let [listCopy] = this.props.list

        listCopy.name = listCopy.name + ' - copy'

        delete listCopy._id
        
        this.props.clone(listCopy)
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(l => (
            <tr key={l._id}>
                <td>{l.name}</td>
                <td>{l.month}</td>
                <td>{l.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(l)}>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(l)}>
                        <i className='fa fa-trash'></i>
                    </button>
                    <button type='button' className='btn btn-warning' onClick={() => this.clone()}>
                        <i className='fa fa-clone'></i>
                    </button>                    
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Month</th>
                        <th>Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({ list: state.purchaseList.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete, clone }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PurchaseListTable)