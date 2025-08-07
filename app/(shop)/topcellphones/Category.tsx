"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faThList,
  faStar,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import HeartButton from "@/app/components/HeartReact";

export default function CategoryPage() {
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [viewMode, setViewMode] = useState("grid");
  const productArray = [
    {
      id: 1,
      image: "",
      title: "Opplo Watch Series 8",
      reviews: 12,
      price: "979.00",
      oldPrice: "1259.00",
      save: "280.00",
      shipping: "$2.98 SHIPPING",
      stock: "In stock",
      link: "/product/watch-1",
    },
    {
      id: 2,
      image: "",
      title: "GigaBook Pro 15",
      reviews: 25,
      price: "1520.00",
      oldPrice: "1799.00",
      save: "279.00",
      shipping: "FREE SHIPPING",
      stock: "Pre-order",
      link: "/product/laptop-1",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6 rounded-md  bg-white">
        <div className="text-sm text-gray-600">
          <span className="font-bold">1 - {itemsPerPage}</span> of 120 results
        </div>

        <div className="flex items-center">
          <span className="text-sm pr-2">Show: </span>
          {[24, 48, 72].map((num) => (
            <button
              key={num}
              onClick={() => setItemsPerPage(num)}
              className={`px-2 py-1 text-sm bg-[#EEEFF6] cursor-pointer ${
                itemsPerPage === num ? "font-bold" : ""
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm">Sort by:</span>
          <select className="rounded px-2 py-1 text-sm bg-[#EEEFF6]">
            <option value="default">Default</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm">View as:</span>
          <button
            onClick={() => setViewMode("grid")}
            className={`w-[32px] h-[32px] flex justify-center items-center rounded ${
              viewMode === "grid"
                ? "bg-[#1ABA1A] text-white border-[#1ABA1A]"
                : "border-gray-300"
            }`}
          >
            <FontAwesomeIcon icon={faThLarge} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`w-[32px] h-[32px] flex justify-center items-center rounded ${
              viewMode === "list"
                ? "bg-[#1ABA1A] text-white border-[#1ABA1A]"
                : "border-gray-300"
            }`}
          >
            <FontAwesomeIcon icon={faThList} />
          </button>
        </div>
      </div>

      <div
        className={`grid gap-4 ${
          viewMode === "grid"
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-1"
        }`}
      >
        {productArray.map((product, index) => (
          <div
            key={product.id || index}
            className="relative bg-white rounded-lg shadow p-4"
          >
            {product.save && (
              <div className="absolute top-3 left-3 bg-[#1ABA1A] text-white rounded-[10px] p-2 z-10">
                <p className="text-[10px]">SAVE</p>
                <h6 className="text-[14px] font-medium">${product.save}</h6>
              </div>
            )}
            <HeartButton hb={30} wb={30} hi={14} wi={14} />
            <Link
              href={product.link || "/"}
              className="flex justify-center items-center"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={190}
                height={200}
              />
            </Link>
            <div className="pl-8">
              <div className="flex text-yellow-400 gap-1 pb-2">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="text-[20px]"
                  />
                ))}
                <p className="text-[#666666] text-[13px]">
                  ({product.reviews})
                </p>
              </div>
              <h4 className="text-[14px] font-bold">{product.title}</h4>
              {product.oldPrice ? (
                <div className="flex my-[10px] items-center gap-2">
                  <h3 className="text-[18px] text-[#F1352B] font-semibold">
                    ${product.price}
                  </h3>
                  <h3 className="text-[#666666] text-[14px] font-semibold line-through">
                    ${product.oldPrice}
                  </h3>
                </div>
              ) : (
                <h3 className="text-[18px] font-semibold my-[10px]">
                  ${product.price}
                </h3>
              )}

              <p className="text-[10px] p-3 text-[#1ABA1A]">
                {product.shipping}
              </p>

              <div className="py-2 gap-2 flex items-center">
                {product.stock === "In stock" ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="bg-green-500 text-white w-[16px] h-[16px] p-[2px] rounded-full"
                  />
                ) : product.stock === "Out of stock" ? (
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="bg-red-500 text-white w-[16px] h-[16px] p-[2px] rounded-full"
                  />
                ) : null}
                <span className="text-[12px]">{product.stock}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
