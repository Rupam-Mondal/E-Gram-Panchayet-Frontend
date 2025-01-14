import { useAuth } from "@/Hooks/ContextHooks/useAuth";
import SparklesText from "../Components/ui/sparkles-text";
import Navbar from "@/Components/Navbar/Navbar";

function Homepage(){
    const { auth, setAuth } = useAuth();
    return (
        <>
            <div className="h-[100vh]">
                <Navbar/>
            </div>
        </>
    )
}

export default Homepage;