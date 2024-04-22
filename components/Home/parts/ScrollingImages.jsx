import React, { useState } from "react";
import "./ScrollingImages.css"; // CSS file for styles
import Image1 from "../../../public/assests/1.jpg";
import Image2 from "../../../public/assests/2.jpg";
import Image3 from "../../../public/assests/3.jpg";
import Image4 from "../../../public/assests/4.jpg";
import Image5 from "../../../public/assests/5.jpg";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const ScrollingImages = () => {
  const [activeCard, setActiveCard] = useState(0); // State to track active card

  const lists = [
    { src: Image1, Title: "5+", Description: "In Mobile App Marketing" },
    { src: Image2, Title: "3+", Description: "In Digital Marketing" },
    { src: Image3, Title: "90%", Description: "Client Retention" },
    { src: Image4, Title: "150+", Description: "Project Completed" },
    { src: Image5, Title: "The last of us", Description: "" },
  ];

  return (
    <Stack
      display={{
        xs: "none",
        lg: "flex",
      }}
      alignItems={"center"}
    >
      <Typography
        fontFamily={"Monstrate,sans-serif"}
        letterSpacing={2}
        color={"black"}
        fontSize={{
          xs: "30px",
          sm: "30px",
          lg: "50px",
        }}
        fontWeight={"bold"}
      >
        Our Journey <span style={{ color: "#0d6efd" }}>So Far</span>
      </Typography>
      <Stack direction={"row"} width={"90%"} justifyContent={"center"} pt={5}>
        {lists.map((d, index) => (
          <div
            key={index}
            className={`card ${activeCard === index ? "active" : ""}`}
            onMouseEnter={() => setActiveCard(index)}
          >
            <Image src={d.src} alt={`Image ${index}`} layout="fill" />
            {activeCard === index && (
              <div className="content">
                <Typography className="title">{d.Title}</Typography>
                <Typography className="description">{d.Description}</Typography>
              </div>
            )}
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

export default ScrollingImages;
