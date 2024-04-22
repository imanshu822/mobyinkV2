import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import img2 from "../../../../../public/assests/seo_page_img_2.jpeg";
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
          boxSizing={"border-box"}
          gap={5}
        >
          <Stack
            width={{
              xs: "100%",
              lg: "50%",
            }}
          >
            <Image
              width={1}
              height={1}
              component="img"
              layout="responsive"
              objectFit="cover"
              src={img2}
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
            gap={2}
          >
            <Typography
              fontSize={"20px"}
              fontWeight={"600"}
              pl={{
                xs: 0,
                lg: 2,
              }}
              boxSizing={"border-box"}
            >
              What Makes Us the Best SEO Company in Gurgaon?
            </Typography>
            <Typography
              fontSize={"18px"}
              fontWeight={"300"}
              pl={{
                xs: 0,
                lg: 2,
              }}
              boxSizing={"border-box"}
              textAlign={"justify"}
            >
              With over 7+ years of experience, we provide future-proof and
              comprehensive SEO service in Gurgaon. Our team is highly skilled
              and understands the ever-changing landscape of digital marketing.
              We use the best strategies to enhance website visibility, drive
              organic traffic, and boost online presence. Our approach is
              comprehensive and data-driven, ensuring customized solutions
              tailored to your business goals. We are dedicated to delivering
              consistent and effective results, prioritizing client satisfaction
              above all else. Through our expertise, we help businesses navigate
              the complexities of digital marketing and achieve their
              objectives.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
