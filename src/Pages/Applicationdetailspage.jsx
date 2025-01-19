import { useGetApplicationById } from "@/Hooks/ApiHooks/useGetApplicationById";
import { useParams } from "react-router-dom";
import { useState } from "react";

function ApplicationDetailsPage() {
    const { Id } = useParams();
    const { data, isSuccess, isError, isFetching } = useGetApplicationById(Id);

    const [progress, setProgress] = useState("");
    const [updateMessage, setUpdateMessage] = useState("");

    const handleUpdateProgress = async () => {
        // Mock API call for updating progress (replace with actual API call)
        try {
            // Simulating a successful update
            setUpdateMessage("Progress updated successfully!");
        } catch (error) {
            setUpdateMessage("Failed to update progress. Try again.");
        }
    };

    if (isFetching) {
        return (
            <div className="h-[100vh] flex items-center justify-center">
                <p className="text-lg font-medium text-gray-600">Loading...</p>
            </div>
        );
    }

    if (isError || !isSuccess || !data?.data) {
        return (
            <div className="h-[100vh] flex items-center justify-center">
                <p className="text-lg font-medium text-red-600">Error loading application details.</p>
            </div>
        );
    }

    const application = data.data;

    return (
        <div className="h-full w-full bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                {/* Service Title */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4">{application.service?.title || "No Title Available"}</h1>

                {/* Status */}
                <div className="mb-6">
                    <span className="text-lg font-semibold text-gray-600">Status: </span>
                    <span className="text-lg text-blue-600">{application.progress || "N/A"}</span>
                </div>

                {/* User Info */}
                <div className="mb-6 border-t border-gray-200 pt-4">
                    <h2 className="text-xl font-semibold text-gray-700">User Details</h2>
                    <p className="text-gray-600 mt-1"><strong>Username:</strong> {application.user?.username}</p>
                    <p className="text-gray-600"><strong>Email:</strong> {application.user?.email}</p>
                </div>

                {/* Service Description */}
                <div className="mb-6 border-t border-gray-200 pt-4">
                    <h2 className="text-xl font-semibold text-gray-700">Service Details</h2>
                    <p className="text-gray-600 mt-1">{application.service?.description || "No Description Available"}</p>
                </div>

                {/* Uploaded Documents */}
                <div className="mb-6 border-t border-gray-200 pt-4">
                    <h2 className="text-xl font-semibold text-gray-700">Uploaded Documents</h2>
                    <div className="flex gap-4 mt-2">
                        {application.documents?.length > 0 ? (
                            application.documents.map((doc, index) => (
                                <img
                                    key={index}
                                    src={doc.image}
                                    alt={`Document ${index + 1}`}
                                    className="h-20 w-20 rounded-lg shadow-md object-cover border border-gray-200"
                                />
                            ))
                        ) : (
                            <p className="text-gray-600">No documents uploaded.</p>
                        )}
                    </div>
                </div>

                {/* Comment */}
                <div className="mb-6 border-t border-gray-200 pt-4">
                    <h2 className="text-xl font-semibold text-gray-700">Comments</h2>
                    <p className="text-gray-600 mt-1">{application.comment || "No Comments Available"}</p>
                </div>

                {/* Update Progress */}
                <div className="border-t border-gray-200 pt-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Update Progress</h2>
                    <div className="flex items-center gap-4">
                        <select
                            value={progress}
                            onChange={(e) => setProgress(e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 text-gray-700"
                        >
                            <option value="" disabled>
                                Select new progress
                            </option>
                            <option value="Applied">Applied</option>
                            <option value="Reviewed">Reviewed</option>
                            <option value="Done">Done</option>
                            <option value="Failed">Failed</option>
                        </select>
                        <button
                            onClick={handleUpdateProgress}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Update
                        </button>
                    </div>
                    {updateMessage && (
                        <p className={`mt-2 text-sm ${updateMessage.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                            {updateMessage}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ApplicationDetailsPage;
