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

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const SignUpPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());

        if (!user.name || !user.image || !user.email || !user.password) {
            return toast.error("All fields are required");
        }

        try {
            const { data, error } = await authClient.signUp.email({
                email: user.email,
                password: user.password,
                name: user.name,
                image: user.image,
            });

            if (data) {
                toast.success("Account created successfully!");

                setTimeout(() => {
                    redirect("/");
                }, 1000);
            }

            if (error) {
                toast.error(error.message);
            }

        } catch (err) {
            toast.error("Something went wrong!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-zinc-950 dark:to-zinc-900 px-4">

            <Card className="w-full max-w-md p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">

                <div className="flex justify-center mb-6">
                    <Image
                        src="/doctor.svg"
                        alt="logo"
                        width={60}
                        height={60}
                    />
                </div>

                <h1 className="text-3xl font-black text-center">
                    Create Account
                </h1>

                <p className="text-center text-gray-500 mt-2 mb-6">
                    Fill your details to get started
                </p>

                <Form onSubmit={onSubmit} className="flex flex-col gap-5">

                    <TextField name="name" type="text" isRequired>
                        <Label>Full Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    <TextField name="image" type="url" isRequired>
                        <Label>Profile Image URL</Label>
                        <Input placeholder="Enter profile image URL" />
                        <Description>Use a valid image URL</Description>
                        <FieldError />
                    </TextField>

                    <TextField name="email" type="email" isRequired>
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                        <FieldError />
                    </TextField>

                    <TextField name="password" type="password" isRequired>
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            8+ chars, 1 uppercase, 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl"
                    >
                        Create Account
                    </Button>

                </Form>

                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-gray-300 dark:bg-zinc-700" />
                    <p className="text-sm text-gray-500">OR</p>
                    <div className="flex-1 h-px bg-gray-300 dark:bg-zinc-700" />
                </div>

                <Button
                    onClick={() =>
                        authClient.signIn.social({
                            provider: "google",
                            callbackURL: "/",
                        })
                    }
                    variant="bordered"
                    className="w-full h-12"
                >
                    <FcGoogle size={22} />
                    Continue with Google
                </Button>

                <p className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link href="/login" className="text-cyan-600 font-semibold">
                        Login
                    </Link>
                </p>

            </Card>

        </div>
    );
};

export default SignUpPage;