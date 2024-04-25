"use client";
import React from "react";
import ContactFaq from "./ContactFaq";
import TabLineSection from "./TabLineSection";
import Footer from "../../utils/Footer";
import { Stack } from "@mui/material";

const Faq = () => {
  return (
    <>
      <Stack width={"100%"}>
        <TabLineSection />
        <ContactFaq />
        <Footer />
      </Stack>
    </>
  );
};

export default Faq;
