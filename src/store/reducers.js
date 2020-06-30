import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from './dashboard/dashboardReducer'
import ReportReducer from './expenseReport/reportReducer'
import ProductReducer from './product/productReducer'
import TabReducer from './purchaseList/puchaseReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    expenseReport: ReportReducer,
    productReducer: ProductReducer,
    tab: TabReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer