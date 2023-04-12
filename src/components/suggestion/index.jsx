import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import Suggestion from "./Suggestion";

const Suggestions = ({ data }) => {
  return (
    <>
      <Typography variant="h6" sx={{ mt: 3, textAlign: "center" }}>
        Suggestion
      </Typography>
      <Divider sx={{ margin: "0 2rem 2rem 2rem" }} />
      <Grid container spacing={1} p={0.75}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Suggestion
              name={item.name}
              continent={item.continent}
              country={item.country}
              img={item.img}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Suggestions;
