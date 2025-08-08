"use client";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

type FilterKey =
  | "color"
  | "screenSize"
  | "brand"
  | "price"
  | "brands"
  | "rating"
  | "memory"
  | "condition";

type SelectedFilters = {
  [key in FilterKey]?: string[];
};

const brands = [
  { name: "envato", count: 14, src: "/envato.png" },
  { name: "codecanyon", count: 6, src: "/codecanyon.png" },
  { name: "videohive", count: 7, src: "/videohive.png" },
  { name: "photodune", count: 18, src: "/photodune.png" },
  { name: "microlancer", count: 1, src: "/microlancer.png" },
];

const ratings = [52, 24, 5, 1];
const screenSizes = [
  '7" & Under',
  '7.1" - 8.9"',
  '9" - 10.9"',
  '11" & Greater',
];
const colors = [
  { name: "Red", color: "#B91C1C" },
  { name: "Dark Blue", color: "#1E3A8A" },
  { name: "Sky Blue", color: "#0284C7" },
  { name: "Black", color: "#0F172A" },
  { name: "White", color: "#FFFFFF" },
  { name: "Green", color: "#22C55E" },
  { name: "Grey", color: "#6B7280" },
  { name: "Purple", color: "#6366F1" },
];
const memories = [
  { label: "12GB", count: 4 },
  { label: "1.5GB", count: 1 },
  { label: "8GB", count: 3 },
  { label: "1GB", count: 1 },
  { label: "6GB", count: 12 },
  { label: "512MB", count: 2 },
  { label: "4GB", count: 6 },
  { label: "3GB", count: 7 },
];
const conditions = [
  { label: "New", count: 21 },
  { label: "Like New", count: 2 },
  { label: "Open Box", count: 38 },
];

export default function CategorySidebar() {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const min = 0;
  const max = 10000;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice - 100);
    setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice + 100);
    setMaxPrice(value);
  };

  const toggleFilter = (key: FilterKey, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[key] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [key]: updated };
    });
  };

  const resetFilters = () => setSelectedFilters({});

  return (
    <div className="w-full text-sm">
      <div className="flex justify-between items-center mb-4">
        <h6 className="font-bold text-[18px]">CATEGORIES</h6>
        <button onClick={resetFilters} className="text-black/50">
          <FontAwesomeIcon icon={faRotate} />
          Reset All
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(selectedFilters).map(([key, values]) =>
          values.map((val, idx) => (
            <span key={key + idx} className="bg-white px-3 py-1 rounded-md">
              {key === "price" ? `$${val}` : val}
            </span>
          ))
        )}
      </div>

      <div className="py-8 border-b border-[#999999]">
        <h3 className="font-bold mb-2">By Brands</h3>
        <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-2 mt-4 mb-6 border border-[#999999] bg-white focus:outline-none rounded-md"
        />
        {brands.map((brand) => (
          <label key={brand.name} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              onChange={() => toggleFilter("brands", brand.name)}
              className="accent-[#1ABA1A] cursor-pointer"
            />
            <Image
              src={brand.src}
              alt={brand.name}
              width={85}
              height={25}
              className="object-contain"
            />
            <span className="text-gray700">({brand.count})</span>
          </label>
        ))}
      </div>

      <div className="py-6">
        <h3 className="font-bold mb-2">By Price</h3>
        <div className="relative w-full h-8">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 rounded-md transform -translate-y-1/2" />

          <div
            className="absolute top-1/2 h-1 bg-green-500 rounded-md transform -translate-y-1/2"
            style={{
              left: `${(minPrice / max) * 100}%`,
              right: `${100 - (maxPrice / max) * 100}%`,
            }}
          />

          <input
            type="range"
            min={min}
            max={max}
            value={minPrice}
            onChange={handleMinChange}
            className="absolute top-0 w-full pointer-events-none appearance-none bg-transparent
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:mt-[7px]
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-green-500
                [&::-webkit-slider-thumb]:pointer-events-auto
                [&::-webkit-slider-thumb]:shadow-md
                [&::-moz-range-thumb]:appearance-none
                [&::-moz-range-thumb]:h-4
                [&::-moz-range-thumb]:w-4
                [&::-moz-range-thumb]:margin-top-[7px]
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-green-500
                [&::-moz-range-thumb]:pointer-events-auto
                 [&::-moz-range-thumb]:shadow-md"
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxPrice}
            onChange={handleMaxChange}
            className="absolute top-0 w-full pointer-events-none appearance-none bg-transparent
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:mt-[7px]
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-green-500
                [&::-webkit-slider-thumb]:pointer-events-auto
                [&::-webkit-slider-thumb]:shadow-md
                [&::-moz-range-thumb]:appearance-none
                [&::-moz-range-thumb]:h-4
                [&::-moz-range-thumb]:w-4
                [&::-moz-range-thumb]:margin-top-[7px]
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-green-500
                [&::-moz-range-thumb]:pointer-events-auto
                 [&::-moz-range-thumb]:shadow-md"
          />
        </div>

        <div className="flex items-center gap-2 mt-4">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="w-1/3 px-2 py-1 bg-white rounded-md"
          />
          <span>-</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-1/3 px-2 py-1 bg-white rounded-md"
          />
          <button
            className="bg-green-500 text-white px-4 py-1 rounded-md"
            onClick={() => console.log("Filter:", { minPrice, maxPrice })}
          >
            Go
          </button>
        </div>
      </div>

      <div className="pb-6 border-b border-[#999999]">
        <h3 className="font-bold mb-2">By Rating</h3>
        {ratings.map((count, i) => (
          <label key={i} className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              onChange={() => toggleFilter("rating", `${5 - i} Stars`)}
              className="accent-[#1ABA1A] cursor-pointer"
            />
            <span className="text-yellow-500">{"★".repeat(5 - i)}</span>
            <span className="text-gray700">({count})</span>
          </label>
        ))}
      </div>

      <div className="py-6 border-b border-[#999999]">
        <h3 className="font-bold mb-2">By Screen Size</h3>
        <div className="flex flex-wrap gap-2">
          {screenSizes.map((size, i) => (
            <button
              key={i}
              onClick={() => toggleFilter("screenSize", size)}
              className={`px-3 py-1 rounded-md bg-white border ${
                selectedFilters.screenSize?.includes(size)
                  ? "border-green-500"
                  : "border-gray-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="py-6 border-b border-[#999999]">
        <h3 className="font-bold mb-4">By Color</h3>
        <div className="flex flex-wrap gap-4 w-[60%]">
          {colors.map((item, i) => (
            <button
              key={i}
              onClick={() => toggleFilter("color", item.name)}
              className={`w-7 h-7 rounded-md border ${
                selectedFilters.color?.includes(item.name)
                  ? "border-green-500"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: item.color }}
            />
          ))}
        </div>
      </div>

      <div className="py-6 border-b border-[#999999]">
        <h3 className="font-bold mb-6">By Memory</h3>
        <div className="grid grid-cols-2 gap-2">
          {memories.map((mem, i) => (
            <label key={i} className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={() => toggleFilter("memory", mem.label)}
                className="accent-[#1ABA1A] cursor-pointer"
              />
              {mem.label} ({mem.count})
            </label>
          ))}
        </div>
      </div>

      <div className="py-6 border-b border-[#999999]">
        <h3 className="font-bold mb-6">By Conditions</h3>
        {conditions.map((cond, i) => (
          <label key={i} className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              onChange={() => toggleFilter("condition", cond.label)}
              className="accent-[#1ABA1A] cursor-pointer"
            />
            {cond.label} ({cond.count})
          </label>
        ))}
      </div>
    </div>
  );
}
