

"use client";

import { pizzas } from "@/data";
import { burgers } from "@/data";
import { pastas } from "@/data";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  const pathname = usePathname();
  const category = pathname.split("/").pop(); // "pizzas" | "burgers" | "pastas"

  // Category ke basis pe data select
  const data =
    category === "pizzas"
      ? pizzas
      : category === "burgers"
      ? burgers
      : pastas;

  return (
    <div className="flex flex-wrap text-red-500">
      {data.map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">Rs {item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;




