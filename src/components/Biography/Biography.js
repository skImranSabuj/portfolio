import React from "react";
import { Box, Card, Typography } from "@mui/material";
import SectionTitle from "../../Pages/Home/AboutMe/SectionTitle";
import useFirebase from "../../hooks/useFirebase";

const Biography = () => {
  const { user } = useFirebase();

  const formatExperience = (startDateStr) => {
    const startDate = new Date(startDateStr);
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years < 0 || (years === 0 && months === 0)) return "Just started";

    const yearStr = years ? `${years} year${years > 1 ? "s" : ""}` : "";
    const monthStr = months ? `${months} month${months > 1 ? "s" : ""}` : "";

    return yearStr && monthStr
      ? `${yearStr} and ${monthStr}`
      : yearStr || monthStr;
  };

  const experience = formatExperience("2021-11-01");

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left", padding: "1.5rem" }}>
      <Box sx={{ marginBottom: "2rem", textAlign: "center" }}>
        <SectionTitle title="Biography" />
      </Box>

      <Card
        sx={{
          padding: "1.5rem",
          borderRadius: "1.25rem",
          background: "linear-gradient(145deg, #EBF4DD, #ffffff)",
          boxShadow: "8px 8px 20px #c6c6c6, -8px -8px 20px #ffffff",
          border: "2px solid #2f6b4a", // green border
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
            borderColor: "#4caf50", // brighter green on hover
          },
        }}
      >
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          I'm <b>Khaja Sheikh Imran Sabuj</b>, a frontend-focused full stack
          developer with <b>{experience}</b> of experience building scalable web
          and mobile apps using <b>React.js</b>, <b>React Native</b>,{" "}
          <b>Next.js</b>, and <b>TypeScript</b>. I’ve worked on production-grade
          platforms in <b>healthcare</b>, <b>travel</b>, and <b>e-commerce</b>
          —handling everything from UI implementation to API integration and
          deployment.
          <br />
          <br />I enjoy solving real-world problems through clean, maintainable
          code and collaborating across teams to deliver user-centric solutions.
          Currently open to impactful opportunities— especially in
          product-driven teams.
        </Typography>
      </Card>
    </Box>
  );
};

export default Biography;
