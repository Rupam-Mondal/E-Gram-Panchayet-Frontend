import { useState } from "react";
import Signoptions from "../Components/SignupOptions";
import { CoolMode } from "@/Components/ui/cool-mode";
import { Button } from "@/Components/ui/button";

function SignUppage() {
    return (
        <>
            <div className="h-[100vh] w-full flex">
                {/* left section */}

                <div className="w-full h-full flex justify-center items-center">
                    <Signoptions/>
                </div>
            </div>
        </>
    )
}

export default SignUppage;