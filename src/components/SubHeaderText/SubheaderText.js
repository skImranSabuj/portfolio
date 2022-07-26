import React from "react";

const SubheaderText = ({ children, style }) => {
  let fontSize = "20px" || style.fontSize;
  return <h2 style={{ fontSize: fontSize }}>{children}</h2>;
};

export default SubheaderText;
