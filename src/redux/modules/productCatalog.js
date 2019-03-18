const initialState = { products: [], isLoading: false };

const requestProductListAction = 'REQUEST_PRODUCT_LIST';
const receiveProductListAction = 'RECEIVE_PRODUCT_LIST';

export const actionCreators = {
    listProducts: () => async (dispatch, state) =>
    {
        dispatch({type: requestProductListAction});

        // todo: move to config
        const url = '';
        const response = await fetch(url);
        const products = await response.json();

        dispatch({type: receiveProductListAction, products});
    }
};

export const reducer = (state, action) =>
{
    state = state || initialState;
    
    switch(action.type)
    {
        case requestProductListAction:
            return {
                ...state,
                isLoading: true
            };
        case receiveProductListAction:
            return{
                ...state,
                products: action.products,
                isLoading: false
            }
        default:
            return state;
    }
};