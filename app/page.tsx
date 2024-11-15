import Github from "./components/github/github";
import HomePageAbout from "./components/homepageaboutus/homePageAboutUs";
import Introduction from "./components/introduction/introduction";

export default function Home() {
  return (
    <>
      <Introduction />
      <HomePageAbout />
      <Github />
    </>
  );
}
