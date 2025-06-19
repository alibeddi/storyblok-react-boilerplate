import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Homepage = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Homepage; 