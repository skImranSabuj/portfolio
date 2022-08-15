import { Box } from "@mui/system";
import React from "react";
import AppButton from "../components/AppButton";

import bdemrLogo from "../../static/images/logo_bdemr.png";
import bdemrbanner from "../../static/images/exp-bdemr.png";
import SectionTitle from "../../Pages/Home/AboutMe/SectionTitle";
import { Card, Grid, Typography } from "@mui/material";
import { styles } from "../../theme/styles";

const Experience = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        textAlign: "left",
        padding: "0.8rem",
      }}
    >
      <Box sx={{ marginBottom: "2rem", textAlign: "center" }}>
        <SectionTitle title="Experience" />
      </Box>
      <Card>
        <Grid
          container
          // spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            backroundColor: "lightgrey",
            // border: "1px solid black",
            borderRadius: "5px",
            padding: "10px",
            // margin: "20px",
            // boxShadow: "2px 2px 5px 2px grey",
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            sx={{ elevation: 2, backgroundColor: "grey" }}
          >
            <Box sx={{ padding: "0.5rem" }}>
              <img
                src={bdemrbanner}
                alt=""
                style={{
                  // marginLeft: "50px",
                  // marginTop: "30px",
                  width: "100%",
                  height: "auto",
                  // margin: "10px auto",
                  borderRadius: "2%",
                  // background: "#EBF4F5",
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            sx={{
              elevation: 2,
              backgroundColor: "grey",
              borderRight: "1px solid lightgrey",
            }}
          >
            <Box
              sx={{
                padding: "0.5rem",
              }}
            >
              <Typography variant="h6">
                JUNIOR SOFTWAREENGINEER (November 2021 - Present)
              </Typography>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  // backgroundColor: "blue",
                  // height: "100vh",
                }}
              >
                <li>
                  BDEMR TeleDoc App for telemedicine serveice [React Native]
                </li>
                <li>
                  BDEMR Email Auto responder for email marketing [React ,
                  NodeJs]
                </li>
                <li>
                  BDEMR Email Clinic App for hospital and diagnsotics [Polymer,
                  Coffeescript]
                </li>
              </ul>
            </Box>
            {/* <Divider orientation="vertical" flexItem /> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            sx={{ elevation: 2, backgroundColor: "grey" }}
          >
            <Box sx={{ padding: "0.5rem" }}>
              <Box style={styles.flexCenter}>
                <img
                  src={bdemrLogo}
                  alt=""
                  style={{
                    // marginLeft: "50px",
                    // marginTop: "30px",
                    width: "100px",
                    height: "100px",
                    // margin: "10px auto",
                    borderRadius: "2%",
                    // background: "#EBF4F5",
                  }}
                />
              </Box>
              <Box style={{ textAlign: "center" }}>
                <h6>BDEMR Solution Corp.</h6>
                <p>From Novemebr 2021 to Present</p>
                <Box sx={{ padding: "1rem" }}>
                  <AppButton
                    title="Explore More"
                    handleOnClick={() => console.log("clicked")}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Experience;
