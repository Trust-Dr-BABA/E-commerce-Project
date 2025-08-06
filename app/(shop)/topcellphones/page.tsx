import Header from "../../components/Common Header/Header";
import URL from "../../components/URL";
import Top from "./Top";
import Body from "./Body";
import Footer from "../../components/Common Footer/Footer";

export default function TopCell() {
  return (
    <div className="space-y-4">
      <Header />
      <URL />
      <Top />
      <Body />
      <Footer />
    </div>
  );
}