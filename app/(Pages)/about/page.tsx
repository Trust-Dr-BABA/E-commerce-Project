import Header from "../../components/Common Header/Header";
import URL from "../../components/URL";
import Body from "./about";
import Membership from "@/app/components/Homes/LandingPage/MembershipAd";
import Footer from "../../components/Common Footer/Footer";

export default function About() {
  return (
    <div className="space-y-4">
      <Header />
      <URL />
      <Body />
      <Membership />
      <Footer />
    </div>
  );
}