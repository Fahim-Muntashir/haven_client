import Banner from "../components/Home/Banner";
import LatestItem from "../components/Home/LatestItem";
import Search from "../components/Home/Search";

export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <Search></Search>
      <LatestItem
      ></LatestItem>
    </main>

  );
}
