import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete} from '../../store/fixedExpense/fixedActions'


class FixedTable extends Component {
    componentWillMount() {
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map(l => (
            <tr key={l._id}>
                <td>{l.name}</td>
                <td>{l.value}</td>
                <td>{l.dueDate}</td>
                <td>{l.status}</td>
                <td>{l.lastDate}</td>
                <td>
                <button className='btn btn-warning' onClick={()=> this.props.showUpdate(l)}>
                    <i className='fa fa-edit'></i>
                </button>
                <button className='btn btn-danger' onClick={()=> this.props.showDelete(l)}>
                    <i className='fa fa-trash'></i>
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
                           <th>Value</th>
                           <th>Due Date</th>
                           <th>Status</th>
                           <th>LastDate</th>
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

const mapStateToProps = state => ({list: state.fixedExpense.list})
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FixedTable)