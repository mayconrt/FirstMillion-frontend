import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from '../../store/expenseReport/reportActionCreations'

import TableRowContent from '../tables/tableRowContent'


class TableRow extends Component {

    componentWillMount() {
        this.props.getList()
    }

    handleButtonClick() {
        this.render();
      }    

    renderRows() {
        const list = this.props.list || []

        return list.map(l => (
            <TableRowContent key={l._id} list={l} handleRows={this.handleButtonClick.bind(this)}/>
        ))
    }

    render() {
        return (
            <tbody>
                {this.renderRows()}
            </tbody>
        )
    }
}

const mapStateToProps = state => ({ list: state.expenseReport.list})
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TableRow)