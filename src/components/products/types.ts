//Типи дій
export enum ProductsActionTypes {
    FETCH_PRODUCTS="FETCH_PRODUCTS"
}

//Сам продукт
export interface IProductItem {
    id: number;
    name: string;
    detail: string;
} 

//Відповідь від сервера по списку продуктів
export interface IProductsResponse {
    current_page: number;
    last_page: number;
    data: Array<IProductItem>;
}

//Модель для пошуку продуктів
export interface ISearchProduct {
    page: number|string
}

//Стейт для редусера
export interface ProductsState {
    products: Array<IProductItem>;
    last_page: number;
}

//Дії редусера. Отримати список продуктів від сервера
export interface FetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS,
    payload: ProductsState
}

export type ProductActions = FetchProductsAction;