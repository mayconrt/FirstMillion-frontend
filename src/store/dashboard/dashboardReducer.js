const INITIAL_STATE = {
    summary: { totalSalary: 0, totalExpense: 0, totalInvestiment: 0 },
    totalByCategory: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SUMMARY_FERCHED':
            return { ...state, summary: action.payload.data }
        case 'TOTAL_CATEGORY_FERCHED':
            return { ...state, totalByCategory: action.payload.data }
        default:
            return state
    }
}