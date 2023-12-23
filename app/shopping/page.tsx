"use client";
import SearchInput from "@/components/elements/SearchInput";
import Tabs from "@/components/elements/Tabs";
import BannerProducts from "@/layout/BannerProducts";
import ProductLayout from "@/layout/ProductLayout";
import { AD_PRODUCT, HOTEST_PRODUCT, NEWEST_PRODUCT } from "@/ultils/constant";
import Link from "next/link";
import { useState } from "react";

export default function ShoppingPage() {
  const [labelTab, setLabelTab] = useState("Advertisement");
  const tabElements = [
    { label: "Advertisement" },
    { label: "Hotest" },
    { label: "Newest" },
  ];

  return (
    <div className="bg-white my-[80px]">
      {/* Banner */}
      <BannerProducts />
      <div className="my-5 py-2 px-[10px]">
        <SearchInput />
      </div>

      <Tabs
        setLabelTab={setLabelTab}
        labelTab={labelTab}
        tabElements={tabElements}
      />

      {labelTab === "Advertisement" ? (
        <ProductLayout category={"Advertisement"} products={AD_PRODUCT} />
      ) : labelTab === "Hotest" ? (
        <ProductLayout category={"Hotest"} products={HOTEST_PRODUCT} />
      ) : (
        <ProductLayout category={"Newest"} products={NEWEST_PRODUCT} />
      )}
    </div>
  );
}
