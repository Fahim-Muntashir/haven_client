import About from "../components/Home/About";
import Agent from "../components/Home/Agent";
import Banner from "../components/Home/Banner";
import BuySellBg from "../components/Home/BuySellBg";
import ClientTestimonial from "../components/Home/ClientTestimonial";
import Contact from "../components/Home/Contact";
import LatestItem from "../components/Home/LatestItem";
import Search from "../components/Home/Search";

export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <Search></Search>
      <LatestItem
      ></LatestItem>
      <About></About>
      <BuySellBg></BuySellBg>
      <Agent></Agent>
      <Contact></Contact>
      <ClientTestimonial></ClientTestimonial>
    </main>

  );
}
