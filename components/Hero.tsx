"use client";
import Image from "next/image";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";


export default function Hero() {
  const [Search, setSearch] = useState('');
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}

      <Image
        src="/hero.svg"
        alt="Hero"
        fill
        priority
        className="absolute inset-0 object-cover object-center"
      />


      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-30 h-full text-white text-center">
        <div className="flex flex-col gap-3.5 mb-11.25">
          <h1 className="md:text-7xl text-2xl font-bold tracking-wide capitalize">
            Make your interior more <br /> minimalistic & modern
          </h1>

          <p className="lg:text-lg sm:text-sm text-white/70">
            Turn your room with panto into a lot more minimalist <br /> and
            modern with ease and speed
          </p>
        </div>
        <div className="flex justify-between py-2 px-2 lg:gap-30 sm:gap-20 rounded-full bg-gray-400/50 border-white ring-2">
          <input
            type="text"
            placeholder="Search Furniture"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-32.5 focus:outline-none ml-3"
          />
          <button className="text-white hover:cursor-pointer bg-orange-400 hover:bg-orange-500 px-2 py-2 rounded-full">
            <FiSearch className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
