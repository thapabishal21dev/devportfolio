import React from "react";
import Introduction from "../components/introduction/introduction";
import Github from "../components/github/github";
import HomePageAbout from "../components/homepageaboutus/homePageAboutUs";

const HomePage = () => {
  return (
    <div>
      <Introduction />
      <HomePageAbout />
      <Github />
    </div>
  );
};

export default HomePage;
