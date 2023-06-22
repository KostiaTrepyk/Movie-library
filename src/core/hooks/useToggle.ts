import { useState } from "react";

export function useToggle(
    initState?: boolean
): readonly [value: boolean, toggle: () => void, setValue: React.Dispatch<React.SetStateAction<boolean>>] {
    const [value, setValue] = useState<boolean>(initState || false);

    function toggle() {
        setValue((prev) => !prev);
    }

    return [value, toggle, setValue] as const;
}
