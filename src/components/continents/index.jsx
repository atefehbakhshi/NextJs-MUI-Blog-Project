import { Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Continent from "./Continent";

const getData = async () => {
  const res = await fetch("http://localhost:3001/continents");
  const data = await res.json();

  return data;
};

const Continents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return (
    <>
      <Typography variant="h6" sx={{ mt: 3, textAlign: "center" }}>
        Continents
      </Typography>
      <Divider sx={{ margin: "0 2rem 2rem 2rem" }} />
      <Grid container spacing={1} p={0.75}>
        {data.map((item) => (
          <Grid item xs={4} md={2} key={item.continent}>
            <Continent img={item.img} text={item.continent} path={item.path} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Continents;
