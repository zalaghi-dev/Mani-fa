import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { primaryColor } from "../constants/pallete";
import Main from "../assets/pic/Main.jpg";
const MainBook = () => {
  return (
    <Grid
      container
      sx={{
        p: 4,
        mt: 10,
        position: "relative",
        display: "flex",
        bgcolor: { xs: "", md: `${primaryColor}` },
        flexDirection: { xs: "column-reverse", md: "column" },
      }}
    >
      <Grid textAlign="center" xs={12} md={6}>
        <Typography variant="h3" mt={2}>
          محالات
        </Typography>
        <Typography variant="h5" mb={2}>
          فریاد هایی بی فرجام ناشی از یک ذهن ناآرام
        </Typography>
        <Button
          size="large"
          sx={{ width: 150 }}
          href="https://idpay.ir/mohalatbook/file/280703"
          variant="contained"
        >
          خرید کتاب
        </Button>
      </Grid>

      <Grid
        sx={{
          position: { xs: "static", md: "absolute" },
          right: 170,
          top: -70,
          m: "2 auto",
          textAlign: "center",
        }}
      >
        <Box width={300} component="img" src={Main} alt="cover" />
      </Grid>
    </Grid>
  );
};

export default MainBook;
