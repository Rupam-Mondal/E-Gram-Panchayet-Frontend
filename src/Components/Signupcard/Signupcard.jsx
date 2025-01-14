import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useSignupapi } from "@/Hooks/ApiHooks/useSignup";
import useSignup from "@/Hooks/ContextHooks/useSignup";
import { TriangleAlertIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signupcard({ code }) {
    const [username , setUsername] = useState(null);
    const [email , setEmail] = useState(null);
    const [password , setPassword] = useState(null);
    const [confirmpassword , setConfirmPassword] = useState(null);
    const [usercode , setUsercode] = useState(null);
    const { userType, setUserType } = useSignup();
    const navigate = useNavigate();

    const { isPending,isSuccess,error,mutateAsync:SignupRequest } = useSignupapi();

    const [validationError , setValidationError] = useState(false);
    async function handleSubmit(){
        if(!username || !email || !password || !confirmpassword){
            setValidationError(true);
            return;
        }
        if(usercode){
            const SignupObject = {
                username: username,
                email: email,
                password: password,
                role:userType,
                code:usercode
            }

            try {
                await SignupRequest(SignupObject);
            } catch (error) {
                console.log("Something went wrong")
            }
            return;
        }
        const SignupObject = {
            username: username,
            email: email,
            password: password,
            code: usercode
        }
        try {
            await SignupRequest(SignupObject);
        } catch (error) {
            console.log("Something went wrong")
        }
    }

    useEffect(() => {
        if(isSuccess){
            console.log(isSuccess)
            navigate('/home')
        }
    } , [isSuccess])
    return (
        <Card className="w-1/4 mx-auto shadow-lg p-3 bg-white">
            <CardHeader>
                <CardTitle className="text-xl font-bold">Sign Up</CardTitle>
                <CardDescription className="text-gray-600">
                    Please fill out the form to create an account.
                    <div>
                        {
                            validationError && (
                                <div className="h-10 bg-destructive/75 rounded-md flex items-center px-3">
                                    <TriangleAlertIcon color="red"/>
                                    <span className="ml-3 text-black">All fields are required</span>
                                </div>
                            )
                        }
                        {
                            error && (
                                <div className="h-10 bg-destructive/75 rounded-md flex items-center px-3">
                                    <TriangleAlertIcon color="red" />
                                    <span className="ml-3 text-black">Signup failed, try again</span>
                                </div>
                            )
                        }
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-2">
                    <div>
                        <input
                            id="username"
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            id="confirm-password"
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm your password"
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                    </div>
                    {code && (
                        <div>
                            <input
                                id="code"
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter the code"
                                onChange={(e) => {
                                    setUsercode(e.target.value);
                                }}
                            />
                        </div>
                    )}
                </form>
            </CardContent>
            <CardFooter>
                <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={async () => {
                        await handleSubmit();
                    }}
                >
                    Sign Up
                </button>
            </CardFooter>
        </Card>
    );
}

export default Signupcard;
