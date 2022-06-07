import functions from "../../utils/functions"
import { SET_DAILOGBOX_STATE } from "../app"
const toastMessage = ({ dispatch, getStore }) => next => action => {

    try {

    } catch (error) {
        dispatch(SET_DAILOGBOX_STATE(functions.setErrorAlert(error)))
    }

}