import { useEffect, useState } from "react";
import Signoptions from "../Components/SignupOptions";
import { CoolMode } from "@/Components/ui/cool-mode";
import { Button } from "@/Components/ui/button";
import Signupcard from "@/Components/Signupcard/Signupcard";
import useSignup from "@/Hooks/ContextHooks/useSignup";

function SignUppage() {
    const { userType, setUserType } = useSignup();
    useEffect(() => {
        console.log(userType)
    } , [userType])
    return (
        <>
            <div className="h-[100vh] w-full flex">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <Signoptions />
                    {
                        userType == 'Officer' || userType == 'Staff' ? (
                            <Signupcard
                                code={'code'}
                            />
                        ) : (
                            <Signupcard
                            />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default SignUppage;