import React from "react";

const Register = () => {
  return (
    <>
      <form
        action=""
        className="w-screen flex flex-col justify-center items-center h-[95vh] gap-8"
      >
        <input
          type="email"
          placeholder="Ingresa tu email"
          className="px-3 py-2 w-[35%]"
        />
        <input
          type="email"
          placeholder="Ingresa tu contrasena"
          className="px-3 py-2 w-[35%]"
        />
        <input
          type="email"
          placeholder="Confirma tu contrasena"
          className="px-3 py-2 w-[35%]"
        />
        <button className="backdrop-blur-sm bg-teal-600 px-5 py-2 rounded-lg">Registrame!</button>
      </form>
    </>
  );
};

export default Register;
