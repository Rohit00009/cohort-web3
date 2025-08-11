"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen text-lg">
      <div>Signup</div>
      <div className="border p-4 m-2">
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          onClick={async () => {
            console.log(username);
            console.log(password);
            await axios.post("http://localhost:3000/api/v1/signup", {
              username,
              password,
            });

            router.push("/signin");
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
