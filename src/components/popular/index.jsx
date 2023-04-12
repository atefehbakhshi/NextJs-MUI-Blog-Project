import { Divider, Grid, Typography } from "@mui/material";
import PlaceCard from "../card";

const Popular = ({ data }) => {
  return (
    <>
      <Typography variant="h6" sx={{ mt: 3, textAlign: "center" }}>
        Popular
      </Typography>
      <Divider sx={{ margin: "0 2rem 2rem 2rem" }} />
      <Grid container spacing={1} p={0.75}>
        {data.map((item) => (
          <Grid item xs={6} sm={4} md={3} key={item.name}>
            <PlaceCard
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

export default Popular;
