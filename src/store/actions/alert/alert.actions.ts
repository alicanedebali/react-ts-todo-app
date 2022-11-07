import {AlertInterface} from "../../interfaces";
import {NEW_ALERT} from "./alert.action.types";

export const setAlert = (alert: AlertInterface) => ({
    type: NEW_ALERT,
    payload: alert
})