import React, { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import SectionTitle from "../../Pages/Home/AboutMe/SectionTitle";
import { styles } from "../../theme/styles";

const Profiles = () => {
  const [profileList] = useState([
    {
      name: "GitHub",
      icon: faGithub,
      href: "https://github.com/skImranSabuj",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/skimransabuj/",
    },
    {
      name: "beecrowd",
      icon: faLaptopCode,
      href: "https://www.beecrowd.com.br/judge/en/profile/169674",
    },
    {
      name: "Facebook",
      icon: faFacebook,
      href: "https://www.facebook.com/skimransabuj",
    },
  ]);

  return (
    <Box>
      <Box sx={{ marginBottom: "2rem", marginTop: 5 }}>
        <SectionTitle title="Profiles" />
      </Box>

      {/* Responsive flex container */}
      <Box
        sx={{
          ...styles.flexCenter,
          flexWrap: "wrap",
          gap: "1.5rem",
          padding: "1rem",
          justifyContent: "center",
        }}
      >
        {profileList.map((item, index) => (
          <Card
            key={index}
            sx={{
              // width: { sm: "120px", md: "140px" }, // responsive widths
              // height: { sm: "120px", md: "140px" }, // responsive widths
              padding: 2,
              width: "120px",
              textAlign: "center",
              borderRadius: "1rem",
              background: "linear-gradient(145deg, #163024, #2f6b4a, #ffffff)", // matches banner/project card
              border: "2px solid #2f6b4a", // green border
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
                borderColor: "#4caf50", // brighter green on hover
              },
            }}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={index}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="h4" component="div" gutterBottom>
                <FontAwesomeIcon icon={item.icon} color="#ffffff" />
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {item.name}
              </Typography>
            </a>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Profiles;
