import { Box } from "@mui/material";
import React from "react";
import ParticlesInit from "../ParticlesInit/ParticlesInit";
import SubheaderText from "../SubHeaderText/SubheaderText";

const SubHeaderBox = ({ title = "Sub Header" }) => {
  return (
    <Box className="sub-header-box">
      <SubheaderText className="container">{title}</SubheaderText>
      {/* <ParticlesInit /> */}
    </Box>
  );
};

export default SubHeaderBox;
