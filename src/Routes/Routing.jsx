import { Route, Routes } from "react-router-dom";
import Signinpage from "../Pages/Signinpage";

function Routing(){
    return (
        <>
            <Routes>
                <Route path="/signin" element={<Signinpage/>}/>
            </Routes>
        </>
    )
}

export default Routing;