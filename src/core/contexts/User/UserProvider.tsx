import { FC, PropsWithChildren } from "react";
import { UserContext, IUserContext } from "./UserContext";
import { detectDeviceType } from "./helpers/detectDeviceType";

const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const value: IUserContext = {
        deviceType: detectDeviceType(),
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
