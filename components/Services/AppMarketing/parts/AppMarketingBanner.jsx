import { Stack, Typography } from "@mui/material";
import React from "react";
import App_marketing_banner from "../../../../public/assests/App-Marketing-banner.jpeg";
import Nav from "../../../../utils/Navbar/Nav";
import Link from "next/link";
import Image from "next/image";
const AppMarketingBanner = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Image
        src={App_marketing_banner}
        alt="About Banner"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        sizes="(max-width: 768px) 100vw, 33vw"
        quality={100}
      />
      <Nav />
      <Stack
        zIndex={2}
        margin={{
          xs: "100px 20px",
          lg: "230px 96px",
        }}
        gap={"10px"}
      >
        <Typography
          color={"white"}
          fontWeight={"bold"}
          fontSize={{
            xs: "30px",
            lg: "48px",
          }}
        >
          Skyrocket Your App Now
        </Typography>
        <Typography color={"white"}>
          Reach in-app audience programmatically
        </Typography>
        <Link
          href="/get-in-touch"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          style={{
            textDecoration: "none",
          }}
        >
          <Stack
            mt={2}
            justifyContent={"center"}
            alignItems={"center"}
            width={"140px"}
            height={"40px"}
            border={"2px solid white"}
            backgroundColor={"#0D6EFD"}
            sx={{
              "&:hover": {
                color: "white",
                opacity: 0.8,
                fontWeight: "bold",
              },
            }}
          >
            <Typography color={"white"}>Get In Touch</Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};

export default AppMarketingBanner;
