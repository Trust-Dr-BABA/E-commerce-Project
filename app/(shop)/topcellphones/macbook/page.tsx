import Header from "@/app/components/Common Header/Header";
import URL from "@/app/components/URL";
import Body from "./Body";
import Shopping from "./Shopping";
import Description from "@/app/components/Description";
import Related from "@/app/components/Related"
import Footer from "@/app/components/Common Footer/Footer";

export default function TopCell() {
  return (
    <div className="space-y-4">
      <Header />
      <URL />
      <Body />
      <Related />
      <Description I1="/macbookbanner1.png" I2="/macbookbanner2.png" I3="/macbookbanner3.png"/>
      <Shopping />
      <Footer />
    </div>
  );
}