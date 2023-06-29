import { useState } from "react";
import { FormGroup, TextField, Button } from "@mui/material";

interface LoginFormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>, data: LoginFormData) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <form onSubmit={(e) => onSubmit(e, { email, password })}>
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

export interface LoginFormData {
    email: string;
    password: string;
}
