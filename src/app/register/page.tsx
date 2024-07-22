"use client";
import React, { useState } from "react";

type User = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = () => {
    if (user.password == user.confirmPassword) {
      alert("pase");
    }else{
        
    }
  };

  return (
    <>
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
        <input
          type="text"
          placeholder="Confirma tu contrasena"
          className="px-3 py-2 w-[35%] text-black"
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
        />
        <button
          onClick={() => handleRegister()}
          className="backdrop-blur-sm bg-teal-600 px-5 py-2 rounded-lg"
        >
          Registrame!
        </button>
      </form>
    </>
  );
};

export default Register;
