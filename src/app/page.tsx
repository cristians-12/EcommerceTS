"use client";

import Image from "next/image";
import React, { useState } from "react";

const Home = () => {
  const [image, setImage] = useState<boolean>();

  return (
    <div>
      <h1 className="text-[40px]">Ecommerce</h1>
      <p>Si</p>
      <button onClick={() => setImage(!image)}>mostrar</button>
      {image && (
        <Image
          alt="Hola"
          src="https://pbs.twimg.com/media/GS3WVdvbkAAifC3?format=jpg&name=4096x4096"
          width={800}
          height={300}
        />
      )}
    </div>
  );
};

export default Home;
