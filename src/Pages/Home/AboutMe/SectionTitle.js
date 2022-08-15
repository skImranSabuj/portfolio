import React from "react";
import { Typography } from "@mui/material";

const SectionTitle = ({ title = "Title" }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        // color: 'gray',
        fontWeight: "500",
        fontSize: 28,
        margin: "15px 0",
        // backgroundColor: "red",
      }}
    >
      {" "}
      &#60; {title} /&#62;{" "}
    </Typography>
  );
};

export default SectionTitle;
