import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import img1 from "../../../../../public/assests/seo_page_img_1.jpeg";
import Image from "next/image";
const ImgSection = () => {
  return (
    <Stack width={"100%"} bgcolor={"#EBF9FD"}>
      <Stack
        width={{
          xs: "95%",
          lg: "80%",
        }}
        margin={"0 auto"}
      >
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          p={4}
          margin={"0 auto"}
          boxSizing={"border-box"}
          gap={5}
        >
          <Stack
            width={{
              xs: "100%",
              lg: "50%",
            }}
            margin={"0 auto"}
          >
            <Image
              width={1}
              height={1}
              component="img"
              layout="responsive"
              objectFit="cover"
              src={img1}
              style={{
                borderRadius: "10px",
                boxShadow: "2px 18px 25px 10px #E5E5E5",
              }}
            />
          </Stack>
          <Stack
            width={{
              xs: "100%",
              lg: "50%",
            }}
          >
            <Typography
              textAlign={"justify"}
              fontSize={"18px"}
              fontWeight={"300"}
              pl={{
                xs: 0,
                lg: 2,
              }}
              boxSizing={"border-box"}
            >
              Looking to improve your organic search rankings? Look no further
              than our premium services! As a top SEO company in Pune, Mobyink
              specializes in proven strategies to drive quality traffic to your
              website. With our extensive experience in digital marketing, we
              know the most effective tactics to help your business succeed
              online.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
