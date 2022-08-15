import { Box } from "@mui/system";
import React from "react";
import AppButton from "../components/AppButton";

import bdemrLogo from "../../static/images/logo_bdemr.png";
import bdemrbanner from "../../static/images/exp-bdemr.png";
import SectionTitle from "../../Pages/Home/AboutMe/SectionTitle";
import { Card, Grid, Typography } from "@mui/material";
import { styles } from "../../theme/styles";

const Biography = () => {
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
            I am a Computer Science graduate currently working as a Jr. Software
            Engineer who is passionate about programming, development and enjoys
            learning/working with existing or new technologies. Moreover, I can
            learn quickly, and adopt with new techs and environments with
            dedication.
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Biography;
