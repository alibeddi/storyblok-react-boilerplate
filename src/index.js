import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Grid from "./components/Grid";
import Feature from "./components/Feature";
import HeroSection from "./components/HeroSection";
import TabbedContentSection from "./components/TabbedContentSection";
import GridSection from "./components/GridSection";
import ImageTextSection from "./components/ImageTextSection";
import NewsletterFormSection from "./components/NewsletterFormSection";
import FeaturedArticlesSection from "./components/FeaturedArticlesSection";
import BannerReference from "./components/BannerReference";
import Homepage from "./components/Homepage";

storyblokInit({
  accessToken: process.env.REACT_APP_STORYBLOK_API_KEY,
  use: [apiPlugin],
  components: {
    homepage: Homepage,
    page: Page,
    'default-page': Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    'hero-section': HeroSection,
    'tabbed-content-section': TabbedContentSection,
    'grid-section': GridSection,
    'image-text-section': ImageTextSection,
    'newsletter-form-section': NewsletterFormSection,
    'featured-articles-section': FeaturedArticlesSection,
    'banner-reference': BannerReference,
  },
  apiOptions: {
    // for spaces located in the US or China:
    // region: "us" or "cn", // you need to specify the region
    region: ''
  }
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
