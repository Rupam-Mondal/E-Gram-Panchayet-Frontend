import { LogOut, User } from "lucide-react";
import SparklesText from "../ui/sparkles-text";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Navbar() {
    return (
        <div className="w-full flex px-20 select-none">
            <div className="flex w-full h-full border-b-2 py-2">
                <div className="flex items-center space-x-8">
                    <div><SparklesText text="E Panchayet" className="text-2xl" /></div>
                </div>

                <div className="flex flex-1 justify-center space-x-8 items-center">
                    <div className="cursor-pointer text-black font-semibold hover:text-gray-400">Home</div>
                    <div className="cursor-pointer text-black font-semibold hover:text-gray-400">Services</div>
                    <div className="cursor-pointer text-black font-semibold hover:text-gray-400">About</div>
                    <div className="cursor-pointer text-black font-semibold hover:text-gray-400">Contact</div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="cursor-pointer hover:text-gray-400">
                        <div className="w-10 h-10 rounded-full flex outline-none items-center justify-center text-white">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="select-none outline-none"><User color="black"/></DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                                    <DropdownMenuItem className="cursor-pointer">Log out <LogOut/></DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
