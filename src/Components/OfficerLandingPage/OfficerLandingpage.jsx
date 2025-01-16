import { Plus } from "lucide-react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import AllServices from "../Allservices/Allservices";

function OfficerLandingpage() {
    return (
        <div className="w-full min-h-screen bg-white p-6">
            {/* Heading Section */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">All Services</h1>
                <button className="flex items-center text-white px-4 py-2 rounded-lg transition">
                    <InteractiveHoverButton className="text-black">Create Service</InteractiveHoverButton>
                </button>
            </div>

            {/* Display All Services */}
            <AllServices />
        </div>
    );
}

export default OfficerLandingpage;
