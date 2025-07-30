import Header from "../../Common Header/Header";
import Footer from "../../Common Footer/Footer";
import HomeHeader from "./HomeHeader";
import FeaturedTop from "./Featured&Top";
import Deals from "./Deals";
import Membership from "./MembershipAd";
import BestSeller from "./BestSeller";
import BrandNew from "./BrandNew";
import TopCellphones from "./TopCellphones";
import TopLaptops from "./TopLaptops";
import Equipments from "./Equipments";
import CashBack from "./CashbackAd";
import RecentlyViewed from "./RecentlyViewed";
import About from "./AboutSwoo";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <HomeHeader />
      <FeaturedTop />
      <Deals />
      <Membership />
      <BestSeller />
      <BrandNew />
      <TopCellphones />
      <TopLaptops />
      <Equipments />
      <CashBack />
      <RecentlyViewed />
      <About />
      <Footer />
    </div>
  );
}