import React from "react";
import BannerSlider from "@/Components/Banner/Banner";
import ExploreServices from "@/Components/ExploreServices/page";
import Header from "@/Components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <BannerSlider />
      <ExploreServices />
    </>
  );
}
