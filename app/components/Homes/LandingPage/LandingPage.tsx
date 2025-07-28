import Header from "../../Common Header/Header";
import Footer from "../../Common Footer/Footer";
import HomeHeader from "./HomeHeader";
import FeaturedTop from "./Featured&Top";
import Deals from "./Deals";
import Membership from "./MembershipAd";
import BestSeller from "./BestSeller";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <HomeHeader />
      <FeaturedTop />
      <Deals />
      <Membership />
      <BestSeller />
      <Footer />
    </div>
  );
}