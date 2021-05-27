import React from "react";
import Image from "next/image";

const Product = ({ id, title, price, description, category, image }) => {
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      {/* <p className="absolute top-2 right-2 text-xs text-gray-400">{category}</p> */}
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-2  text-xl line-clamp-2">{title}</h4>
      <p className="text-xs mt-2 mb-2 line-clamp-2">{description}</p>

      <p className="font-bold text-lg mb-5 ">₹{Math.floor(price * 75)}</p>
      <button className="mt-auto button">Add to cart</button>
    </div>
  );
};

export default Product;
