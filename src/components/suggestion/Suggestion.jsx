import { Box, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

const Suggestion = ({ img, name, country }) => {
  const [displayText, setDisplayText] = useState("block");
  const [brightness, setBrightness] = useState("brightness(75%)");
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        onMouseLeave={() => {
          setDisplayText("block");
          setBrightness("brightness(75%)");
        }}
        onMouseEnter={() => {
          setDisplayText("none");
          setBrightness("brightness(100%)");
        }}
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
        alt={name}
        width={"100%"}
      />
      <Typography
        sx={{
          display: displayText,
          position: "absolute",
          width: "60%",
          textAlign: "center",
          top: "40%",
          left: "20%",
          color: "white",
          fontSize: "1.125rem",
        }}
      >
        {name}
        <br />
        {country}
      </Typography>
    </Box>
  );
};

export default Suggestion;
