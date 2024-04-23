// import LiveChat from "@/Components/custom/LiveChat";
// import CustomerFeedback from "./HomePage/CustomerFeedback";
// import LatestNews from "./HomePage/LatestNews";
// import LatestTemplate from "./HomePage/LatestTemplate";
// import OurServices from "./HomePage/OurServices";
// import TimerSection from "./HomePage/TimerSection";
import WalletSetup from "./HomePage/WalletSetup";
import Consultant from "./HomePage/consultant";
// import Time from "./HomePage/Time";
// import FeatureWork from "./HomePage/FeatureWork";
// import Statistic from "./HomePage/Statistic";
import HeroSection from './HomePage/HeroSection.jsx'
import Approach from "./HomePage/Approach.jsx";
import CustomerStories from "./HomePage/CustomerStories.jsx";
import MeetExperts from "./HomePage/MeetExperts.jsx";
import ShowApp from "./HomePage/ShowApp.jsx";
import Footer from "./HomePage/Footer.jsx";

export default function App() {
  return (
    <div className="">
      <HeroSection />
      <WalletSetup />
     <Consultant />
      <Approach />
      <CustomerStories />
      <MeetExperts/>
      <ShowApp/>
      <Footer/>
    </div>
  );
}