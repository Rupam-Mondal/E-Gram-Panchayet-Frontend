import { Route, Routes } from "react-router-dom";
import SignUppage from "../Pages/Signuppage";
import Signinpage from "@/Pages/Signinpage";
import Homepage from "@/Pages/Homepage";
import ProtectedRoute from "@/Components/ProtectRoute/ProtectedRoute";

function Routing(){
    return (
        <>
            <Routes>
                <Route path="/signup" element={<SignUppage/>}/>
                <Route path="/Signin" element={<Signinpage/>}/>
                <Route path="/home" element={<ProtectedRoute><Homepage /></ProtectedRoute>}/>
            </Routes>
        </>
    )
}

export default Routing;