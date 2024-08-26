"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { RefreshCw } from "lucide-react";
import Photo from "@/public/challenges/1/photo.avif";
import data from "./data.json";

export const Idea1 = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto [perspective:1000px]">
      <motion.div
        className="w-full aspect-[3/4] cursor-pointer relative [transform-style:preserve-3d] group"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.05 }}
      >
        {/* Flip indicator */}
        <motion.div
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <RefreshCw
            className={`h-6 w-6 ${
              isFlipped ? "text-gray-800" : "text-white"
            } drop-shadow-lg`}
          />
        </motion.div>

        {/* Front view */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="relative w-full h-full rounded-lg shadow-lg overflow-hidden">
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
};
