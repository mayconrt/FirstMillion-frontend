import axios from 'axios'
const BASE_URL = 'http://firstmillion-com.umbler.net/api'

export function getSummary(){
    const request = axios.get(`${BASE_URL}/dailyExpense/totalSalary`)

    return{
        type: 'SUMMARY_FERCHED',
        payload: request
    }
}

export function getTotalByCategory(){
    const request = axios.get(`${BASE_URL}/dailyExpense/totalbycategory`)

    return{
        type: 'TOTAL_CATEGORY_FERCHED',
        payload: request
    }
}