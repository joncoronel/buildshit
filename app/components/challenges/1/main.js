"use client";

import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { RefreshCw, CircleArrowUp } from "lucide-react";
import Photo from "@/public/challenges/1/photo.avif";
import data from "./data.json";
import styles from "./blur.module.css";

export const Idea1 = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full flex max-w-xs  [perspective:1000px]">
      <motion.div
        className="w-full aspect-[3/4] cursor-pointer relative [transform-style:preserve-3d] group"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.05 }}
        transition={{
          type: "spring",
          duration: 0.5,
        }}
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

export const Idea2 = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="flex w-full max-w-xs h-auto relative overflow-hidden rounded-lg shadow-lg">
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={Photo}
          alt="Photograph"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 384px) 100vw, 384px"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
          <p className="font-bold">{data.photographer.name}</p>
          <p className="text-sm">{data.photographer.social}</p>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 bg-white text-black p-4"
        initial={{ y: "100%" }}
        animate={{ y: isRevealed ? "10%" : "100%" }}
        style={{ bottom: "-1px" }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 0.3,
        }}
      >
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
      </motion.div>
      <button
        className="absolute bottom-2 right-2 bg-black/50 rounded-full p-2 shadow-md"
        onClick={() => setIsRevealed(!isRevealed)}
      >
        <motion.div animate={{ rotate: isRevealed ? 180 : 0 }}>
          <CircleArrowUp className="h-6 w-6 text-white" />
        </motion.div>
      </button>
      {isRevealed && (
        <div
          className="absolute top-0 left-0 right-0 h-[10%] cursor-pointer"
          onClick={() => setIsRevealed(false)}
        />
      )}
    </div>
  );
};

export const Idea5 = () => {
  const [activeView, setActiveView] = useState("photo");

  return (
    <div className="w-full flex max-w-xs  relative overflow-hidden rounded-lg shadow-lg">
      <motion.div
        className="absolute inset-0 flex"
        animate={{ x: activeView === "photo" ? "0%" : "-100%" }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 0.3,
        }}
      >
        <div className="w-full h-full flex-shrink-0 relative">
          <Image
            src={Photo}
            alt="Photograph"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 384px) 100vw, 384px"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
            <p className="font-bold">{data.photographer.name}</p>
            <p className="text-sm">{data.photographer.social}</p>
          </div>
        </div>
        <div className="w-full h-full flex-shrink-0 bg-white p-4 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-4">Metadata</h2>
          <ul>
            <li className="mb-2">
              <span className="font-semibold">Location:</span>{" "}
              {data.metadata.location}
            </li>
            <li className="mb-2">
              <span className="font-semibold">Camera:</span>{" "}
              {data.metadata.camera.brand} {data.metadata.camera.model}
            </li>
          </ul>
        </div>
      </motion.div>
      <button
        className="absolute bottom-4 right-4 bg-white text-black text-sm px-4 py-2 rounded-full shadow-lg"
        onClick={() =>
          setActiveView(activeView === "photo" ? "metadata" : "photo")
        }
      >
        {activeView === "photo" ? "View Metadata" : "View Photo"}
      </button>
    </div>
  );
};

export const Idea6 = () => {
  return (
    <div className="w-full flex max-w-xs relative overflow-hidden rounded-lg shadow-lg group">
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={Photo}
          alt="Photograph"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 384px) 100vw, 384px"
        />
        {/* Progressive blur for photographer info */}
        <div className={`${styles.gradientBlur} ${styles.gradientBlurBottom}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
          <p className="font-bold">{data.photographer.name}</p>
          <p className="text-sm">{data.photographer.social}</p>
        </div>
        {/* Blurred overlay with metadata (revealed on hover) */}
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-md bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white p-4">
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
      </div>
    </div>
  );
};

export const Idea7 = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const metadataVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 3,
      },
    },
  };

  return (
    <motion.div
      className="w-full flex max-w-xs relative overflow-hidden rounded-lg shadow-lg group"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
      layout
    >
      <div className="flex items-end relative aspect-[3/4] w-full">
        <Image
          src={Photo}
          alt="Photograph"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 384px) 100vw, 384px"
        />

        <motion.div
          className={`${styles.gradientBlur} ${styles.gradientBlurBottom} absolute inset-0`}
          animate={{ height: isRevealed ? "100%" : "30%" }}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
        <motion.div className="flex flex-col justify-end relative w-full">
          <motion.div className="p-4 text-white z-10" layout>
            <AnimatePresence mode={"popLayout"}>
              <motion.p className="font-bold" layout>
                {data.photographer.name}
              </motion.p>
              <motion.p className="text-sm" layout>
                {data.photographer.social}
              </motion.p>
              <AnimatePresence mode={"popLayout"}>
                {isRevealed && (
                  <motion.div
                    variants={metadataVariants}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <motion.h2 layout className="text-xl font-bold mt-4 mb-2">
                      Metadata
                    </motion.h2>
                    <motion.ul layout>
                      <motion.li className="mb-1">
                        <span className="font-semibold">Location:</span>{" "}
                        {data.metadata.location}
                      </motion.li>
                      <motion.li className="mb-1">
                        <span className="font-semibold">Camera:</span>{" "}
                        {data.metadata.camera.brand}{" "}
                        {data.metadata.camera.model}
                      </motion.li>
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
