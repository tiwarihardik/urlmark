"use client";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "@/fbconfig";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    // Handle email login
    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
        } catch (err: any) {
            setError(err.message);
        }
    };

    // Handle Google login
    const handleGoogleLogin = async () => {
        setError(null);
        try {
            await signInWithPopup(auth, googleProvider);
            alert("Google login successful!");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
            <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Login</h1>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <form onSubmit={handleEmailLogin} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Login with Email
                    </button>
                </form>

                <div className="flex items-center justify-center mt-4">
                    <div className="border-t border-gray-300 flex-1"></div>
                    <p className="text-sm text-gray-500 mx-4">OR</p>
                    <div className="border-t border-gray-300 flex-1"></div>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-red-600 focus:outline-none flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M21.35 11.1h-9.9v2.8h5.7c-.3 1.7-1.4 3-2.7 3.8l3.1 2.4c2.5-2.3 3.8-5.8 3.8-9.4v-.6c0-.3-.2-.4-.5-.4z"
                            fill="#fff"
                        />
                        <path
                            d="M12.02 21.95c3.6 0 6.6-1.2 8.7-3.2l-3.1-2.4c-1.1.7-2.6 1.1-4.3 1.1-3.4 0-6.3-2.3-7.3-5.5H2.05v2.6c2.1 4.4 6.6 7.4 10.97 7.4z"
                            fill="#fff"
                        />
                        <path
                            d="M4.65 12.8c-.1-.5-.2-1-.2-1.6s.1-1.1.2-1.6v-2.6H2.05c-.6 1.1-.95 2.4-.95 3.8s.35 2.7.95 3.8l2.6-2.4z"
                            fill="#fff"
                        />
                        <path
                            d="M12.02 4.95c1.9 0 3.6.7 4.9 1.9l2.6-2.6c-2.4-2.2-5.7-3.3-9.5-3.3C7.7 1.05 3.5 3.6 1.65 7.4l2.6 2.4c1-3.2 4-5.5 7.8-5.5z"
                            fill="#fff"
                        />
                    </svg>
                    Login with Google
                </button>
            </div>

    );
}
