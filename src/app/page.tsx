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
        <div className="flex flex-wrap gap-10">
          <div className="w-[50vw]">
            <Image
              className="object-contain"
              alt="Hola"
              src="https://pbs.twimg.com/media/GS3WVdvbkAAifC3?format=jpg&name=4096x4096"
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
          <div className="w-[40vw]">
          <Image
          className="object-contain"
            alt="Hola"
            src="https://pbs.twimg.com/media/GRXBlwEbUAAjxe6?format=jpg&name=4096x4096"
            width={1000}
            height={1000}
          />
          </div>
          <Image
            alt="Hola"
            src="https://pbs.twimg.com/media/GDI4IrpbAAA2afi?format=jpg&name=medium"
            width={800}
            height={300}
            quality={100}
          />

          <Image
            alt="Hola"
            src="https://pbs.twimg.com/media/GF3Z8WHaQAAc-hP?format=jpg&name=large"
            width={800}
            height={300}
            quality={100}
          />
          <div className="w-[50vw]">
            <Image
              className="object-cover"
              alt="Hola"
              src="https://pbs.twimg.com/media/F9fJ10NaMAArH4O?format=jpg&name=large"
              width={1000}
              height={300}
              quality={100}
            />
          </div>

          <div className="w-[50vw]">
            <Image
              alt="Hola"
              src="https://pbs.twimg.com/media/GBw2Z0KaEAAW1WH?format=jpg&name=medium"
              width={1000}
              height={300}
              quality={100}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
