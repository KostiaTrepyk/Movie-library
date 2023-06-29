import { LocalstorageKeys } from "../utils/localstorage_keys";
import Router from "./Router/Router";
import Theme from "./Theme/Theme";

const InitApp: React.FC = () => {
    function detectMob() {
        const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }

    localStorage.setItem(LocalstorageKeys.isMbile, JSON.stringify(detectMob()));

    return (
        <Theme>
            <Router />
        </Theme>
    );
};

export default InitApp;
