import { useState } from "react";
import { FormGroup, TextField, Button } from "@mui/material";

interface RegistrationFormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>, data: RegistrationFormData) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <form onSubmit={(e) => onSubmit(e, { username, email, password })}>
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

export interface RegistrationFormData {
    username: string;
    email: string;
    password: string;
}
