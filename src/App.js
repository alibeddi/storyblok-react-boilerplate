import { useStoryblok, StoryblokComponent } from "@storyblok/react";


function App() {

  let slug =
    window.location.pathname === "/"
      ? "homepage"
      : window.location.pathname.replace("/", "");

  const story = useStoryblok(slug, { version: "draft" });
  console.log(story)
  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
}
export default App;