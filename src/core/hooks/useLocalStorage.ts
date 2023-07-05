import { useEffect, useState } from "react";

export function useLocalStorage<T>(
    key: string,
    initialValue: T
): readonly [unknown, React.Dispatch<React.SetStateAction<T>>] {
    const valueFromStorage = () => {
        const storage = localStorage.getItem(key);
        if (storage) {
            try {
                return JSON.parse(storage);
            } catch (error) {
                localStorage.setItem(key, JSON.stringify(initialValue));
                return initialValue;
            }
        }
        return initialValue;
    };

    const [value, setValue] = useState<T>(valueFromStorage);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue] as const;
}
