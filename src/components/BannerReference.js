import React from "react";
import { storyblokEditable, renderRichText } from "@storyblok/react";

const BannerReference = ({ blok }) => (
  <section {...storyblokEditable(blok)} className="py-8 bg-green-100 text-center">
    <h2 className="text-2xl font-semibold mb-2">
      {typeof blok.heading === "string"
        ? blok.heading
        : blok.heading && renderRichText(blok.heading)}
    </h2>
    <p>
      {typeof blok.description === "string"
        ? blok.description
        : blok.description && renderRichText(blok.description)}
    </p>
  </section>
);

export default BannerReference; 