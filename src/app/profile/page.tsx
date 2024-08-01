"use client";
import { useAuth } from "@/context/authContext";
import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "../loading";

const Profile = () => {
  const { isLogged, user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-[95vh]">
      <Suspense fallback={<Loading />}>
        {isLogged ? (
          <div>
            <h1>Bienvenido {user?.name}</h1>
          </div>
        ) : (
          <h1 className="text-[40px] font-medium">
            Aun no estas registrado.{" "}
            <Link
              className="transition ease-in-out hover:transition-all text-emerald-600 hover:font-extrabold hover:text-[45px] "
              href={"/register"}
            >
              Registrate!
            </Link>
          </h1>
        )}
      </Suspense>
    </div>
  );
};

export default Profile;
