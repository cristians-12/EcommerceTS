"use client";

import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

interface Product {
  description: string;
  price: number;
  stock: number;
  image: string;
}

// interface Product extends Array<Product>{}

const Home = () => {
  const [image, setImage] = useState<boolean>();
  const [productos, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:8000/api/products/");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    getData();
  }, []);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div className="flex bg-emerald-600 py-5 px-3 justify-around">
          <div className="bg-emerald-950 py-2 px-3 rounded-xl">
            Todas las categorias
          </div>
          <button className="bg-emerald-700 py-2 px-3 rounded-xl">
            Tecnologia
          </button>
          <button className="bg-emerald-700 py-2 px-3 rounded-xl">
            Belleza
          </button>
          <button className="bg-emerald-700 py-2 px-3 rounded-xl">Hogar</button>
        </div>
        <ul className="flex justify-around">
          {productos.map((e, index) => (
            <li
              className="flex flex-col items-center justify-center"
              key={index}
            >
              <Image
                src={e.image}
                alt=""
                className="object-contain"
                width={400}
                height={500}
              />
              <h4>{e.description}</h4>
              <h5>Precio: ${e.price}</h5>
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
};

export default Home;
