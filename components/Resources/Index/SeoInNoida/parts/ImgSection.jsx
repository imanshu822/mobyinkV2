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
              Mobyink, an SEO company in Noida, uses diverse techniques to
              enhance your website’s search rankings effectively. First, we
              conduct strategic keyword optimization, identifying relevant
              keywords for your business and seamlessly incorporating them into
              your website’s content, meta tags, and other elements. This
              improves its relevance to search queries and increases the
              likelihood of appearing in search results. Mobyink prioritizes
              technical optimizations to ensure your website meets search engine
              standards for crawlability, speed, and mobile-friendliness,
              enhancing user experience and search engine visibility. We
              enriches your website’s content to engage your target audience,
              encouraging longer visits and positive interactions. Through these
              comprehensive strategies, Mobyink, the best SEO company in Noida
              effectively boosts the website’s rank, increasing its visibility
              and driving organic traffic, ultimately leading to business growth
              and success in the competitive online landscape.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
