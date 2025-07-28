"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CustomSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div className="relative w-full overflow-hidden h-[300px] rounded-lg">
      <div className="flex h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

        <div className="flex-shrink-0 bg-[url('/slider1.png')] bg-cover bg-center h-full w-full">
          <div className="text-white pt-[40px] pl-[60px]">
            <h2 className="text-[30px] font-medium w-[205px]">aPodOS <br />Work Wonders With Easy</h2>
            <p className="w-[183px] text-[12px] pb-6 pt-3">Experience aPod 2023 with new technology from $769</p>
            <Link href="/" className="bg-[#1ABA1A] text-white p-3 rounded-[10px]">DISCOVER NOW</Link>
          </div>
        </div>

        <div className="flex-shrink-0 bg-[url('/slider2.png')] bg-cover bg-center h-full w-full">
          <div className="pt-[40px] pl-[60px]">
            <p className="w-[100px]">PC GAMING CASES</p>
            <h2 className="text-[30px] font-light w-[190px] pb-8 pt-3">SALE UP TO <span className="font-bold">50% OFF</span></h2>
            <Link href="/" className="bg-black text-white p-3 rounded-[10px]">BUY NOW</Link>
          </div>
        </div>

        <div className="flex-shrink-0 bg-[url('/slider3.png')] bg-cover bg-center h-full w-full">
          <div className="text-white pt-[40px] pl-[60px]">
            <h2 className="text-[30px] font-light w-[245px]"><span className="font-bold">Noice Cancelling </span>Headphone</h2>
            <div className="pb-5 pt-3">
              <p>Boso Over-Ear Headphone</p>
              <p>Wifi, Voice Assistant,</p>
              <p>Low Latency Game Mode</p>
            </div>
            <Link href="/" className="bg-white text-black p-3 rounded-[10px]">BUY NOW</Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex items-center gap-3 bg-white px-4 py-2 rounded-full text-sm">
        <button onClick={prevSlide} className="text-black">◀</button>
        <span>{currentSlide + 1} / {totalSlides}</span>
        <button onClick={nextSlide} className="text-black">▶</button>
      </div>
    </div>
  );
}