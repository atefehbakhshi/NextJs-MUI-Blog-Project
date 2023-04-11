import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

const Continent = ({ img, text, path }) => {
  const router = useRouter();

  const [displayText, setDisplayText] = useState("block");
  const [brightness, setBrightness] = useState("brightness(50%)");

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        onMouseLeave={() => {
          setDisplayText("block");
          setBrightness("brightness(50%)");
        }}
        onMouseEnter={() => {
          setDisplayText("none");
          setBrightness("brightness(100%)");
        }}
        onClick={() => router.push(`/${path}`)}
        sx={{
          borderRadius: 1,
          // remove white space below images
          filter: brightness,
          fontSize: 0,
          "&:hover": {
            cursor: "pointer",
          },
        }}
        component="img"
        src={img}
        alt={text}
        width={"100%"}
      />
      <Typography
        sx={{
          display: displayText,
          position: "absolute",
          width: "60%",
          textAlign: "center",
          top: { xs: "25%", sm: "45%" },
          left: "20%",
          color: "white",
          fontSize: { xs: "0.75rem", sm: "1.125rem" },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Continent;
