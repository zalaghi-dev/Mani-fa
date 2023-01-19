import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const NameDisplay = () => {
  const nameEl = useRef(null);
  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["مانی شیرکوهی"],
      typeSpeed: 70,
      showCursor: false,
    });
    return () => {
      typedName.destroy();
    };
  }, []);

  return (
    <Box mt={5} p={5} textAlign="center">
      <Typography variant="h4">وبسایت رسمی</Typography>
      <Typography ref={nameEl} variant="h2" />
    </Box>
  );
};

export default NameDisplay;
