import { CombineContext } from "@/utils/CombineContext";
import { Signupcontextprovider } from "./SignupContext";
import { AuthcontextProvider } from "./UserContext";
import { CreateServiceModalContextProvider } from "./CreateServiceModalContext";
import { CreateApplicationContextProvider } from "./CreateApplicationModal";

export const AppcontextProvider = CombineContext(
    Signupcontextprovider,
    AuthcontextProvider,
    CreateServiceModalContextProvider,
    CreateApplicationContextProvider
)