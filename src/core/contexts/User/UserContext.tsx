import { createContext } from "react";
import { deviceType } from "./types/types";
import { detectDeviceType } from "./helpers/detectDeviceType";

export interface IUserContext {
    deviceType: deviceType;
}

const initialState: IUserContext = {
    deviceType: detectDeviceType(),
};

export const UserContext = createContext<IUserContext>(initialState);
