import React from "react";
import { Typography } from "@mui/material";

const SectionTitle = ({ title = "Title" }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        // color: 'gray',
        fontSize: 28,
        // backgroundColor: "red",
        fontFamily: "Roboto Condensed,sans-serif",
        textTransform: "uppercase",
        fontWeight: "bold",
        marginTop: "20px",
      }}
    >
      {" "}
      &#60; {title} /&#62;{" "}
    </Typography>
  );
};

export default SectionTitle;
