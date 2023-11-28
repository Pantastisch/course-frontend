import { setEmail, setUsername as setStoreUsername, setToken } from "../stores/profileStore";

import AccessToken from "../schemas/accessToken";
import Title from "../components/Title";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginView() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogin = async () => {
        // Get access token
        const accessTokenRes: Response = await fetch(import.meta.env.VITE_BACKEND_URL + "/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username,
                password,
            })
        });

        if (accessTokenRes.status !== 200) {
            setError("Invalid username or password")
            return
        }

        const accessToken: AccessToken = await accessTokenRes.json();

        // Get profile data
        const profileDataRes = await fetch(import.meta.env.VITE_BACKEND_URL + "/profiles/me", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + accessToken.access_token,
            },
        });

        const profileData = await profileDataRes.json();

        // If 200, redirect to /
        if (profileDataRes.status !== 200) {
            setError("Invalid username or password")
            return
        } else {
            dispatch(setStoreUsername(username))
            dispatch(setToken(accessToken.access_token))
            dispatch(setEmail(profileData.email))

            navigate("/")
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">

            <div className="flex flex-col font-semibold items-center  mb-12">
                <Title className="text-7xl" />
                <h1 className="text-2xl">Login</h1>
            </div>

            <div className="flex flex-col gap-y-2">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-2 border rounded-lg"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border rounded-lg mb-4"
                />
                <button
                    onClick={handleLogin}
                    className="p-2 border rounded-lg bg-blue-500 text-white"
                >
                    Login
                </button>
            </div>

            {error != "" && <div className="text-red-500 mt-2">
                {error}
            </div>}
        </div>
    );
}

export default LoginView;