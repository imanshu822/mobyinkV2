import { Stack, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import Nav from "../../../../utils/Navbar/Nav";
import financeImage from "../../../../public/assests/Finance-Banner-1.svg";
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
          src={financeImage}
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
              Unleash Financial Fabulosity
            </Typography>
            <Typography variant="h6" color={"white"}>
              Money Talks, But We Make It Sing!
            </Typography>
            <Link
              href={"/get-in-touch"}
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
        </Stack>
      </Stack>
    </>
  );
};

export default TabLineSection;
