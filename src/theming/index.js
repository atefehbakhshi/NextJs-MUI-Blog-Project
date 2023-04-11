import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 0, 0, 0.35)",
      contrastText: "#fff",
    },
    secondary: {
      light: "#3abda11a",
      main: "#3cbda51a",
      dark: "#3cbdf81a",
      contrastText: "#000",
    },
  },
});
