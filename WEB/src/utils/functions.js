export default {
    setErrorAlert(error){
        return { isOpen: true, type: "error", message: error.message }
    },
    setSuccessAlert(message){
        return { isOpen: true, type: "success", message }
    }
}