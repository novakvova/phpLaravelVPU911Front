import * as AuthActions from '../../components/auth/Login/actions';
import * as ProductActions from '../../components/products/actions';

const actions = {
    ...AuthActions,
    ...ProductActions
}

export default actions;