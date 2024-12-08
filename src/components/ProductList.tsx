import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80 ">
          <Image
            src="https://images.pexels.com/photos/29594648/pexels-photo-29594648/free-photo-of-elegant-portrait-of-man-in-outdoor-setting.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 opacity-100 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/29401381/pexels-photo-29401381/free-photo-of-winter-scene-of-berlin-cathedral-in-snowfall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between ">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className=" rounded-2xl ring-1 ring-lama_red text-lama_red w-max py-2 px-4 text-xs hover:bg-lama_red hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80 ">
          <Image
            src="https://images.pexels.com/photos/29594648/pexels-photo-29594648/free-photo-of-elegant-portrait-of-man-in-outdoor-setting.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 opacity-100 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/29401381/pexels-photo-29401381/free-photo-of-winter-scene-of-berlin-cathedral-in-snowfall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between ">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className=" rounded-2xl ring-1 ring-lama_red text-lama_red w-max py-2 px-4 text-xs hover:bg-lama_red hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80 ">
          <Image
            src="https://images.pexels.com/photos/29594648/pexels-photo-29594648/free-photo-of-elegant-portrait-of-man-in-outdoor-setting.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 opacity-100 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/29401381/pexels-photo-29401381/free-photo-of-winter-scene-of-berlin-cathedral-in-snowfall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between ">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className=" rounded-2xl ring-1 ring-lama_red text-lama_red w-max py-2 px-4 text-xs hover:bg-lama_red hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80 ">
          <Image
            src="https://images.pexels.com/photos/29594648/pexels-photo-29594648/free-photo-of-elegant-portrait-of-man-in-outdoor-setting.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 opacity-100 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/29401381/pexels-photo-29401381/free-photo-of-winter-scene-of-berlin-cathedral-in-snowfall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between ">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className=" rounded-2xl ring-1 ring-lama_red text-lama_red w-max py-2 px-4 text-xs hover:bg-lama_red hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
