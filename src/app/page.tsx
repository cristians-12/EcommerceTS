"use client";

import Image from "next/image";
import React, { Suspense, useState } from "react";
import Loading from "./loading";

const Home = () => {
  const [image, setImage] = useState<boolean>();

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div className="flex bg-emerald-600 py-5 px-3">
          <div className="bg-emerald-950 py-2 px-3 rounded-xl">
            Todas las categorias
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
