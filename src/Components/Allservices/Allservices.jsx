function AllServices() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Placeholder for service cards */}
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer"
                    >
                        <h2 className="text-lg font-semibold text-black mb-2">Service Title</h2>
                        <p className="text-sm text-gray-600">
                            Description of the service goes here. It can be a short and concise overview.
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AllServices;