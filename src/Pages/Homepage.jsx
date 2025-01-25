
import Navbar from "@/Components/Navbar/Navbar";
import { useEffect } from "react";
import OfficerLandingpage from "@/Components/OfficerLandingPage/OfficerLandingpage";
import UserLandingpage from "@/Components/UserLandingpage/Userlandingpage";

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
                        <UserLandingpage/>
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