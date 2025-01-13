import { useState } from "react";

function Signoptions(){
    const [userType, setUserType] = useState('');
    return (
        <>
            <div className="flex flex-col items-center space-y-4 p-6 w-full md:w-1/2 rounded-xl shadow-xl">
                <div
                    onClick={() => {
                        setUserType("User");
                    }}
                    className={`w-full max-w-sm p-4 text-center ${userType === 'User' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'} rounded-md shadow-md cursor-pointer border border-blue-500 transition-all duration-300 md:max-w-md`}
                >
                    Are you a User?
                </div>

                <div
                    onClick={() => {
                        setUserType("Admin");
                    }}
                    className={`w-full max-w-sm p-4 text-center ${userType === 'Admin' ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'} rounded-md shadow-md cursor-pointer border border-green-600 transition-all duration-300 md:max-w-md`}
                >
                    Are you an Admin?
                </div>

                <div
                    onClick={() => {
                        setUserType("Officer");
                    }}
                    className={`w-full max-w-sm p-4 text-center ${userType === 'Officer' ? 'bg-purple-500 text-white' : 'hover:bg-purple-500 hover:text-white'} rounded-md shadow-md cursor-pointer border border-purple-500 transition-all duration-300 md:max-w-md`}
                >
                    Are you an Officer?
                </div>


            </div>
        </>
    )
}

export default Signoptions;