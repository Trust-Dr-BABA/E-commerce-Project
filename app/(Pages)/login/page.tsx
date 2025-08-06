import Header from "../../components/Common Header/Header";
import URL from "../../components/URL";
import LogIn from "./login";
import Footer from "../../components/Common Footer/Footer";

export default function Login() {
  return (
    <div className="space-y-4">
      <Header />
      <URL />
      <LogIn />
      <Footer />
    </div>
  );
}