import { Box } from "@mui/material";
import React from "react";
import bannerImg from "../../static/images/profile image.jpg";
import { styles } from "../../theme/styles";
export default function ProfileImage({ size, style }) {
  let border = size * 0.02;
  return (
    <Box style={{ ...style }}>
      <img
        src={bannerImg}
        alt=""
        style={{
          // marginLeft: "50px",
          // marginTop: "30px",
          margin: "10px auto",
          borderRadius: "50%",
          background: "#EBF4F5",
          border: `${border}px solid #EBF4F5`,
          height: `${size}px`,
          width: `${size}px`,
          //   ...styles.bannerImg,
        }}
        // className="banner-img"
      />
    </Box>
  );
}
