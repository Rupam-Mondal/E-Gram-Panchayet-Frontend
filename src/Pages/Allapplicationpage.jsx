import { useGetApplicationOnProgress } from "@/Hooks/ApiHooks/useGetApplicationProgress";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function Allapplication() {
    const [status, setStatus] = useState('Applied');
    const { data, isSuccess, isError, isFetching } = useGetApplicationOnProgress(status);
    const queryClient = useQueryClient();

    useEffect(() => {
        queryClient.invalidateQueries(['ApplicationsProgress']);
    }, [status]);

    return (
        <>
            {/* Navigation Section */}
            <div className="px-20 py-4 flex justify-between items-center bg-white border border-gray-200 rounded-lg shadow-md">
                {['Applied', 'Reviewed', 'Done', 'Failed'].map((item) => (
                    <div
                        key={item}
                        className={`cursor-pointer text-lg font-semibold px-6 py-2 rounded-lg transition duration-300
                            ${status === item
                                ? `text-black bg-gradient-to-r 
                                    from-${item === 'Applied' ? 'blue-600' : item === 'Reviewed' ? 'purple-600' : item === 'Done' ? 'green-600' : 'red-600'} 
                                    to-${item === 'Applied' ? 'blue-700' : item === 'Reviewed' ? 'purple-700' : item === 'Done' ? 'green-700' : 'red-700'} 
                                    shadow-lg`
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                            }`}
                        onClick={() => setStatus(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Applications Section */}
            <div className="mt-8 space-y-6">
                {data?.data?.map((v, i) => (
                    <div
                        key={i}
                        className="flex items-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Image Section */}
                        <div className="flex-shrink-0">
                            <img
                                src={v?.service?.image}
                                alt={v?.service?.title || 'Service'}
                                className="h-24 w-24 object-cover rounded-md border border-gray-300 shadow-sm"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="ml-6">
                            <div className="text-xl font-semibold text-gray-800">
                                {v?.service?.title || 'No Title Available'}
                            </div>
                            <div className="text-md font-medium mt-2">
                                Status: {" "}
                                <span
                                    className={`font-semibold ${v?.progress === 'Done'
                                        ? 'text-green-700'
                                        : v?.progress === 'Failed'
                                            ? 'text-red-700'
                                            : v?.progress === 'Reviewed'
                                                ? 'text-purple-700'
                                                : 'text-blue-700'
                                        }`}
                                >
                                    {v?.progress || 'N/A'}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Fallback for No Data */}
                {isSuccess && data?.data?.length === 0 && (
                    <div className="text-center text-gray-500 mt-6">
                        No applications found for the selected status.
                    </div>
                )}

                {/* Loading State */}
                {isFetching && (
                    <div className="text-center text-blue-500 mt-6 animate-pulse">
                        Loading applications...
                    </div>
                )}

                {/* Error State */}
                {isError && (
                    <div className="text-center text-red-500 mt-6">
                        Failed to fetch applications. Please try again later.
                    </div>
                )}
            </div>
        </>
    );
}

export default Allapplication;
