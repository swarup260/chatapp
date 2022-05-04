import STATE from './enum'
export default {
    persistentState(state) {
        localStorage.setItem(STATE, JSON.stringify(state))
    },
    fetchPersistentState() {
        return JSON.parse(localStorage.getItem(STATE) || {})
    },
    setErrorAlert(error){
        return { isOpen: true, type: "error", message: error.message }
    },
    setSuccessAlert(message){
        return { isOpen: true, type: "success", message }
    }
}