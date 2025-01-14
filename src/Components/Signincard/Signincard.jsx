import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import useSignin from "@/Hooks/ApiHooks/useSiginin";
import { Loader, TriangleAlertIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signincard() {
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [validationError, setValidationError] = useState(false);
    const { isPending, isSuccess, error, mutateAsync: SigninReqToBackend } = useSignin();
    async function handleSubmit() {
        if (!username || !email || !password) {
            setValidationError(true);
            return;
        }
        const SigninObject = {
            email: email,
            username: username,
            password: password
        }

        try {
            await SigninReqToBackend(SigninObject)
        } catch (error) {
            console.log("Signin failed");
        }
    }

    useEffect(() => {
        if (isSuccess) {
            navigate('/home');
        }
    }, [isSuccess])
    return (
        <>
            <Card className="w-1/3 mx-auto shadow-lg p-6 bg-white rounded-lg">
                <CardHeader className="mb-4">
                    <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
                    <CardDescription className="text-gray-600 text-center">
                        Please fill out the form to sign in
                        {
                            validationError && (
                                <div className="h-10 bg-destructive/75 rounded-md flex items-center px-3">
                                    <TriangleAlertIcon color="red" />
                                    <span className="ml-3 text-black">All fields are required</span>
                                </div>
                            )
                        }
                        {
                            error && (
                                <div className="h-10 bg-destructive/75 rounded-md flex items-center px-3 mt-3">
                                    <TriangleAlertIcon color="red" />
                                    <span className="ml-3 text-black">Signin failed, try again</span>
                                </div>
                            )
                        }
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
                    {
                        isPending ? (
                            <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center"
                            >
                                <Loader className="animate-spin" />
                            </button>
                        ) : (
                            <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={handleSubmit}
                            >
                                Sign Up
                            </button>
                        )
                    }
                </CardFooter>
            </Card>
        </>
    );
}

export default Signincard;
