import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function Signupcard({ code }) {
    return (
        <Card className="w-1/4 mx-auto shadow-lg p-3 bg-white">
            <CardHeader>
                <CardTitle className="text-xl font-bold">Sign Up</CardTitle>
                <CardDescription className="text-gray-600">
                    Please fill out the form to create an account.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-2">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium">
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm your password"
                        />
                    </div>
                    {code && (
                        <div>
                            <label htmlFor="code" className="block text-sm font-medium">
                                Code
                            </label>
                            <input
                                id="code"
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter the code"
                            />
                        </div>
                    )}
                </form>
            </CardContent>
            <CardFooter>
                <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Sign Up
                </button>
            </CardFooter>
        </Card>
    );
}

export default Signupcard;
