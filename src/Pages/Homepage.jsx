import { useAuth } from "@/Hooks/ContextHooks/useAuth";

function Homepage(){
    const { auth, setAuth } = useAuth();
    return (
        <>
            <div className="bg-red-400 h-[100vh]">{auth?.user?.role}</div>
        </>
    )
}

export default Homepage;