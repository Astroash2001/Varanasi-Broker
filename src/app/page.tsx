import BannerSlider from "@/Components/Banner/Banner";
import ExploreServices from "@/Components/ExploreServices/page";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <BannerSlider />
      <ExploreServices />
    </>
  );
}
