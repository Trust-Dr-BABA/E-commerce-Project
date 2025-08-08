import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faArrowLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function BurgerMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [currentMenu, setCurrentMenu] = useState<
    null | "home" | "pages" | "products"
  >(null);

  const renderMainMenu = () => (
    <div className="text-[20px]">
      <div className="flex justify-between items-center pl-4 mb-10">
        <Image src="/logo1.png" alt="Logo" width={100} height={30} />
        <button onClick={onClose} className="cursor-pointer">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="pl-3 text-[#666666]">
        <ul className="flex flex-col gap-4 font-medium">
          <li>
            <button
              onClick={() => setCurrentMenu("home")}
              className="flex justify-between items-center w-full cursor-pointer"
            >
              <p>HOMES</p>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentMenu("pages")}
              className="flex justify-between items-center w-full cursor-pointer"
            >
              <p>PAGES</p>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentMenu("products")}
              className="flex justify-between items-center w-full cursor-pointer"
            >
              <p>PRODUCTS</p>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
        <div className="flex flex-col py-10">
          <Link href="/">Sell on Swoo</Link>
          <Link href="/">Order Tracking</Link>
        </div>
        <div className="mt-[80%] pl-2">
          <p className="text-black/30">
            Join us today and unlock exclusive benefits! Create an account to
            enjoy faster checkout, order tracking, and special member-only
            offers. <span className="font-bold text-[#1ABA1A]">Learn more</span>
          </p>
          <div className="flex w-full gap-4 mt-4">
            <Link
              href="/signup"
              className="flex justify-center items-center bg-[#1ABA1A] text-white rounded-full py-2 px-4 text-[14px] font-bold"
            >
              Join Us
            </Link>
            <Link
              href="/login"
              className="flex justify-center items-center text-[#1ABA1A] border border-[#1ABA1A] rounded-full py-2 px-4 text-[14px] font-bold"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubMenu = (
    title: string,
    links: { label: string; href: string }[]
  ) => (
    <div>
      <div className="flex justify-between items-center p-4 mb-10 text-[20px]">
        <button
          className="flex items-center gap-2 font-medium cursor-pointer"
          onClick={() => setCurrentMenu(null)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
        <button onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} className="cursor-pointer" />
        </button>
      </div>
      <div className="pl-3">
        <h2 className="text-[20px] text-[#666666] font-bold mb-2">{title}</h2>
        <ul className="flex flex-col text-black/30 gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className=" hover:text-[#666666]">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentMenu) {
      case "home":
        return renderSubMenu("Homes", [
          { label: "Home v1", href: "/homes/home1" },
          { label: "Home v2", href: "/homes/home2" },
        ]);
      case "pages":
        return renderSubMenu("Pages", [
          { label: "About", href: "/about" },
          { label: "FAQ", href: "/faq" },
        ]);
      case "products":
        return renderSubMenu("Products", [
          { label: "All Products", href: "/products" },
          { label: "Categories", href: "/categories" },
        ]);
      default:
        return renderMainMenu();
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 backdrop-blur-sm bg-white/30 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-1/2 max-w-[300px] bg-[#e1e4ea] z-50 p-5 overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>{renderContent()}</div>
      </div>
    </>
  );
}
