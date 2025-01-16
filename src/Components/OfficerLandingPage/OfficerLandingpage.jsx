import { Plus } from "lucide-react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Placeholder for service cards */}
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer"
                    >
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Service Title</h2>
                        <p className="text-sm text-gray-600">
                            Description of the service goes here. It can be a short and concise overview.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OfficerLandingpage;
