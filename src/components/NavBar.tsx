"use client";
import { useAuth } from "@/context/authContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavBar = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const path = usePathname();
  const { isLogged, signOut, user } = useAuth();

  const handleKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();

      try {
        const response = await fetch("http://localhost:8000/api/search/", {
          method: "POST",
          body: JSON.stringify({ letter: inputValue }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
  };
  return (
    <div className="fixed top-0 backdrop-blur-sm bg-emerald-800 w-screen flex justify-around items-center py-1">
      <div>
        <h1 className="text-[1.5rem] font-extrabold">LOGO</h1>
      </div>
      <div className="w-80">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Buscar.."
          className="w-96 py-1 px-2 text-black"
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="flex gap-10">
        <div>
          <Link href={"/"}>
            <h2
              className={
                path == "/"
                  ? "text-emerald-950 font-extrabold"
                  : "text-white font-light hover:text-emerald-950 transition ease-in-out hover:transition-all"
              }
            >
              Inicio
            </h2>
          </Link>
        </div>
        <div>
          <Link href={"/profile"}>
            <h2
              className={
                path == "/profile"
                  ? "text-emerald-950 font-extrabold"
                  : "text-white font-light hover:text-emerald-950 transition ease-in-out hover:transition-all"
              }
            >
              Perfil
            </h2>
          </Link>
        </div>
        <div>Carrito</div>
        <div>
          {isLogged ? (
            <button onClick={() => signOut()}>Salir de cuenta</button>
          ) : (
            <Link href={"/login"}>Iniciar sesion</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
