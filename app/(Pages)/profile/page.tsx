import Header from "../../components/Common Header/Header";
import URL from "../../components/URL";
import Account from "./profile"
import Footer from "../../components/Common Footer/Footer";

export default function Profile() {
  return (
    <div className="space-y-4">
      <Header />
      <URL />
      <Account />
      <Footer />
    </div>
  );
}