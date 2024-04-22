import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import lock from "../../../../public/assests/wwd1.svg";
import video from "../../../../public/assests/wwd2.svg";
import bulb from "../../../../public/assests/wwd3.svg";
import hand from "../../../../public/assests/wwd4.svg";
import Image from "next/image";

const WhatDoesIt = () => {
  const stackData = [
    {
      title: "Global Visibility",
      svg: lock,
    },
    {
      title: "Credibility",
      svg: video,
    },
    {
      title: "E-Commerce Opportunities",
      svg: bulb,
    },
    {
      title: "Competitive Edge",
      svg: hand,
    },
  ];

  const stackComponents = stackData.map((item, index) => (
    <Stack
      key={index}
      bgcolor={"white"}
      width={{
        xs: "170px",
        lg: "250px",
      }}
      height={{
        xs: "170px",
        lg: "250px",
      }}
      sx={{
        borderWidth: "5px 0 0 0",
        borderStyle: "solid",
        borderColor: "#0d6efd",
        borderRadius: "10px",
      }}
    >
      <Stack
        p={3}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
        height={"100%"}
      >
        <Image width={40} height={40} src={item.svg} component="img" />{" "}
        <Typography
          textAlign={"center"}
          fontSize={{
            xs: "15px",
            lg: "25px",
          }}
          fontWeight={"normal"}
        >
          {item.title}
        </Typography>
      </Stack>
    </Stack>
  ));

  return (
    <Stack mt={10} boxSizing={"border-box"}>
      <Stack
        width={{
          xs: "95%",
          lg: "80%",
        }}
        margin={"0 auto"}
      >
        <Stack
          width={{
            xs: "90%",
            lg: "70%",
          }}
          margin={"0 auto"}
          gap={2}
        >
          <Typography
            textAlign={"center"}
            fontSize={{
              xs: "30px",
              lg: "45px",
            }}
            fontWeight={"bold"}
          >
            What Does it bring to your brand?
          </Typography>
          <Typography textAlign={"center"} variant={"body1"}>
            Enter the realm of success through the unparalleled effectiveness of
            professional website development. Brace yourself for a journey where
            every pixel tells a story and every click opens a door to endless
            possibilities!
          </Typography>
        </Stack>
        <Stack
          mt={7}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={3}
        >
          {stackComponents}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WhatDoesIt;
