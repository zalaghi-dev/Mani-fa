import { Box } from "@mui/material";
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
    <RTL>
      <Element name="Main" />
      <Box
        sx={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
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
  );
};

export default App;
