export enum AuthActionTypes {
    LOGIN_AUTH = "LOGIN_AUTH"
}

//Модель для входу на сайт
export interface ILoginModel {
    email: string,
    password: string
}

export interface ILoginResponse {
    access_token: string,
    user: IUser
}

export interface ILoginServerError {
    email: Array<string>
    password: Array<string>,
    error: string
} 

export interface IUser {
    email: string,
    image: string
}

export interface AuthState {
    user: null|IUser,
    isAuth: boolean,
}

export interface LoginAuthAction {
    type: AuthActionTypes.LOGIN_AUTH,
    payload: IUser
}


export type AuthAction = LoginAuthAction;