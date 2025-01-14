import { Route, Routes } from "react-router-dom";
import SignUppage from "../Pages/Signuppage";
import Signinpage from "@/Pages/Signinpage";

function Routing(){
    return (
        <>
            <Routes>
                <Route path="/signup" element={<SignUppage/>}/>
                <Route path="/Signin" element={<Signinpage/>}/>
            </Routes>
        </>
    )
}

export default Routing;