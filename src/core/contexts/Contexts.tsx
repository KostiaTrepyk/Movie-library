import { FC, PropsWithChildren } from "react";
import UserContextProvider from "./User/UserProvider";

const Contexts: FC<PropsWithChildren> = ({ children }) => {
    return <UserContextProvider>{children}</UserContextProvider>;
};

export default Contexts;
