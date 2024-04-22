import { Stack, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import Nav from "../../../../utils/Navbar/Nav";
import CaseStudiesImg from "../../../../public/assests/Blog-Banner-scaled-1.jpg";
import Image from "next/image";
const TabLineSection = () => {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
        }}
      >
        <Image
          src={CaseStudiesImg}
          alt="CaseStudiesImg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <Nav />
        <Stack zIndex={1}>
          <Stack
            margin={{
              xs: "0 auto",
              lg: "0 110px",
            }}
            ml={20}
            width={{
              xs: "90%",
              lg: "40%",
            }}
            height={"90vh"}
            gap={3}
            justifyContent={"center"}
          >
            <Typography
              fontSize={{
                xs: "2rem",
                lg: "3rem",
              }}
              fontWeight={"bold"}
              color={"white"}
            >
              Blogs
            </Typography>
            <Typography variant="h6" color={"white"}></Typography>
            <Link
              href="/get-in-touch"
              onClick={() => {
                window.scroll(0, 0);
              }}
              style={{
                textDecoration: "none",
              }}
            >
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width={"140px"}
                height={"40px"}
                border={"2px solid white"}
                backgroundColor={"#0D6EFD"}
                sx={{
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <Typography color={"white"}>Get In Touch</Typography>
              </Stack>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TabLineSection;
