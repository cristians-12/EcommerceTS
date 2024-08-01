"use client";
import React, { useState } from "react";

type User = {
  email: string;
  password: string;
};

const Login = () => {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    const data = await response.json();
    console.log(data);
    alert(data.message);
  };

  return (
    <div>
      <form
        action=""
        className="w-screen flex flex-col justify-center items-center h-[95vh] gap-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Ingresa tu email"
          className="px-3 py-2 w-[35%] text-black"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingresa tu contrasena"
          className="px-3 py-2 w-[35%] text-black"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          onClick={() => handleLogin()}
          className="backdrop-blur-sm bg-teal-600 px-5 py-2 rounded-lg"
        >
          Iniciar sesion
        </button>
      </form>
    </div>
  );
};

export default Login;
