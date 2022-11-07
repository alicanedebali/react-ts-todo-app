import {AlertInterface} from "../interfaces";
import {ActionInterface} from "../interfaces/action/action";
import {NEW_ALERT} from "../actions";

const initialState: { alert?: AlertInterface } = {
    alert: undefined
}

export const alertReducer = (state = initialState, action: ActionInterface<AlertInterface>) => {
    switch (action.type) {
        case NEW_ALERT: {
            return {...state, alert: action.payload}
        }
        default:
            return state;
    }
}