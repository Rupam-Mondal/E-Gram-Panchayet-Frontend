import { Navigate } from "react-router-dom";

function OfficerProtectedRoute({children}){
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if(!token || !user || user.role !== 'Officer'){
        return <Navigate to="/signin"/>
    }
    return children;
}

export default OfficerProtectedRoute;