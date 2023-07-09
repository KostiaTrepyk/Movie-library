import { deviceType } from "../types/types";

export function detectDeviceType(): deviceType {
    const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

    const isMobile: boolean = toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });

    if (isMobile) return "MOBILE";
    return "PC";
}
