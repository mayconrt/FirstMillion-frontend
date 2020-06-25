import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = { credits: [{}], debts: [{}] }

export function getList() {
    const request = axios.get(`${BASE_URL}/dailyExpense`)

    return {
        type: 'EXPENSE_REPORT_FERCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    const id = values._id ? values._id : ''
    const datas = {
        paymentDate: values.paymentDate,
        description: values.description,
        value: values.value,
        category: values.category,
        paymentType: values.paymentType
    }

    const request = axios.put(`${BASE_URL}/dailyExpense/${id}`, datas)
        .then(resp => {
            toastr.success('Sucesso', 'Operação Realizada com sucesso.')
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })

}

export function remove(values) {
        // dispatch({ type: 'FETCHING' })
        
        const id = values._id ? values._id : ''

        const request = axios.delete(`${BASE_URL}/dailyExpense/${id}`)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/dailyExpense/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch([
                    // resetForm('expenseNew'),
                    init()
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function init() {
    return [
        getList()
    ]
}

