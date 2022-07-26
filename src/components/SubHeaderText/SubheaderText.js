import React from "react";

const SubheaderText = ({ children, style }) => {
  let fontSize = "20px" || style.fontSize;
  return (
    <h2 style={{ fontSize: fontSize, textAlign: "center", ...style }}>
      {children}
    </h2>
  );
};

export default SubheaderText;
