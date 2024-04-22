import { Stack, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import Nav from "../../../../utils/Navbar/Nav";
import careerPageImg from "../../../../public/assests/Career-Banner-01.svg";
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
          src={careerPageImg}
          alt="portfolioBanner Banner"
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
            <Typography variant="h3" fontWeight={"bold"} color={"white"}>
              Kickstart Your Career
            </Typography>
            <Typography variant="h6" color={"white"}>
              with fuel that ignites your inner zeal at Mobyink Innovations
            </Typography>
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
