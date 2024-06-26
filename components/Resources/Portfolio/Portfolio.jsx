"use client";
import { Stack } from "@mui/material";
import React from "react";
import TabLineSection from "./parts/TabLineSection";
import PortfoliosHeadingSection from "./parts/PortfoliosHeadingSection";
import Footer from "../../../utils/Footer";
import PortfoliosSection from "./parts/PortfoliosSection";
import WantToMake from "./parts/WantToMake";
import GoToTop from "../../../utils/GoToTop";
const Portfolio = () => {
  return (
    <>
      <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
        <TabLineSection />
        <PortfoliosHeadingSection />
        <PortfoliosSection />
        <WantToMake />
        <Footer />
        <GoToTop />
      </Stack>
    </>
  );
};

export default Portfolio;
