"use client";
import { useAuth } from "@/context/authContext";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

import React, { useState } from "react";

type User = {
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
};

const Register = () => {
  // const [user, setUser] = useState<User>({
  //   email: "",
  //   password: "",
  //   password_confirmation: "",
  //   name: "",
  // });

  const { setIsLogged, user, setUser, register } = useAuth();
  const { push } = useRouter();
  const handleRegister = () => {
    register();
    push("/");
  };

  // const handleRegister = async () => {
  //   if (user.password == user.password_confirmation) {
  //     const response = await fetch("http://localhost:8000/api/register", {
  //       method: "POST",
  //       // mode: "no-cors",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: user.email,
  //         password: user.password,
  //         name: user.name,
  //         password_confirmation: user.password_confirmation,
  //       }),
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     if (data.response == "ok") {
  //       setIsLogged(true);
  //       redireccionar();
  //     }
  //   } else {
  //     alert("Invalido");
  //   }
  // };

  return (
    <>
      <form
        action=""
        className="w-screen flex flex-col justify-center items-center h-[95vh] gap-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="px-3 py-2 w-[35%] text-black"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
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
        <input
          type="text"
          placeholder="Confirma tu contrasena"
          className="px-3 py-2 w-[35%] text-black"
          onChange={(e) =>
            setUser({ ...user, password_confirmation: e.target.value })
          }
        />
        <button
          onClick={() => handleRegister()}
          className="backdrop-blur-sm bg-teal-600 px-5 py-2 rounded-lg"
        >
          Registrame!
        </button>
        <Link href={"/login"}>Ya tengo una cuenta</Link>
      </form>
    </>
  );
};

export default Register;
