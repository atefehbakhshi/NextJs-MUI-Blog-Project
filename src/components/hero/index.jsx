import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <Box component="div">
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
          Travelling To
        </Typography>
        <Typography
          component="p"
          sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
        >
          Whether you’re an adventurer, antiquer, foodie or historian,{" "}
          <strong>Travel To </strong>
          has the perfect activity for you.
        </Typography>
      </Box>
    </div>
  );
};

export default Hero;
