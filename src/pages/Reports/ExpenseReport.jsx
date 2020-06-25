import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TableSimple from '../../components/tables/tableSimple'
import TableHeader from '../../components/tables/tableHeader'
import TableRow from '../../components/tables/tableRow'
import BasicSearch from '../BasicTemplate/BasicSearch'
import Form from './formEdit'

import { init, update, remove, showEdit } from '../../store/expenseReport/reportActionCreations'

class ExpenseReport extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
                <div>
                    <BasicSearch />
                    <TableSimple>
                        <TableHeader />
                        <TableRow />
                    </TableSimple>
                </div>

        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init, update, remove, showEdit
}, dispatch)
export default connect(null, mapDispatchToProps)(ExpenseReport)
