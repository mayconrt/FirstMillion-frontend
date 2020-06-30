import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getSummary} from '../../store/dashboard/dashboardActions'


import ContentHeader from '../BasicTemplate/ContentHeader'
import Content from '../BasicTemplate/Content'
import CardInfo from '../../components/cards/cardInfo'
import ChartMonthExpense from '../../components/charts/chartMonthExpense'

class Home extends Component {
    componentWillMount(){
        this.props.getSummary()
    }

    render() {
        const {salary, expense, investment} = this.props.summary
        
        return (
            <div>
                <ContentHeader title='Expense Report' small='Versão 1.0' />
                <Content>
                    <CardInfo value={salary} title='Salary' color='success' classes='ion ion-stats-bars' />
                    <CardInfo value={expense} title='Expenses' color='danger' classes='ion ion-pie-graph' />
                    <CardInfo value={investment} title='Investment' color='info' classes='ion ion-bag' />
                    <ChartMonthExpense title='Total By Category' firstTitle='Salary' secondTitle='Expense' charts='bar'/>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home) 