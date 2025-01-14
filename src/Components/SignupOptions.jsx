import useSignup from "@/Hooks/ContextHooks/useSignup";

function Signoptions() {
    const { userType, setUserType } = useSignup();
    return (
        <>
            <div className="flex items-center justify-center w-1/4 p-2 rounded-xl shadow-xl gap-3">
                <div
                    onClick={() => {
                        setUserType("User");
                    }}
                    className={`px-5 py-2 text-center ${userType === 'User' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'} rounded-md shadow-md cursor-pointer border border-blue-500 transition-all duration-300`}
                >
                    User
                </div>

                <div
                    onClick={() => {
                        setUserType("Staff");
                    }}
                    className={`px-5 py-2 text-center ${userType === 'Staff' ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'} rounded-md shadow-md cursor-pointer border border-green-600 transition-all duration-300`}
                >
                    Staff
                </div>

                <div
                    onClick={() => {
                        setUserType("Officer");
                    }}
                    className={`px-5 py-2 text-center ${userType === 'Officer' ? 'bg-purple-500 text-white' : 'hover:bg-purple-500 hover:text-white'} rounded-md shadow-md cursor-pointer border border-purple-500 transition-all duration-300`}
                >
                    Officer
                </div>
            </div>
        </>
    );
}

export default Signoptions;
