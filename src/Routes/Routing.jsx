import { Route, Routes } from "react-router-dom";
import SignUppage from "../Pages/Signuppage";
import Signinpage from "@/Pages/Signinpage";
import Homepage from "@/Pages/Homepage";
import ProtectedRoute from "@/Components/ProtectRoute/ProtectedRoute";
import Servicepage from "@/Pages/Servicepage";
import Allapplication from "@/Pages/Allapplicationpage";
import OfficerProtectedRoute from "@/Components/ProtectRoute/OfficerProtectedRoute";
import Applicationdetailspage from "@/Pages/Applicationdetailspage";

function Routing(){
    return (
        <>
            <Routes>
                <Route path="/signup" element={<SignUppage/>}/>
                <Route path="/Signin" element={<Signinpage/>}/>
                <Route path="/home" element={<ProtectedRoute><Homepage /></ProtectedRoute>}/>
                <Route path="/service/:Id" element={<ProtectedRoute><Servicepage/></ProtectedRoute>}/>
                <Route path="/Applications" element={<ProtectedRoute><Allapplication /></ProtectedRoute>} />
                <Route path="/Applications/details/:Id" element={<OfficerProtectedRoute><Applicationdetailspage/></OfficerProtectedRoute>} />
            </Routes>
        </>
    )
}

export default Routing;