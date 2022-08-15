import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const AppButton = ({
  title = "Submit",
  handleOnClick = () => {
    alert(`${title} clicked!`);
    console.log("clicked");
  },
  width = "100%",
  color = "#4E5B51",
}) => {
  // return <button>{title}</button>;
  return (
    <Box>
      {/* <button
        // type="submit"
        style={{
          padding: "0.5em",
          backgroundColor: color,
          border: "1px solid lightgrey",
          color: "white",
          textTransform: "uppercase",
          width: "100%",
        }}
        className="btn"
        >
        {title}
      </button> */}
      <Button
        onClick={() => handleOnClick()}
        sx={{
          padding: "0.5em",
          backgroundColor: color,
          border: "1px solid lightgrey",
          color: "white",
          textTransform: "uppercase",
          // width: "100%",
          width: width,
        }}
      >
        {title}
      </Button>
    </Box>
  );
};

export default AppButton;
