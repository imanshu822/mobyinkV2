import { Stack, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import Nav from "../../../utils/Navbar/Nav";

const TabLineSection = () => {
  return (
    <>
      <Stack position="relative" width="100%" height="100vh">
        <video
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
          autoPlay
          loop
          muted
          controls={false}
        >
          <source src="/assests/VideoBanner.mp4" type="video/mp4" />
        </video>

        {/* Blue overlay for readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(13, 110, 253, 0.5)", // Semi-transparent blue
            zIndex: 2, // Above the video
          }}
        ></div>

        <Nav />

        <Stack zIndex={3} position="relative" padding="20px">
          <Stack
            margin={{
              xxl: "0 97px",
              xl: "0 97px",
              md: "0 97px",
              xs: "0 auto",
            }}
            width={{
              xxl: "60%",
              xl: "60%",
              lg: "60%",
              sm: "80%",
            }}
            height={{
              xs: "70vh",
              lg: "90vh",
            }}
            gap={3}
            justifyContent={"center"}
          >
            <Typography
            variant="h1"
              textAlign={{
                xs: "center",
                sm: "center",
                md: "left",
              }}
              fontSize={{
                xxl: "52px",
                xl: "48px",
                lg: "44px",
                xs: "34px",
              }}
              fontWeight={"bold"}
              color={"white"}
              lineHeight={1.4}
            >
              Pioneering The Digital Frontier For Market Leaders
            </Typography>
            <Typography
              textAlign={{
                xs: "center",
                sm: "center",
                md: "left",
              }}
              fontSize={{
                xxl: "26px",
                xl: "24px",
                xs: "20px",
              }}
              color={"white"}
            >
              Where advanced technology meets rapid innovation, transforming
              challenges into strategic masterpieces.
            </Typography>
            <Stack
              alignItems={{
                xs: "center",
                md: "flex-start",
              }}
            >
              <Link
                href="/get-in-touch"
                onClick={() => {
                  window.scrollTo(0, 0);
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
                      opacity: 0.8,
                      fontWeight: "bold",
                    },
                  }}
                >
                  <Typography color={"white"}>Get In Touch</Typography>
                </Stack>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TabLineSection;
