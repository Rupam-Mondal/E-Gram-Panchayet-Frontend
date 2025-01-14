import { Route, Routes } from "react-router-dom";
import SignUppage from "../Pages/Signuppage";
import Signinpage from "@/Pages/Signinpage";
import Homepage from "@/Pages/Homepage";

function Routing(){
    return (
        <>
            <Routes>
                <Route path="/signup" element={<SignUppage/>}/>
                <Route path="/Signin" element={<Signinpage/>}/>
                <Route path="/home" element={<Homepage/>}/>
            </Routes>
        </>
    )
}

export default Routing;