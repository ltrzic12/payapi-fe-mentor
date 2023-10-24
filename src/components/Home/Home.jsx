import HomeBenefits from "./HomeBenefits/HomeBenefits";
import HomeBottom from "./HomeBottom/HomeBottom";
import HomeMiddle from "./HomeMiddle/HomeMiddle";
import HomeTop from "./HomeTop/HomeTop";

const Home = () => {
  return (
    <div className='home'>
      <HomeTop></HomeTop>
      <HomeMiddle></HomeMiddle>
      <HomeBottom></HomeBottom>
      <HomeBenefits></HomeBenefits>
    </div>
  );
};

export default Home;
