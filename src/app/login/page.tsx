"use client";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import Router from "next/router";
import React, { useState, ChangeEvent, FormEvent } from "react";

const Login = () => {
  const { signIn, user, setUser } = useAuth();
  const {push} = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (user) {
      await signIn(user);
      push('/profile')
    } else {
      console.log("No hay usuario");
    }
  };

  return (
    <div className="w-screen">
      <form
        className="w-screen flex flex-col justify-center items-center h-[95vh] gap-8"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Ingresa tu email"
          className="px-3 py-2 w-[35%] text-black"
          value={user?.email || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUser((prevUser) => ({
              ...prevUser,
              email: e.target.value,
            }))
          }
        />
        <input
          type="password"
          placeholder="Ingresa tu contrasena"
          className="px-3 py-2 w-[35%] text-black"
          value={user?.password || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUser((prevUser) => ({
              ...prevUser,
              password: e.target.value,
            }))
          }
        />
        <button
          type="submit"
          className="backdrop-blur-sm bg-teal-600 px-5 py-2 rounded-lg"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
