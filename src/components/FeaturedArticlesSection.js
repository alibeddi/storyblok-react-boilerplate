import React from "react";
import { storyblokEditable, renderRichText } from "@storyblok/react";

const FeaturedArticlesSection = ({ blok }) => (
  <section {...storyblokEditable(blok)} className="py-12 bg-yellow-50 text-center">
    <h2 className="text-3xl font-semibold mb-4">
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

export default FeaturedArticlesSection; 