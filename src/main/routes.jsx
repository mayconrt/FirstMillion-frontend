import React from 'react'
import {Router, Route, Redirect, hashHistory } from 'react-router'

import Home from '../pages/Home/Home'
import ExpenseReport from '../pages/Reports/ExpenseReport'
import ExpenseNew from '../pages/Reports/ExpenseNew'
import ProductRegister from '../pages/Product/ProductRegister'
import PurchaseList from '../pages/PurchaseList/PurchaseList'
import FixedExpense from '../pages/FixedExpense/FixedExpense'
import Category from '../pages/Category/Category'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='expense-report' component={ExpenseReport} />
        <Route path='expense-new' component={ExpenseNew} />
        <Route path='product-register' component={ProductRegister} />
        <Route path='purchase-list' component={PurchaseList} />
        <Route path='fixed-expense' component={FixedExpense} />
        <Route path='category' component={Category} />
        <Redirect from='*' to='/' />
    </Router>

)