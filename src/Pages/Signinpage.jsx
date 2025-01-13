import { useState } from "react";
import Signoptions from "../Components/SignupOptions";

function SignUppage() {
    return (
        <>
            <div className="h-[100vh] w-full flex">
                {/* left section */}

                <div className="w-1/2 h-full flex justify-center items-center">
                    <Signoptions/>
                </div>



                {/* Right section */}

                <div className="w-1/2 h-full">
                    
                </div>
            </div>
        </>
    )
}

export default SignUppage;