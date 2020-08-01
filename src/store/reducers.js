import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from './dashboard/dashboardReducer'
import ReportReducer from './expenseReport/reportReducer'
import ProductReducer from './product/productReducer'
import TabReducer from './purchaseList/tabReducer'
import PurchaseList from './purchaseList/purchaseReducer'
import FixedExpense from './fixedExpense/fixedReducer'
import Category from './category/categoryReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    expenseReport: ReportReducer,
    productReducer: ProductReducer,
    purchaseList: PurchaseList,
    fixedExpense: FixedExpense,
    category: Category,
    tab: TabReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer