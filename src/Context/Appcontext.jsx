import { CombineContext } from "@/utils/CombineContext";
import { Signupcontextprovider } from "./SignupContext";
import { AuthcontextProvider } from "./UserContext";

export const AppcontextProvider = CombineContext(
    Signupcontextprovider,
    AuthcontextProvider
)