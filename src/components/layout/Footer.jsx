import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { grey } from "@mui/material/colors";

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#2270703d",
          padding: "1rem",
        }}
      >
        <Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
          Travelling To
        </Typography>
        <Box p={0.75} maxWidth="50rem">
          {/* Contact */}
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              py: 0.5,
              px: 2,
              display: "inline-block",
              textAlign: "center",
              borderBottom: "1px solid grey",
            }}
          >
            Contact
          </Typography>
          <Box sx={{ display: "flex", gap: "0.75rem", mb: "2rem" }}>
            <TelegramIcon sx={{ color: grey[800] }} />
            <WhatsAppIcon sx={{ color: grey[800] }} />
            <LinkedInIcon sx={{ color: grey[800] }} />
            <TwitterIcon sx={{ color: grey[800] }} />
            <FacebookIcon sx={{ color: grey[800] }} />
          </Box>
           {/* About  */}
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              py: 0.5,
              px: 2,
              display: "inline-block",
              textAlign: "center",
              borderBottom: "1px solid grey",
            }}
          >
            About us
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti
            quis consequuntur in placeat, vitae nam possimus omnis rerum quo
            molestias iusto officia sapiente velit tenetur expedita. Sit rerum
            quo molestias iusto officia sapiente velit tenetur expedita. Sit
          </p>
        </Box>
        <Typography sx={{ fontSize: "0.75rem", textAlign: "center", pt: 3 }}>
          <strong>Travel To</strong> - {new Date().getFullYear()} &#169;
          Copyright
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
