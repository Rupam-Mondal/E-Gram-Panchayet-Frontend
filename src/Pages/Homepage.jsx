import { useAuth } from "@/Hooks/ContextHooks/useAuth";
import SparklesText from "../Components/ui/sparkles-text";
import Navbar from "@/Components/Navbar/Navbar";
import { useEffect } from "react";
import OfficerLandingpage from "@/Components/OfficerLandingPage/OfficerLandingpage";

function Homepage(){
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        console.log(user)
    })
    return (
        <>
            <div className="h-[100vh]">
                <Navbar/>
                <div className="px-20">
                    {user.role === 'User' && (
                        <div className="w-full h-20 bg-blue-500"></div>
                    )}
                    {user.role === 'Officer' && (
                        <OfficerLandingpage/>
                    )}
                    {user.role === 'Staff' && (
                        <div className="w-full h-20 bg-black"></div>
                    )}
                </div>

            </div>
        </>
    )
}

export default Homepage;