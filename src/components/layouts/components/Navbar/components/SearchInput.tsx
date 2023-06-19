import styles from "./styles/searchInput.module.css";

type Props = {
    open?: boolean;
};
const SearchInput = ({ open = true, ...props }: Props & React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            type="text"
            data-open={open}
            {...props}
            className={`${styles.SearchInput} ${props.className || ""}`}
        />
    );
};

export default SearchInput;
