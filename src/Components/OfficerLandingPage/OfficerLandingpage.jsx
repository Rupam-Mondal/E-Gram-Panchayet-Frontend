import { Plus } from "lucide-react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import AllServices from "../Allservices/Allservices";
import TypingAnimation from "../ui/typing-animation";
import { useCreateServiceContext } from "@/Hooks/ContextHooks/useCreateServiceContext";

function OfficerLandingpage() {
    const { openModal, setOpenModal } = useCreateServiceContext();
    function Openmodal(){
        setOpenModal(true);
    }
    return (

        <>
            <div className="w-full py-10 flex justify-center items-center bg-gradient-to-r from-cyan-600 via-green-500 to-yellow-400 text-white rounded-lg">
                <div className="p-6 bg-black/30 backdrop-blur-md rounded-lg shadow-lg">
                    <TypingAnimation className="text-2xl font-semibold tracking-wide text-white">
                        Hello, sir! How are you doing today?
                    </TypingAnimation>
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
