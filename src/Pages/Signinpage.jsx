import { useState } from "react";
import Signoptions from "../Components/SignupOptions";
import { CoolMode } from "@/Components/ui/cool-mode";
import { Button } from "@/Components/ui/button";
import Signupcard from "@/Components/Signupcard/Signupcard";

function SignUppage() {
    return (
        <>
            <div className="h-[100vh] w-full flex">
                {/* left section */}

                <div className="w-full h-full flex flex-col justify-center items-center">
                    <Signoptions/>
                    <Signupcard/>
                </div>
            </div>
        </>
    )
}

export default SignUppage;