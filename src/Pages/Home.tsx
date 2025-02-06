import BestSeller from "../Components/Molecules/BestSeller/BestSeller";
import Detail from "../Components/Molecules/Details/DetailsComponent/Detail";
import Hero from "../Components/Molecules/Hero/Hero";
import LatestCollection from "../Components/Molecules/LatestCollection/LatestCollection";
import Subscription from "../Components/Molecules/Subscription/Subscription";


const Home = () => {
  return (
    <>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Detail />
      <Subscription />
    </>
  );
};

export default Home;
