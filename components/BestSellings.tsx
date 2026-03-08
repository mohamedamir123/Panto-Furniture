"use client";
import Image from "next/image";
import { useState } from "react";
import Ratings from "./Ratings";
import Chair1 from "../public/chair1.svg";
import Chair2 from "../public/chair2.svg";
import Chair3 from "../public/chair3.svg";
import Chair4 from "../public/chair4.svg";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

interface Chair {
  title: string;
  img: string;
  imgAlt: string;
  name: string;
  price: number;
}

const chairs: Chair[] = [
  {
    title: "chair",
    img: Chair1,
    imgAlt: "chair1",
    name: "Sakarias Armchair",
    price: 392,
  },
  {
    title: "chair",
    img: Chair2,
    imgAlt: "chair2",
    name: "Baltsar Chair",
    price: 299,
  },
  {
    title: "chair",
    img: Chair3,
    imgAlt: "chair3",
    name: "Anjay Chair",
    price: 519,
  },
  {
    title: "chair",
    img: Chair4,
    imgAlt: "chair4",
    name: "Nyantuy Chair",
    price: 912,
  },
];

function BestSellings() {
  const [activeTab, setActiveTab] = useState("chair");
  return (
    <section className="py-12.5 bg-[#F7F7F7]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* title */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-bold capitalize">
              Best Selling Product
            </h2>
          </div>
          {/* tabs */}
          <div className="bg-[#EEEEEE] flex gap-3 items-center rounded-full px-1 py-1 mb-20">
            <button
              onClick={() => setActiveTab("chair")}
              className={`text-[#1E1E1E] rounded-full px-4 py-2 my-1 mx-1 capitalize cursor-pointer ${activeTab === "chair" ? "bg-white transition-all duration-300" : ""}`}
            >
              chair
            </button>
            <button
              onClick={() => setActiveTab("beds")}
              className={`text-[#1E1E1E] rounded-full px-4 py-2 my-1 mx-1 capitalize cursor-pointer ${activeTab === "beds" ? "bg-white transition-all duration-300" : ""}`}
            >
              beds
            </button>
            <button
              onClick={() => setActiveTab("sofa")}
              className={`text-[#1E1E1E] rounded-full px-4 py-2 my-1 mx-1 capitalize cursor-pointer ${activeTab === "sofa" ? "bg-white transition-all duration-300" : ""}`}
            >
              sofa
            </button>
            <button
              onClick={() => setActiveTab("lamp")}
              className={`text-[#1E1E1E] rounded-full px-4 py-2 my-1 mx-1 capitalize cursor-pointer ${activeTab === "lamp" ? "bg-white transition-all duration-300" : ""}`}
            >
              lamp
            </button>
          </div>
          <div className=" mb-15">
            {/* tabs-content */}
            {activeTab === "chair" && (
              <div className="flex flex-col sm:flex-row items-center gap-20 sm:gap-4">
                {/* Card of item */}
                {chairs.map((chair, index) => (
                  <div
                    key={index}
                    className="w-67 h-115 flex flex-col bg-white shadow-md rounded-3xl"
                  >
                    <div className="w-full h-60 bg-[#FAFAFA] rounded-3xl flex items-center justify-center relative">
                      <Image
                        src={chair.img}
                        width={217}
                        height={255}
                        alt={chair.imgAlt}
                        className="absolute bottom-8"
                      />
                    </div>
                    <div className="mx-5.25 mt-3.5 mb-[36.56px] flex flex-col items-start">
                      <h4 className="capitalize text-black/50">
                        {chair.title}
                      </h4>
                      <h3 className="capitalize font-bold text-lg text-[#0D1B39]">
                        {chair.name}
                      </h3>
                      <Ratings />
                    </div>
                    <div className="flex justify-between items-center mx-5.25">
                      <h3 className="font-bold text-2xl text-[#0D1B39]">
                        ${chair.price}
                      </h3>
                      <button className="bg-[#0D1B39] cursor-pointer text-4xl text-white px-4 py-2 rounded-full">
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <Link
              href={"/more-info"}
              className="flex gap-2 items-center text-[#E58411]"
            >
              <span className="capitalize">view all</span>
              <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSellings;
