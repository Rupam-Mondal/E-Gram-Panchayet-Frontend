import { useState } from "react";

function Allapplication() {
    const [status, setStatus] = useState('Applied');
    return (
        <>
            <div className="px-20 py-4 flex justify-between items-center text-gray-700 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                <div
                    className={`cursor-pointer text-lg font-medium transition duration-300 px-4 py-2 rounded-md ${status === 'Applied' ? 'text-blue-600 bg-blue-100 border-b-2 border-blue-400' : 'hover:text-gray-600 hover:bg-gray-100'
                        }`}
                    onClick={() => setStatus('Applied')}
                >
                    Applied
                </div>
                <div
                    className={`cursor-pointer text-lg font-medium transition duration-300 px-4 py-2 rounded-md ${status === 'Reviewed' ? 'text-purple-600 bg-purple-100 border-b-2 border-purple-400' : 'hover:text-gray-600 hover:bg-gray-100'
                        }`}
                    onClick={() => setStatus('Reviewed')}
                >
                    Reviewed
                </div>
                <div
                    className={`cursor-pointer text-lg font-medium transition duration-300 px-4 py-2 rounded-md ${status === 'Done' ? 'text-green-600 bg-green-100 border-b-2 border-green-400' : 'hover:text-gray-600 hover:bg-gray-100'
                        }`}
                    onClick={() => setStatus('Done')}
                >
                    Done
                </div>
                <div
                    className={`cursor-pointer text-lg font-medium transition duration-300 px-4 py-2 rounded-md ${status === 'Failed' ? 'text-red-600 bg-red-100 border-b-2 border-red-400' : 'hover:text-gray-600 hover:bg-gray-100'
                        }`}
                    onClick={() => setStatus('Failed')}
                >
                    Failed
                </div>
            </div>
        </>
    );
}

export default Allapplication;
