import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

const BASE_URL = 'http://firstmillion-com.umbler.net/api'

export function create(values) {
    return submit(values, 'post')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/product/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch([
                    init()
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}


export function getProducts() {
    const request = axios.get(`${BASE_URL}/product`)
    return {
        type: 'PRODUCT_FERCHED',
        payload: request
    }
}

export function init() {
    return [
        getProducts(),
        resetForm('productForm')
    ]
}

export function remove(id) {
        const request = axios.delete(`${BASE_URL}/product/${id}`)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                init()
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
}