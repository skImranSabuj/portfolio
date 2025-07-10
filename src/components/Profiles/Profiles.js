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
      <Box sx={{ marginBottom: "2rem" }}>
        <SectionTitle title="Profiles" />
      </Box>

      <Box sx={{ ...styles.flexCenter, flexWrap: "wrap", gap: "1.5rem" }}>
        {profileList.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: 120,
              padding: 2,
              textAlign: "center",
              borderRadius: "1rem",
              background: "linear-gradient(145deg, #f0f0f3, #cacaca)",
              boxShadow: "5px 5px 15px #bebebe, -5px -5px 15px #ffffff",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "4px 4px 10px #bbb, -4px -4px 10px #fff",
              },
            }}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="h4" component="div" gutterBottom>
                <FontAwesomeIcon icon={item.icon} />
              </Typography>
              <Typography variant="body2">{item.name}</Typography>
            </a>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Profiles;
