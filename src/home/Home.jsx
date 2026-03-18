import Header from "./Header";
import Carousel from "./Carousel";
import Categories from "./Categories";
import TopSelling from "./TopSelling";
import NewMobiles from "./NewMobile";
import Repair from "./Repair";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Categories />
      <TopSelling />
      <NewMobiles />
      <Repair />
      <Contact />
      <Footer />
    </>
  );
}