import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
const RTL = ({ children }) => {
  const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "lotus,roboto",allVariants:{color:"#f5f5f5",}
    },
    palette: {
      mode: "light",
      primary: { main: "rgb(60,60,60)" },
      secondary: { main: "rgb(100,100,100)" },
    },
    components: {
      MuiLink: { styleOverrides: { root: { fontFamily: "vazir" } } },
    },
  });
  const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default RTL;
