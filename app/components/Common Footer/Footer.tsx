import TopLinks from "./TopLinks";
import Subscribe from "./Subscribe";
import Copyright from "./Copyright";

export default function Footer(){
  return(
    <div className="flex justify-center px-4  mt-[80px]">
      <div className="w-full max-w-screen-xl">
        <TopLinks />
        <Subscribe />
        <Copyright />
      </div>
    </div>
  );
}