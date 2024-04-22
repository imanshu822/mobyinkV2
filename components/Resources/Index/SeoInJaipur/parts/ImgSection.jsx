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
              Dreaming of seeing your site on the first page of search results?
              Mobyink, the leading SEO company in Jaipur, can make that dream a
              reality. With a good amount of experience, we have helped
              countless businesses and clients in boosting their online presence
              and visibility. We turn your goals into real results with
              top-notch services. Our comprehensive services are crafted to help
              businesses of all sizes, making sure you connect with your target
              audience. We have a team of masters who provide customized
              strategies to meet your specific needs. With our extensive
              solutions, your business can overcome any challenges and reach new
              heights of success. Count on Mobyink to navigate the digital
              world’s complexities and connect with us on your digital journey
              to unlock your online potential.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
