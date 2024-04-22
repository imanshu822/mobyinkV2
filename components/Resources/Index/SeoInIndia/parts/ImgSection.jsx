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
              Mobyink is the go-to digital agency for all kinds of businesses,
              big or small. We transform businesses by boosting their online
              visibility, attracting targeted traffic, and enhancing user
              experience, which brings in more natural website visitors and
              helps them rank better on search engines. With Mobyink’s expertise
              in analytics and data insights, businesses gain trust and success
              on online platforms. By focusing on creating quality content and
              prioritizing long-term growth, we ensure lasting success in the
              digital landscape. Our specialized strategies will help your
              business to rank higher on SERPs (search engine result pages).
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
