import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize} from 'redux-form'

import {showTabs, selectTab} from './tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {products: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/purchaseList`)
    return {
        type: 'PURCHASE_LIST_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {

    return dispatch => {
        const id = values._id ? values._id : '' 
        axios[method](`${BASE_URL}/purchaseList/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            })
    }    

}

export function showUpdate(purchaseList) {
    return [
        showTabs('tabList', 'tabEdit'),
        selectTab('tabEdit'),
        initialize('purchaseNew', purchaseList)
    ]
}

export function showDelete(purchaseList) {
    return [
        showTabs('tabList', 'tabDelete'),
        selectTab('tabDelete'),
        initialize('purchaseNew', purchaseList)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabInclude'),
        selectTab('tabList'),
        getList(),
        initialize('purchaseNew', INITIAL_VALUES)
    ]
}