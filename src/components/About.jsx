import { Avatar, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MS from "../assets/pic/Avatar.jpg";
const About = () => {
  return (
    <Grid container sx={{ mt: { xs: 5, md: 30 } }}>
      <Grid xs={12} md={9}>
        <Typography
          component="span"
          borderBottom="2px solid white"
          variant="h3"
          m={4}
        >
          درباره من
        </Typography>
        <Typography p={5} sx={{ fontSize: "22pt" }}>
          سلام؛ من مانی شیرکوهی هستم، متولد شهر کرج که علاقه زیادی به شعر و
          نویسندگی دارم. داستان نویسندگی من قدمتِ آنچنانی ندارد و می‌توان گفت به
          مدت نه چندان کوتاه و نه چندان طولانی مشغول فعالیت در این زمینه هستم.
          نویسندگی و شاعری را از آنجایی آغاز کردم که متوجه عمق بیشتری از معانی
          شدم و دریافتم که می‌توان خیلی اوقات به جای سخن شفاهی از جوهر قلم برای
          انتقال این معانی استفاده کرد. هیچگاه نخواستم که سبک خاصی را در شعرها و
          متن‌هایم دنبال کنم و همیشه به دنبال آزادی از بندِ قوانین بوده ام.
          شعرهای من قالب مشخصی را دنبال نمی‌کنند و می‌توانید آنها را در قالب های
          مختلف (از شعر سپید گرفته تا دو بیتی و چهارپاره) مشاهده کنید. این هنر
          را مدیون تمام عزیزانی هستم که با نقد و نظرهای بی طرفشان، دائما مرا به
          سوی پیشرفت هر چه تمام تر سوق می‌دادند.
        </Typography>
      </Grid>
      <Grid xs={12} md={3} display="flex" justifyContent="center">
        <Avatar
          src={MS}
          sx={{
            width: { md: "100%", xs: 250 },
            height: { md: "100%", xs: 250 },
          }}
          alt="Mani Shirkoohi"
          variant="rounded"
        >
          MS
        </Avatar>
      </Grid>
    </Grid>
  );
};

export default About;
