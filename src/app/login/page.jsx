"use client";

import { authClient } from "@/lib/auth-client";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password
        })
        if (data) {
            redirect("/");
        }
        if (error) {
            alert(error.message);
        }

    }
    return (
        <div className="max-w-7xl mx-auto p-5">
            <div>
                <h1 className="text-2xl font-bold">Login</h1>
            </div>
            <Card className="border rounded-none p-8">
                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2 justify-center">
                        <Button className={'rounded-none w-full'} type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
                <div className="w-full">
                    {/* Divider */}
                    <div className="flex items-center gap-3 my-5">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <p className="text-sm text-gray-500">OR</p>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Google Button */}
                    <Button
                        onClick={() =>
                            authClient.signIn.social({
                                provider: "google",
                                callbackURL: "/",
                            })
                        }
                        variant="bordered"
                        className="w-full rounded-none h-12 text-base font-medium border-gray-300 hover:bg-gray-100 transition"
                    >
                        <FcGoogle size={24} />
                        Continue with Google
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;