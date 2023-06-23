import { FormGroup, TextField, Button } from "@mui/material";
import { useState } from "react";
import { AuthActions } from "../../../../redux/AuthSlice/AuthSlice";
import { useAppDispatch } from "../../../../core/hooks/useAppDispatch";
import { HOMEROUTE } from "../../../../core/Router/utils/routes";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function formSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        dispatch(AuthActions.registration({ username, email, password }));
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
                    label="Username"
                    InputProps={{
                        type: "text",
                        required: true,
                        autoComplete: "username",
                        value: username,
                        onChange: (e) => setUsername(() => e.target.value),
                    }}
                />
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
                    Registration
                </Button>
            </FormGroup>
        </form>
    );
};

export default RegistrationForm;
