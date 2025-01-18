import { Plus } from "lucide-react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import AllServices from "../Allservices/Allservices";
import TypingAnimation from "../ui/typing-animation";
import { useCreateServiceContext } from "@/Hooks/ContextHooks/useCreateServiceContext";
import AvatarCircles from "../ui/avatar-circles";
import { useNavigate } from "react-router-dom";

function OfficerLandingpage() {
    const { openModal, setOpenModal } = useCreateServiceContext();
    function Openmodal(){
        setOpenModal(true);
    }
    const navigate = useNavigate();
    const avatars = [
        {
            imageUrl: "https://avatars.githubusercontent.com/u/16860528",
            profileUrl: "https://github.com/dillionverma",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/20110627",
            profileUrl: "https://github.com/tomonarifeehan",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/106103625",
            profileUrl: "https://github.com/BankkRoll",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/59228569",
            profileUrl: "https://github.com/safethecode",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/59442788",
            profileUrl: "https://github.com/sanjay-mali",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/89768406",
            profileUrl: "https://github.com/itsarghyadas",
        },
    ];
    return (

        <>
            <div className="w-full py-10 flex justify-center items-center bg-gradient-to-r from-cyan-600 via-green-500 to-yellow-400 text-white rounded-lg">
                <div className="p-6 bg-black/30 backdrop-blur-md rounded-lg shadow-lg">
                    <TypingAnimation className="text-2xl font-semibold tracking-wide text-white">
                        Hello, sir! How are you doing today?
                    </TypingAnimation>
                </div>
            </div>


            {/* All Application section */}
            <div className="w-full py-10">
                <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">View All Applications</h2>
                        <p className="text-lg text-gray-600">Browse through all submitted applications from the team.</p>
                    </div>

                    <div className="flex justify-center items-center space-x-4">
                        <AvatarCircles numPeople={99} avatarUrls={avatars} />

                        {/* Arrow Button */}
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-200"
                            onClick={() => {
                                navigate('/Applications')
                            }}
                        >
                            <svg
                                className="w-6 h-6 text-gray-600 hover:text-gray-800"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>






            <div className="w-full min-h-screen bg-white p-6">
                {/* Heading Section */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">All Services</h1>
                    <div className="flex items-center text-white px-4 py-2 rounded-lg transition" onClick={Openmodal}>
                        <InteractiveHoverButton className="text-black">Create Service</InteractiveHoverButton>
                    </div>
                </div>

                {/* Display All Services */}
                <AllServices />
            </div>
        </>
    );
}

export default OfficerLandingpage;
