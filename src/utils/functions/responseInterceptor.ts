import axios from "axios";
import * as alertActions from '../../store/actions/alert/alert.actions'
import {Store} from "redux";

export const responseInterceptor = (store: Store) => {
    axios.interceptors.response.use((response: any) => {
        const {method} = response.config;
        if (method === 'put') {
            store.dispatch(alertActions.setAlert({message: 'Update todo successfull', severity: 'success'}));
        } else if (method === 'post') {
            store.dispatch(alertActions.setAlert({message: 'Create todo successfull', severity: 'success'}));
        } else if (method === 'delete') {
            store.dispatch(alertActions.setAlert({message: 'Delete todo successfull', severity: 'success'}));
        }
        // Do something before request is sent
        return response;
    }, function (error) {
        console.error(error)
        // Do something with request error
        return Promise.reject(error);
    });
}