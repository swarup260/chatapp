import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { isUserLogin } from "../store/auth"

export default function RequireAuth({children}){

    let location = useLocation()

    const isUserExists = useSelector(isUserLogin) == null
    
    if (!isUserExists) {
        return <Navigate to="/" state={{form: location }} replace />
    }

    return children
}