import TopLinks from "./TopLinks";
import Subscribe from "./Subscribe";
import Copyright from "./Copyright";

export default function Footer(){
  return(
    <div className="flex justify-center px-4  pt-[80px] bg-white">
      <div className="w-full max-w-screen-xl">
        <TopLinks />
        <Subscribe />
        <Copyright />
      </div>
    </div>
  );
}