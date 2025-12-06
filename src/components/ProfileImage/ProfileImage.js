import { Box } from "@mui/material";
import bannerImg from "../../static/images/dp.png";
export default function ProfileImage({ size, style }) {
  let border = size * 0.02;
  return (
    <Box style={{ ...style }}>
      <img
        src={bannerImg}
        alt=""
        style={{
          margin: "10px auto",
          borderRadius: "50%",
          background: "#EBF4F5",
          border: `${border}px solid #EBF4F5`,
          width: `${size}px`,
          height: `${size}px`,
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </Box>
  );
}
