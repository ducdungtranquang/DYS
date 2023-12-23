"use client";
import Collection from "@/components/elements/Collection";
import Feature from "@/components/elements/Feature";
import Hero from "@/components/elements/Hero";
import PricingHome from "@/components/elements/PricingHome";
import { ItemPage } from "@/models/type";
import React, { useState } from "react";

const IndexPage: React.FC = () => {
  return (
    <div className="my-[100px]">
      <Hero />
      <Feature />
      <PricingHome />
      <Collection />
    </div>
  );
};

export default IndexPage;
