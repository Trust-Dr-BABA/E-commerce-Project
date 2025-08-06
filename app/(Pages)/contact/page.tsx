import Header from "../../components/Common Header/Header";
import URL from "../../components/URL";
import Body from "./contact";
import Footer from "../../components/Common Footer/Footer";

export default function Contact() {
  return (
    <div className="space-y-4">
      <Header />
      <URL />
      <Body />
      <Footer />
    </div>
  );
}