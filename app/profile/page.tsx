"use client";
import ProfileCard from "@/components/elements/ProfileCard";
import Tabs from "@/components/elements/Tabs";
import DesctriptionList from "@/layout/DescriptionList";
import HeaderProfile from "@/layout/HeaderProfile";
import { ProductList } from "@/layout/ProductList";
import StackedListFollow from "@/layout/StackedListFollow";
import { HOTEST_PRODUCT, NEWEST_PRODUCT } from "@/ultils/constant";
import { SetStateAction, useState } from "react";

export default function ProfilePage() {
  const [labelTab, setLabelTab] = useState("Follow");

  const tabElements = [
    { label: "Follow" },
    { label: "My Project" },
    { label: "My Product" },
  ];

  return (
    <div className="my-[100px]">
      <HeaderProfile />
      <div className="my-[100px] mx-auto flex flex-row w-[100%] overflow-hidden flex-wrap justify-center py-3 max-w-screen-lg">
        <ProfileCard />
        <DesctriptionList />
      </div>
      <div className="max-w-screen-lg mx-auto md:justify-left px-5">
        <Tabs
          setLabelTab={setLabelTab}
          labelTab={labelTab}
          tabElements={tabElements}
        />
        {labelTab === "Follow" ? (
          <StackedListFollow />
        ) : labelTab === "My Product" ? (
          <ProductList products={NEWEST_PRODUCT} />
        ) : (
          <ProductList products={HOTEST_PRODUCT} />
        )}
      </div>
    </div>
  );
}
