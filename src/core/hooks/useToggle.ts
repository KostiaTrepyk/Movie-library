import { useState } from "react";

export function useToggle(initState?: boolean): readonly [value: boolean, toggle: () => void] {
    const [value, setValue] = useState<boolean>(initState || false);

    function toggle() {
        setValue((prev) => !prev);
    }

    return [value, toggle] as const;
}
