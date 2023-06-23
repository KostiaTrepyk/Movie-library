import { FormGroup, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../../../core/hooks/useAppDispatch";
import { AuthActions } from "../../../../redux/AuthSlice/AuthSlice";
import { useNavigate } from "react-router-dom";
import { HOMEROUTE } from "../../../../core/Router/utils/routes";

const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function formSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        dispatch(AuthActions.login({ email, password }));
        navigate(HOMEROUTE.path);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <FormGroup
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: { md: 3, xs: 2 },
                }}
            >
                <TextField
                    label="Email"
                    InputProps={{
                        type: "email",
                        required: true,
                        autoComplete: "email",
                        value: email,
                        onChange: (e) => setEmail(() => e.target.value),
                    }}
                />
                <TextField
                    label="Password"
                    InputProps={{
                        type: "password",
                        required: true,
                        autoComplete: "current-password",
                        value: password,
                        onChange: (e) => setPassword(() => e.target.value),
                    }}
                />
                <Button sx={{ alignSelf: "end" }} type="submit" size="large">
                    Login
                </Button>
            </FormGroup>
        </form>
    );
};

export default LoginForm;
