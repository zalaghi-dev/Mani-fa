import { Box, CssBaseline } from "@mui/material";
import { Element } from "react-scroll";
import Header from "../components/Header";
import RTL from "./RTL";
import bg from "../assets/pic/bg07.jpg";
import NameDisplay from "../components/NameDisplay";
import MainBook from "../components/MainBook";
import About from "../components/About";
import Books from "../components/Books";
const App = () => {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          height: "120%",
          zIndex: -1,
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <RTL>
        <CssBaseline />
        <Element name="Main" />
        <Header />
        <NameDisplay />
        <MainBook />
        <Element name="About">
          <About />
        </Element>
        <Element name="Books">
          <Books />
        </Element>
      </RTL>
    </>
  );
};

export default App;
