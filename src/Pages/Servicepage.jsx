import { useGetServiceById } from "@/Hooks/ApiHooks/useGetService";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import { InteractiveHoverButton } from "@/Components/ui/interactive-hover-button";
import { RainbowButton } from "@/Components/ui/rainbow-button";
import { useCreateApplicationContext } from "@/Hooks/ContextHooks/useCreateApplicationContext";

function Servicepage() {
    const { Id } = useParams();
    const { data, isSuccess, isFetching, error } = useGetServiceById(Id);
    const { openModal, setOpenModal } = useCreateApplicationContext();
    function ModalOpen(){
        console.log(openModal)
        setOpenModal(true);
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen py-12 px-6">
            <BoxReveal boxColor="#A3BFFA" duration={0.7}>
                <p className="text-4xl font-bold text-center text-gray-800 leading-tight">
                    {data?.data?.title}
                    <span className="text-[#4C8BF5]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor="#A3BFFA" duration={0.7}>
                <div className="mt-6 w-full max-w-xl">
                    <img
                        src={data?.data?.image}
                        alt={data?.data?.title}
                        className="rounded-lg shadow-xl transition-transform duration-500 transform hover:scale-105"
                    />
                </div>
            </BoxReveal>

            <BoxReveal boxColor="#A3BFFA" duration={0.7}>
                <div className="mt-6 text-center text-lg text-gray-800 leading-relaxed px-4 md:px-0">
                    <p>
                        <span className="text-red-600 font-semibold">Note: </span>
                        <span className="text-gray-800">{data?.data?.description}</span>
                    </p>
                </div>

            </BoxReveal>

            <BoxReveal boxColor="#A3BFFA" duration={0.7}>
                <RainbowButton className='mt-4'
                    onClick={ModalOpen}
                >Apply</RainbowButton>
            </BoxReveal>
        </div>
    );
}

export default Servicepage;
