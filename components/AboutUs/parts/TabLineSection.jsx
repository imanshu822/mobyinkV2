import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import Link from "next/link";
import Nav from "../../../utils/Navbar/Nav";
import aboutBannerImg from "../../../public/assests/aboutBanner.webp";
import Image from "next/image";
const item = {
  link: "/get-in-touch",
  link1: "/",
};
const TabLineSection = () => {
  return (
    <>
      <Stack
        display={{
          xs: "none",
          lg: "flex",
        }}
        sx={{
          width: "100%",
          height: "87vh",
        }}
      >
        <Image
          src={aboutBannerImg}
          alt="About Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={100}
        />
        <Nav />
        <Stack zIndex={1}>
          <Stack
            margin={"0 110px"}
            ml={20}
            width={{
              xs: "100%",
              lg: "57%",
            }}
            height={"65vh"}
            gap={3}
            justifyContent={"center"}
          >
            <Typography variant="h3" fontWeight={"bold"} color={"white"}>
              Your Digital Growth Partner
            </Typography>
            <Typography variant="h6" color={"white"}>
              We are a team of digital marketing experts dedicated to driving
              your business forward online.
            </Typography>
            <Link
              href={`${item.link}`}
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

      <Stack
        display={{
          xs: "block",
          lg: "none",
        }}
        sx={{
          bgcolor: "#172063",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
        height={{
          xs: "100%",
        }}
      >
        <Nav />

        <Stack zIndex={1}>
          <Stack
            margin={{
              xs: "70px auto",
              lg: "0 0 0 10%",
            }}
            ml={20}
            width={{
              xs: "90%",
              lg: "57%",
            }}
            gap={4}
            justifyContent={"center"}
          >
            <Typography variant="h3" fontWeight={"bold"} color={"white"}>
              Your Digital Growth Partner
            </Typography>
            <Typography variant="h6" color={"white"}>
              We are a team of digital marketing experts dedicated to driving
              your business forward online.
            </Typography>
            <Link
              href={`${item.link1}`}
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
                backgroundColor={"transparent"}
                sx={{
                  "&:hover": {
                    color: "white",
                    opacity: 0.8,
                    fontWeight: "bold",
                    backgroundColor: "#0D6EFD",
                    transform: "translateY(-5px)",
                    transition: "all 0.7s ease",
                  },
                }}
              >
                <Typography color={"white"}>Get In Touch</Typography>
              </Stack>
            </Link>
          </Stack>
          <Stack m={2}>
            <Image
              src={aboutBannerImg}
              width={1}
              height={1}
              component="img"
              layout="responsive"
              objectFit="cover"
              quality={100}
              style={{
                borderRadius: "10px",
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TabLineSection;
