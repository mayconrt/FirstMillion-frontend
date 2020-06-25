const INITIAL_STATE = { products: []}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PRODUCT_FERCHED':
            return { ...state, products: action.payload.data }
        default:
           return state     
    }
}