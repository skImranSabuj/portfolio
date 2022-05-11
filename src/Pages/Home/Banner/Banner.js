import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import avatarImage from "../../../static/images/profile1.png";
import bannerImg from "../../../static/images/banner-image.png";
import "./Banner.css";
const Banner = () => {
  return (
    <Box className="banner-Container">
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, pt: 5 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} style={{ backgroundColor: "red" }}>
              <Box style={{ padding: "80px auto", backgroundColor: "blue" }}>
                <img
                  src={bannerImg}
                  alt=""
                  style={{
                    marginLeft: "50px",
                    marginTop: "30px",
                    borderRadius: "50%",
                    background: "#EBF4F5",
                    border: "10px solid #338F9A",
                  }}
                  className="banner-img"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={8}
              sx={{ mt: 5 }}
              style={{
                backgroundColor: "green",
                borderRadius: "25px",
                padding: "20px",
              }}
            >
              <Box style={{ margin: "50px 0 0 50px" }}>
                <Typography variant="h6">Hello! I'm</Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    fontSize: 48,
                  }}
                >
                  Khaja Sheikh Imran Sabuj
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "gray",
                    fontWeight: "700",
                    fontSize: 28,
                  }}
                >
                  A Passionate Software Engineer
                </Typography>
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
