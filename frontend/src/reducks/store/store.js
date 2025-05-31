import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from 'redux';
import { thunk } from 'redux-thunk';

import { cartsReducer } from '../cart/reducers';
import { CategoriesReducer } from '../category/reducers';
// import { ordersReducer } from '../order/reducers';
// import { productReducers } from '../product/reducers';
import { UserReducer } from '../users/reducers';

// ✅ No `history` argument needed
export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            user: UserReducer,
            categories: CategoriesReducer,
            // products: productReducers,
            carts: cartsReducer,
            // order: ordersReducer
        }),
        compose(applyMiddleware(thunk))
    );
}
