import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonBase, Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import SectionTitle from "../../Pages/Home/AboutMe/SectionTitle";
import { education } from "../../static/education";
import { skillList } from "../../static/skillList";
import { styles } from "../../theme/styles";

const Profiles = () => {
  const [profileList, setProfileList] = useState([
    {
      name: "GitHub",
      fontAwesomeIcon: "fa-brands fa-github",
      href: "https://github.com/skImranSabuj",
    },
    {
      name: "LinkedIn",
      fontAwesomeIcon: "fa-brands fa-linkedin",
      href: "https://www.linkedin.com/in/skimransabuj/",
    },
    {
      name: "beecrowd",
      fontAwesomeIcon: "fa-solid fa-laptop-code",
      href: "https://www.beecrowd.com.br/judge/en/profile/169674",
    },
    {
      name: "Facebook",
      fontAwesomeIcon: "fa-brands fa-facebook",
      href: "https://www.facebook.com/skimransabuj",
    },
  ]);

  const handleVisitProfile = () => {
    console.log("clicked");
  };
  return (
    <Box
      sx={
        {
          // border: "1px solid black"
        }
      }
    >
      <Box sx={{ marginBottom: "2rem" }}>
        <SectionTitle title="Profiles" />
      </Box>
      <Box style={{ ...styles.flexCenter, flexWrap: "wrap" }}>
        {profileList.map((item, index) => (
          // <Grid xs={3} sm={2} md={2} key={index}>
          <Card
            sx={{
              margin: "10px",
              elevation: "0",
              padding: "1rem",
              width: "100px",
              // height: "100px",
            }}
            className="skillCard"
            onPress={() => handleVisitProfile()}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "rgb(74, 74, 74)" }}
            >
              <Typography variant="h5">
                <i class={item.fontAwesomeIcon}></i>
              </Typography>
              <Box
                style={{
                  textAlign: "center",
                }}
              >
                <Typography variant="body2">{item.name}</Typography>
              </Box>
            </a>
          </Card>
        ))}
        {/* <Grid
          container
          // spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
          // sx={{ border: "1px solid red" }}
        >
          
        </Grid> */}
      </Box>
    </Box>
  );
};

export default Profiles;
