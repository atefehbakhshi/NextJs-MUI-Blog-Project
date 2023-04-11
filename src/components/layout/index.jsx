import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Box from "@mui/material/Box";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Box component="main">{props.children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
