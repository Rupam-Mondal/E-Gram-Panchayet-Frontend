import useGetAllservice from "@/Hooks/ApiHooks/useGetAllservice";
import { useNavigate } from "react-router-dom";

function AllServices() {
    const { data, isSuccess, isError, isFetching } = useGetAllservice();
    const navigate = useNavigate();
    function Handle(id){
        navigate(`/service/${id}`);
    }
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data?.data?.map((v, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer"
                        onClick={() => {
                            Handle(v?._id);
                        }}
                    >
                        <h2 className="text-lg font-semibold text-black mb-2">{v.title}</h2>
                        <p className="text-sm text-gray-600">
                            {v?.description}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AllServices;