import React from "react";
import { primaryColor } from "../constants/pallete";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Book1 from "../assets/pic/Book1.jpg";
import Book2 from "../assets/pic/Book2.jpg";
import Main from "../assets/pic/Main.jpg";
const Books = () => {
  return (
    <Box mt={10} display="flex" justifyContent="space-around" flexWrap="wrap">
      <Card sx={{ bgcolor: `${primaryColor}`, width: 250, my: 5 }}>
        <CardMedia sx={{ height: 350 }} image={Book1} title="Navad o Hasht" />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            نود و هشت
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ width: "100%" }} variant="contained" size="large">
            بزودی
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ bgcolor: `${primaryColor}`, width: 250, my: 5 }}>
        <CardMedia
          sx={{ height: 350 }}
          image={Book2}
          title="Raftar Haye Mozeii"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            رفتار های موضعی
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ width: "100%" }} variant="contained" size="large">
            بزودی
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ bgcolor: `${primaryColor}`, width: 250, my: 5 }}>
        <CardMedia sx={{ height: 350 }} image={Main} title="Mahalat" />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            محالات
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            href="https://idpay.ir/mohalatbook/file/280703"
            variant="contained"
            size="large"
            sx={{ width: "100%" }}
          >
            خرید
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Books;
