"use client";

import Image from "next/image";
import React, { useState } from "react";

const Home = () => {
  const [image, setImage] = useState<boolean>();

  return (
    <div>
      <div className="flex bg-emerald-600 py-5 px-3">
        <div className="bg-emerald-950 py-2 px-3 rounded-xl">
          Todas las categorias
        </div>
      </div>
      <button onClick={() => setImage(!image)}>mostrar</button>
    </div>
  );
};

export default Home;
