import { CombineContext } from "@/utils/CombineContext";
import { Signupcontextprovider } from "./SignupContext";
import { AuthcontextProvider } from "./UserContext";
import { CreateServiceModalContextProvider } from "./CreateServiceModalContext";

export const AppcontextProvider = CombineContext(
    Signupcontextprovider,
    AuthcontextProvider,
    CreateServiceModalContextProvider
)