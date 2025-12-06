import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import TextLoop from "react-text-loop";
import "./Banner.css";
import { styles } from "../../../theme/styles";
import ProfileImage from "../../../components/ProfileImage/ProfileImage";
import ParticlesInit from "../../../components/ParticlesInit/ParticlesInit";

const Banner = () => {
  return (
    <Box className="banner-Container">
      <ParticlesInit />
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, py: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }}>
            <Grid item xs={12} sm={6} md={4} style={styles.flexCenter}>
              <ProfileImage size="200" />
            </Grid>
            <Grid item xs={12} sm={6} md={8} sx={styles.flexLeft}>
              <Box>
            <Typography variant="h6" sx={{ color: "#a5f3fc" }}> {/* cyan-200 */}
              Hello! I'm
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: 36,
                color: "#ffffff", // pure white
                textShadow: "0 0 8px rgba(0,255,0,0.3)", // subtle green glow
              }}
            >
              Khaja Sheikh Imran Sabuj
            </Typography>

<Typography
  variant="h6"
  sx={{
    color: "#81e6d9", // teal-300
    fontWeight: 600,
    fontSize: 24,
    mt: 1,
    textShadow: "0 0 6px rgba(0,255,0,0.2)",
  }}
>
  <TextLoop
    children={[
      "A Passionate Programmer",
      "Software Engineer",
      "Keen Learner",
    ]}
  />
</Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    borderRadius: "25px",
                    backgroundImage: "linear-gradient(90deg, #616161, #9e9e9e)",
                    color: "white",
                    px: 4,
                    py: 1,
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      backgroundImage: "linear-gradient(90deg, #424242, #757575)",
                    },
                  }}
                >
                  <a
                    href="/KHAJA_SHEIKH_IMRAN_SABUJ_FE_4.pdf"
                    download
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Download CV
                  </a>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;