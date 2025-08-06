import Header from "@/app/components/Common Header/Header";
import URL from "@/app/components/URL";
import Body from "./Body";
import Frequently from "./Frequently";
import Description from "@/app/components/Description";
import Related from "@/app/components/Related"
import Recent from "@/app/components/Homes/LandingPage/RecentlyViewed"
import Footer from "@/app/components/Common Footer/Footer";

export default function TopCell() {
  return (
    <div className="space-y-4">
      <Header />
      <URL />
      <Body />
      <Frequently />
      <Description I1="/samsungbanner1.jpg" I2="/samsungbanner2.png" I3="/samsungbanner3.png"/>
      <Related />
      <Recent />
      <Footer />
    </div>
  );
}