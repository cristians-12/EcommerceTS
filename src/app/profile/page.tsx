import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[95vh]">
      <h1 className="text-[40px] font-medium">Aun no estas registrado. <Link className="transition ease-in-out hover:transition-all text-emerald-600 hover:font-extrabold hover:text-[45px] " href={'/register'}>Registrate!</Link></h1>
    </div>
  );
};

export default Profile;
