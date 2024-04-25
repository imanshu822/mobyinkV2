"use client";
import React from "react";
import { Stack } from "@mui/material";
import Slider from "../../utils/Slider";
import TabLineSection from "./parts/TabLineSection";
import Steps from "./parts/Steps";
import ShappingTheFuture from "./parts/ShappingTheFuture";
import CardSection from "./parts/CardSection";
import SharkTankClients from "./parts/SharkTankClients";

import LatestInsights from "./parts/LatestInsights";
import Footer from "../../utils/Footer";
import LetsConnect from "./parts/LetsConnect";
import GoToTop from "../../utils/GoToTop";
import ScrollingImages from "./parts/ScrollingImages";
import CardScroll from "./parts/CardsScroll";
const Home = () => {
  return (
    <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
      <TabLineSection />
      <Slider />
      <Steps />
      <ShappingTheFuture />
      <CardSection />
      <SharkTankClients />
      <Stack
        display={{
          xs: "none",
          sm: "none",
          md: "none",
          lg: "block",
          xl: "block",
        }}
      >
        <CardScroll />
      </Stack>
      <ScrollingImages />
      <LatestInsights />
      <LetsConnect />
      <Footer />
      <GoToTop />
    </Stack>
  );
};

export default Home;
