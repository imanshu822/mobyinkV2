import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import img3 from "../../../../../public/assests/seo_page_img_3.jpeg";
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
              src={img3}
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
              Why Choose us For SEO Services?
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
              As the leading SEO services company in Jaipur, we specialize in
              enhancing website outcomes by optimizing content, keywords, and
              meta tags. Our goal is to ensure your site ranks prominently in
              search engine results, driving targeted traffic that maximizes
              engagement, conversions, and business growth. With over 7 years of
              experience, we have helped numerous businesses improve their
              online presence, whether by increasing website traffic or
              generating leads.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
