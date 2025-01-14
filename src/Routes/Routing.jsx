import { Route, Routes } from "react-router-dom";
import SignUppage from "../Pages/Signuppage";

function Routing(){
    return (
        <>
            <Routes>
                <Route path="/signup" element={<SignUppage/>}/>
            </Routes>
        </>
    )
}

export default Routing;