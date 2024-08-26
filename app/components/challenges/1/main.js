"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Photo from "@/public/challenges/1/photo.avif";
import data from "./data.json";

export default function Main() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto [perspective:1000px]">
      <motion.div
        className="w-full aspect-[3/4] cursor-pointer relative [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front view */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="relative w-full h-full  rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={Photo}
                alt="Photograph"
                fill
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
                sizes="(max-width: 384px) 100vw, 384px"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
              <p className="font-bold">{data.photographer.name}</p>
              <p className="text-sm">{data.photographer.social}</p>
            </div>
          </div>
        </div>

        {/* Back view */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden p-4 flex flex-col justify-center text-black">
            <h2 className="text-xl font-bold mb-2">Metadata</h2>
            <ul>
              <li className="mb-1">
                <span className="font-semibold">Location:</span>{" "}
                {data.metadata.location}
              </li>
              <li className="mb-1">
                <span className="font-semibold">Camera:</span>{" "}
                {data.metadata.camera.brand} {data.metadata.camera.model}
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
