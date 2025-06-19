import React from "react";
import { storyblokEditable, renderRichText } from "@storyblok/react";
import { motion } from "framer-motion";

const HeroSection = ({ blok }) => {

  const isSideBySide = blok.layout === "side-by-side";
  const align = blok.text_align === "left" ? "text-left items-start" : "text-center items-center";
  const imageShape =
    blok.image_shape === "circle"
      ? "rounded-full"
      : blok.image_shape === "square"
      ? ""
      : "rounded-2xl";
  const imageDecor = blok.image_decoration ? "ring-4 ring-white/60 shadow-2xl" : "";
  const pattern = blok.pattern_overlay;

  return (
    <section
      {...storyblokEditable(blok)}
      className={`relative py-16 px-4 min-h-[60vh] flex  flex-col ${isSideBySide ? "md:flex-row" : ""} justify-center ${align} overflow-hidden`}
      style={{
        background: blok.bg_gradient || "#f0f0f0",
      }}
    >

      {pattern && (
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      )}

      <div className={`flex flex-col gap-12 ${isSideBySide ? "md:flex-row" : ""} w-full z-10`}>
     
        {blok.image && (
          <motion.div
            className={`flex-shrink-0 flex   justify-center ${isSideBySide ? "md:w-1/2" : "w-full"} mb-6 md:mb-0`}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className={`relative ${imageDecor} ${imageShape} overflow-hidden bg-white/10 backdrop-blur-md`}>
              <img
                src={blok.image.filename}
                alt={blok.image.alt}
                className={`object-cover w-48 h-48 md:w-64 md:h-64 ${imageShape}`}
              />
            </div>
          </motion.div>
        )}


        <motion.div
          className={`flex flex-col gap-6 justify-center ${isSideBySide ? "md:w-1/2 md:pl-12" : "w-full"} ${align}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {typeof blok.headline === "string" ? (
            <h1
              className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
              style={{ color: blok.headline_color || "#222" }}
            >
              {blok.headline}
            </h1>
          ) : (
            <div
              className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
              style={{ color: blok.headline_color || "#222" }}
            >
              {renderRichText(blok.headline)}
            </div>
          )}
          <p
            className="text-lg md:text-2xl mb-6"
            style={{ color: blok.subheadline_color || "#444" }}
          >
            {typeof blok.subheadline === "string"
              ? blok.subheadline
              : blok.subheadline && renderRichText(blok.subheadline)}
          </p>
          {blok.button_text && blok.button_link && (
            <motion.a
              href={blok.button_link.url}
              className="inline-block px-8 py-3 rounded-full font-bold shadow-lg transition-all duration-200"
              style={{
                background: blok.button_bg_color || "#fff",
                color: blok.button_text_color || "#4f8cff",
              }}
              whileHover={{ scale: 1.05 }}
            >
              {blok.button_text}
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;