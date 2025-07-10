import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";

import AppButton from "../components/AppButton";
import SectionTitle from "../../Pages/Home/AboutMe/SectionTitle";
import { styles } from "../../theme/styles";

import bdemrLogo from "../../static/images/logo_bdemr.png";
import adventureLogo from "../../static/images/adventure.jpg";
import alagzooLogo from "../../static/images/alagzoo.jpg";
import bdemrbanner from "../../static/images/exp-bdemr.png";
import skyticketBanner from "../../static/images/skyticket.png";
import studentupliftBanner from "../../static/images/studentuplift.webp";

const experiences = [
  {
    company: "Adventure Dhaka Limited",
    logo: adventureLogo,
    banner: skyticketBanner,
    position: "Senior Software Engineer",
    duration: "April 2024 – June 2025",
    projects: [
      "Skyticket Hotel System – Developed dynamic UI with SSR and i18n support [Next.js, TypeScript]",
      "Airhost Integration – Microservice-based channel manager integration [Spring Boot, MySQL]",
      "On-site Payment Module – Updating the pricing system [Next.js, TypeScript]",
    ],
  },
  {
    company: "Alagzoo",
    logo: alagzooLogo,
    banner: studentupliftBanner,
    position: "Frontend Developer (Remote)",
    duration: "April 2023 – March 2024",
    projects: [
      "Uplift Student App – Built React Native app for course management [React Native, Redux]",
      "Uplift Coach App – Designed and developed mobile tools for coaches [React Native, REST APIs]",
      "App Store Delivery – Managed builds, OTA updates, and store deployment [Expo, Fastlane]",
    ],
  },
  {
    company: "BDEMR Solution Corp.",
    logo: bdemrLogo,
    banner: bdemrbanner,
    position: "Junior Software Engineer",
    duration: "November 2021 – February 2023",
    projects: [
      "TeleDoc Mobile App – Developed video consultation platform [React Native]",
      "Email Auto Responder – Created marketing automation dashboard [React, Node.js]",
      "Email Clinic App – Maintained legacy hospital app [Polymer, CoffeeScript]",
    ],
  },
];

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

      <Box>
        {experiences.map((exp, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Card>
              <Grid
                container
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ borderRadius: "5px", padding: "10px" }}
              >
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={4}
                  sx={{ backgroundColor: "grey" }}
                >
                  <Box sx={{ padding: "0.5rem" }}>
                    <img
                      src={exp.banner}
                      alt=""
                      style={{ width: "100%", borderRadius: "2%" }}
                    />
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={4}
                  sx={{
                    backgroundColor: "grey",
                    borderRight: "1px solid lightgrey",
                  }}
                >
                  <Box sx={{ padding: "0.5rem" }}>
                    <Typography variant="h6">
                      {exp.position} ({exp.duration})
                    </Typography>
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      {exp.projects.map((proj, i) => (
                        <li key={i}>{proj}</li>
                      ))}
                    </ul>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={4}
                  sx={{ backgroundColor: "grey" }}
                >
                  <Box sx={{ padding: "0.5rem" }}>
                    <Box style={styles.flexCenter}>
                      <img
                        src={exp.logo}
                        alt=""
                        style={{ width: "100px", height: "100px" }}
                      />
                    </Box>
                    <Box style={{ textAlign: "center" }}>
                      <h6>{exp.company}</h6>
                      <p>{exp.duration}</p>
                      <Box sx={{ padding: "1rem" }}>
                        {/* <AppButton
                          title="Explore More"
                          handleOnClick={() => console.log("clicked")}
                        /> */}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
