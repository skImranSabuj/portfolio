import { Box, Container, Grid, Typography, Button } from "@mui/material";
import TextLoop from "react-text-loop";
import "./Banner.css";
import { styles } from "../../../theme/styles";
import ProfileImage from "../../../components/ProfileImage/ProfileImage";
import ParticlesInit from "../../../components/ParticlesInit/ParticlesInit";

const Banner = () => {
  return (
    <Box className="banner-Container" sx={{overflow:"hidden"}}>
      <Box
        sx={{
          position: "absolute",
          inset: 0,          // fills the banner only
          zIndex: 0,
        }}
      >
        <ParticlesInit />
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, py: { xs: 4, md: 8 } }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 6, sm: 6, md: 12 }}
            alignItems="center"
          >
            {/* Profile Image Section */}
            <Grid item xs={12} sm={6} md={4} sx={styles.flexCenter}>
              <Box sx={{ position: "relative" }}>
                {/* Green glow behind profile image */}
                <Box
                  sx={{
                    position: "absolute",
                    width: 220,
                    height: 220,
                    borderRadius: "50%",
                    // background:
                    //   "radial-gradient(circle, rgba(0,255,0,0.2) 0%, transparent 70%)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 0,
                  }}
                />
                <ProfileImage size="200" />
              </Box>
            </Grid>

            {/* Text Section */}
            <Grid item xs={12} sm={6} md={8} sx={styles.flexLeft}>
              <Box sx={{flex:1,textAlign: { xs: "center", md: "start" }, mx:"auto"}}>
                <Typography
                  variant="h6"
                  sx={{ color: "#a5f3fc", fontSize: { xs: 16, md: 20 } }}
                >
                  Hello! I'm
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: 24, sm: 30, md: 36 },
                    color: "#ffffff",
                    textShadow: "0 0 8px rgba(0,255,0,0.3)",
                  }}
                >
                  Khaja Sheikh Imran Sabuj
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "#81e6d9",
                    fontWeight: 600,
                    fontSize: { xs: 18, sm: 20, md: 24 },
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
                    border:"2px solid #0f0f0fce",
                    borderRadius: "25px",
                    backgroundImage: "linear-gradient(90deg, #00ff99, #00cc66)",
                    color: "#0f0f0f",
                    px: { xs: 2, sm: 4 },
                    py: { xs: 0.5, sm: 1 },
                    fontSize: { xs: 14, sm: 16 },
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0 0 10px rgba(0,255,0,0.3)",
                    "&:hover": {
                      backgroundImage:
                        "linear-gradient(90deg, #00cc66, #00994d)",
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