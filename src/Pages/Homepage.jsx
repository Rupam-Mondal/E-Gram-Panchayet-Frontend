import { useAuth } from "@/Hooks/ContextHooks/useAuth";

function Homepage(){
    const { auth, setAuth } = useAuth();
    return (
        <>
            <div className="bg-red-400 h-[100vh]"></div>
        </>
    )
}

export default Homepage;