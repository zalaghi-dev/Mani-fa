import React from "react";
import {
  AppBar,
  Box,
  Slide,
  Toolbar,
  Link,
  useScrollTrigger,
  Typography,
} from "@mui/material";
import { Link as Scroller } from "react-scroll";
const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
const Header = (props) => {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box display="flex">
              <Scroller smooth={true} to="Main">
                <Typography mx={1}>صفحه نخست</Typography>
              </Scroller>
              <Scroller smooth={true} to="About">
                <Typography mx={1}>درباره من</Typography>
              </Scroller>
              <Scroller smooth={true} to="Books">
                <Typography mx={1}>کتاب های من</Typography>
              </Scroller>
            </Box>
            <Link
              href="mailto:M.Gh.Koohi@gmail.com"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              M.Gh.Koohi@gmail.com
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Header;
