import { Box } from "@mui/system";
import React from "react";
import AppButton from "../components/AppButton";

import bdemrLogo from "../../static/images/logo_bdemr.png";
import bdemrbanner from "../../static/images/exp-bdemr.png";
import SectionTitle from "../../Pages/Home/AboutMe/SectionTitle";
import { Card, Grid, Typography } from "@mui/material";
import { styles } from "../../theme/styles";
import useFirebase from "../../hooks/useFirebase";
import { useContext } from "react";

const Biography = () => {
  const { user } = useFirebase();

  function formatExperience(startDateStr) {
    const startDate = new Date(startDateStr);
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years < 0 || (years === 0 && months === 0)) {
      return "Just started";
    }

    const yearStr = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
    const monthStr =
      months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

    if (yearStr && monthStr) return `${yearStr} and ${monthStr}`;
    return yearStr || monthStr;
  }

  const experience = formatExperience("2021-11-01");

  console.log({ user });
  return (
    <Box
      sx={{
        flexGrow: 1,
        textAlign: "left",
        padding: "1rem",
      }}
    >
      <Box sx={{ marginBottom: "2rem", textAlign: "center" }}>
        <SectionTitle title="Biography" />
      </Box>
      <Card>
        <Box sx={{ padding: "1rem" }}>
          <Typography>
            I'm Khaja Sheikh Imran Sabuj, a frontend-focused full stack
            developer with <b>{experience} </b> of experience building scalable
            web and mobile apps using React.js, React Native, Next.js, and
            TypeScript. I’ve worked on production-grade platforms in healthcare,
            travel, and e-commerce—handling everything from UI implementation to
            API integration and deployment. I enjoy solving real-world problems
            through clean, maintainable code and collaborating across teams to
            deliver user-centric solutions. Currently open to impactful
            opportunities—especially in product-driven teams.
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Biography;
