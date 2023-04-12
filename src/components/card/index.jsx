import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const PlaceCard = ({ img, name, continent, country }) => {
  return (
    <Card
      sx={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 5px 5px 0px",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="250" image={img} alt={name} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
            component="div"
          >
            {name}
          </Typography>
          <Typography sx={{ fontSize: "0.75rem", lineHeight: "1.5rem" }}>
            <b> Continent:</b> {continent}
          </Typography>
          <Typography sx={{ fontSize: "0.75rem" }}>
            <b> Country:</b> {country}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PlaceCard;

