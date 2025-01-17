import { useParams } from "react-router-dom";

function Servicepage(){
    const { Id } = useParams();
    return (
        <>
            <div className="w-full h-20 bg-red-300"></div>
        </>
    )
}

export default Servicepage;