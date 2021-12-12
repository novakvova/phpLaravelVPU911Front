import { combineReducers } from "redux";
import { authReducer } from "../../components/auth/Login/reducer";
import { productsReducer } from "../../components/products/reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer
});

export type RootState = ReturnType<typeof rootReducer>;