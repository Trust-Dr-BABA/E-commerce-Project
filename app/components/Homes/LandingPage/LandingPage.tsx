import Header from "../../Common Header/Header";
import Footer from "../../Common Footer/Footer";
import HomeHeader from "./HomeHeader";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <HomeHeader />
      <Footer />
    </div>
  );
}