import { useAuth } from "@/Hooks/ContextHooks/useAuth";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if(!token || !user){
        return <Navigate to="/signin"/>
    }
    return children;
}

export default ProtectedRoute;