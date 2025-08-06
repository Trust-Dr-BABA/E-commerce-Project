import Header from "../../components/Common Header/Header";
import URL from "../../components/URL";
import SignUp from "./register";
import Footer from "../../components/Common Footer/Footer";

export default function Register() {
  return (
    <div className="space-y-4">
      <Header />
      <URL />
      <SignUp />
      <Footer />
    </div>
  );
}