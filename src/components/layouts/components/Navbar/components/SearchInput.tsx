import { forwardRef } from "react";
import styles from "./styles/searchInput.module.css";

type Props = {
    open?: boolean;
};
const SearchInput = forwardRef(
    (
        { open = true, ...props }: Props & React.InputHTMLAttributes<HTMLInputElement>,
        ref: React.ForwardedRef<HTMLInputElement>
    ) => {
        return (
            <input
                type="text"
                data-open={open}
                {...props}
                className={`${styles.SearchInput} ${props.className || ""}`}
                ref={ref}
            />
        );
    }
);

export default SearchInput;
