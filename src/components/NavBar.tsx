"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const path = usePathname();
  return (
    <div className="fixed top-0 backdrop-blur-sm bg-emerald-800 w-screen flex justify-around items-center py-1">
      <div>
        <h1 className="text-[1.5rem] font-extrabold">LOGO</h1>
      </div>
      <div className="w-80">
        <input type="text" placeholder="Buscar.." className="w-96 py-1 px-2 text-black" />
      </div>
      <div className="flex gap-10">
        <div>
          <Link href={"/"}>
            <h2 className={path == "/" ? "text-emerald-950 font-extrabold" : "text-white font-light"}>
              Inicio
            </h2>
          </Link>
        </div>
        <div>
          <Link href={"/profile"}>
            <h2 className={path == "/profile" ? "text-emerald-950 font-extrabold": "text-white font-light"}>
              Perfil
            </h2>
          </Link>
        </div>
        <div>Carrito</div>
      </div>
    </div>
  );
};

export default NavBar;
