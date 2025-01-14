import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signincard() {
    const navigate = useNavigate();
    const [username , setUsername] = useState(null);
    const [email , setEmail] = useState(null);
    const [password , setPassword] = useState(null);
    async function handleSubmit(){
        
    }
    return (
        <>
            <Card className="w-1/3 mx-auto shadow-lg p-6 bg-white rounded-lg">
                <CardHeader className="mb-4">
                    <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
                    <CardDescription className="text-gray-600 text-center">
                        Please fill out the form to sign in
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div>
                            <input
                                id="username"
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your username"
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <input
                                id="email"
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                type="password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                    </form>
                    <div className="text-sm mt-3">Don't have account ? <span className="font-bold text-blue-800 underline cursor-pointer" onClick={() => {
                        navigate('/signup');
                    }}>signup</span></div>
                </CardContent>
                <CardFooter className="mt-4 text-center">
                    <button
                        type="submit"
                        className="w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                </CardFooter>
            </Card>
        </>
    );
}

export default Signincard;
