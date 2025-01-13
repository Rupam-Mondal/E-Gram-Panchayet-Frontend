import { Route, Routes } from "react-router-dom";
import SignUppage from "../Pages/Signinpage";

function Routing(){
    return (
        <>
            <Routes>
                <Route path="/signin" element={<SignUppage/>}/>
            </Routes>
        </>
    )
}

export default Routing;