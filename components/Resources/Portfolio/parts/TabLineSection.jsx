import { Stack, Typography } from "@mui/material";
import React from "react";
import portfolioBanner from "../../../../public/assests/Portfolio_Banner.svg";
import Nav from "../../../../utils/Navbar/Nav";
import Image from "next/image";
const TabLineSection = () => {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Image
          src={portfolioBanner}
          alt="portfolioBanner Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={100}
        />
        <Nav />
      </Stack>
    </>
  );
};

export default TabLineSection;
