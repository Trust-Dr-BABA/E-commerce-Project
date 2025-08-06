import Header from "../../components/Common Header/Header";
import URL from "../../components/URL";
import Body from "./checkout";
import Footer from "../../components/Common Footer/Footer";

export default function Checkout() {
  return (
    <div className="space-y-4">
      <Header />
      <URL />
      <Body />
      <Footer />
    </div>
  );
}