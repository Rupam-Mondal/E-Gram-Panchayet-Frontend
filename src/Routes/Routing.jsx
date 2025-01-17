import { Route, Routes } from "react-router-dom";
import SignUppage from "../Pages/Signuppage";
import Signinpage from "@/Pages/Signinpage";
import Homepage from "@/Pages/Homepage";
import ProtectedRoute from "@/Components/ProtectRoute/ProtectedRoute";
import Servicepage from "@/Pages/Servicepage";

function Routing(){
    return (
        <>
            <Routes>
                <Route path="/signup" element={<SignUppage/>}/>
                <Route path="/Signin" element={<Signinpage/>}/>
                <Route path="/home" element={<ProtectedRoute><Homepage /></ProtectedRoute>}/>
                <Route path="/service/:Id" element={<ProtectedRoute><Servicepage/></ProtectedRoute>}/>
            </Routes>
        </>
    )
}

export default Routing;