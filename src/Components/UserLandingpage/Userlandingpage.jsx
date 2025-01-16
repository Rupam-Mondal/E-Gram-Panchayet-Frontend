import AllServices from "../Allservices/Allservices";
import TypingAnimation from "../ui/typing-animation";

function UserLandingpage() {
    return (
        <>
            {/* Description Section */}
            <div className="w-full py-10 flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg">
                <div className="p-6 bg-white/20 backdrop-blur-md rounded-lg shadow-lg">
                    <TypingAnimation className="text-2xl font-semibold tracking-wide">
                        Access Panchayat Services Effortlessly
                    </TypingAnimation>
                </div>
            </div>

            <div className="w-full min-h-screen bg-white p-6">
                {/* Heading Section */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">All Services</h1>
                </div>
                <div></div>

                {/* Display All Services */}
                <AllServices/>
            </div>
        </>
    )
}

export default UserLandingpage;