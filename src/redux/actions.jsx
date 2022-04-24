


export const setProducts = (data) => ({
    type: 'SET_PRODUCTS',
    payload: data
})

export const selectProduct = product => ({
    type: 'SELECT_PRODUCT',
    payload: product
})
