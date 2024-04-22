import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import portfolioLadyImg from "../../../../public/assests/portfolioLadyImg.png";
import Image from "next/image";
import Link from "next/link";
const WantToMake = () => {
  return (
    <Stack width={"100%"} mt={15} boxSizing={"border-box"}>
      <Stack width={"95%"} margin={"0 auto"} boxSizing={"border-box"}>
        <Stack
          width={"95%"}
          bgcolor={"#0D6EFD"}
          height={"300px"}
          margin={"0 auto"}
          borderRadius={"10px"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack
            p={{
              xs: 2,
              lg: 4,
            }}
            width={"50%"}
            gap={3}
          >
            <Typography
              fontSize={{
                xs: "20px",
                lg: "30px",
              }}
              fontWeight={"500"}
              color={"white"}
            >
              Elevate Your Experience Today!
            </Typography>
            <Link href="/get-in-touch">
              <Stack
                border={"2px solid white"}
                borderRadius={"8px"}
                width={{
                  xs: "150px",
                  lg: "250px",
                }}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    opacity: 0.8,
                  },
                }}
              >
                <Typography
                  color={"white"}
                  fontSize={{
                    xs: "15px",
                    lg: "20px",
                  }}
                  padding={"10px 5px"}
                  boxSizing={"border-box"}
                >
                  Book A Free Call Now
                </Typography>
              </Stack>
            </Link>
          </Stack>
          <Stack width={"200px"} height={"200px"} position={"relative"}>
            <Image
              src={portfolioLadyImg}
              width={1}
              height={1}
              component="img"
              layout="responsive"
              objectFit="cover"
              style={{
                position: "absolute",
                top: -35,
                right: 35,
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WantToMake;
