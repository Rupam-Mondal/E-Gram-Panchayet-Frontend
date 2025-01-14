import { CombineContext } from "@/utils/CombineContext";
import { Signupcontextprovider } from "./SignupContext";

export const AppcontextProvider = CombineContext(
    Signupcontextprovider
)