import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SectionTitle from "../../Pages/Home/AboutMe/SectionTitle";
import { education } from "../../static/education";
import { skillList } from "../../static/skillList";
import { styles } from "../../theme/styles";

const Skills = () => {
  return (
    <Box
      sx={
        {
          // border: "1px solid black"
        }
      }
    >
      <Box sx={{ marginBottom: "2rem" }}>
        <SectionTitle title="Skills" />
      </Box>
      <Grid
        container
        // spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 8, md: 12 }}
        // sx={{ border: "1px solid red" }}
      >
        {skillList.map((item, index) => (
          <Grid xs={3} sm={2} md={2} key={index}>
            <Card
              sx={{
                margin: "10px",
                elevation: "0",
                padding: "10px 0",
              }}
              className="skillCard"
            >
              <img
                src={item.imgUrl}
                alt=""
                style={{
                  // marginLeft: "50px",
                  // marginTop: "30px",
                  margin: "10px auto",
                  //   borderRadius: "50%",
                  //   background: "#EBF4F5",
                  //   border: `${border}px solid #EBF4F5`,
                  height: `${60}px`,
                  width: `${60}px`,
                  //   ...styles.bannerImg,
                }}
                // className="banner-img"
              />
              <Box
                style={{
                  textAlign: "center",
                  //   padding: "20px",
                  //   color: "white",
                }}
              >
                <Typography variant="body1">
                  {/* <AccountBalanceIcon style={styles.icon} size={12} />{" "} */}
                  {item.name}
                </Typography>
              </Box>
              {/* </Box> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
