import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import avatarImage from "../../../static/images/profile1.png";
import TextLoop from "react-text-loop";
import bannerImg from "../../../static/images/profile image.jpg";
import AnimatedText from "react-animated-text-content";
// import bannerImg from "../../../static/images/banner-image.png";
import "./Banner.css";
import { styles } from "../../../theme/styles";
import ProfileImage from "../../../components/ProfileImage/ProfileImage";
const Banner = () => {
  let professionString = "A Passionate Software Engineer";
  const [profession, setProfession] = useState(
    "A Passionate Software Engineer"
  );
  useEffect(() => {
    setInterval(changeProfession, 1000);
  }, []);

  function changeProfession() {
    if (profession === professionString) {
    }
  }
  return (
    <Box className="banner-Container">
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, py: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 6, sm: 6, md: 12 }}
          >
            <Grid item xs={12} sm={6} md={4} style={styles.flexCenter}>
              {/* <Box>
                <img
                  src={bannerImg}
                  alt=""
                  style={{
                    // marginLeft: "50px",
                    // marginTop: "30px",
                    margin: "10px auto",
                    borderRadius: "50%",
                    background: "#EBF4F5",
                    border: "5px solid #338F9A",
                  }}
                  className="banner-img"
                />
              </Box> */}
              <ProfileImage size="200" />
            </Grid>
            <Grid item xs={12} sm={6} md={8} sx={styles.flexLeft}>
              <Box style={{}}>
                <Typography variant="h6" color="light" sx={{ color: "white" }}>
                  Hello! I'm
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    fontSize: 36,
                    color: "white",
                  }}
                >
                  Khaja Sheikh Imran Sabuj
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "gray",
                    fontWeight: "600",
                    fontSize: 24,
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
                {/* <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="float"
                  interval={0.06}
                  duration={0.8}
                  tag="p"
                  className="animated-paragraph"
                  includeWhiteSpaces
                  threshold={1}
                  rootMargin="20%"
                >
                  {professionString}
                </AnimatedText> */}

                <Button
                  variant="contained"
                  style={{ backgroundColor: "", borderRadius: "25px" }}
                  className="default-bg"
                >
                  <a
                    href="/somefile.txt"
                    download
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Download CV
                  </a>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* <img src={avatarImage} alt="" style={{
                height: "100px", width: "100px", marginTop: "-50px", marginLeft: "-150px"
            }} />
            <h2 style={{
                marginTop: "-40px", textTransform: "uppercase"
            }}>Khaja Sheikh Imran Sabuj</h2> */}
      </Container>
    </Box>
  );
};

export default Banner;
