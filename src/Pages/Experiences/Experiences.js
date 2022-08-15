import { Button, Typography, Box, Grid, Divider } from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import InsertInvitation from "@mui/icons-material/InsertInvitation";
import SubjectIcon from "@mui/icons-material/Subject";
import WorkIcon from "@mui/icons-material/Work";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styles } from "../../theme/styles";
import DetailedCard from "../../components/DetailedCard";
import SubheaderText from "../../components/SubHeaderText/SubheaderText";
import SubHeaderBox from "../../components/SubHeaderBox/SubHeaderBox";
let experienceData = [
  {
    title: "Email Auto Responder",
    period: "November 2021 - Present",
  },
];
const experienceCardStyle = {
  // border: "2px solid black",
  padding: "5%",
  // margin: "10Px",
};
const Experiences = () => {
  return (
    <Box>
      <Header />
      <Box>
        <SubHeaderBox title="Experiences" />
        <Box
          sx={{
            flexGrow: 1,
            textAlign: "left",
            margin: "10px",
            padding: "0 10%",
          }}
        >
          <Grid
            // container
            // spacing={}
            columns={{ xs: 4, sm: 8, md: 12 }}
            // sx={{ backgroundColor: "blue" }}
          >
            <Grid xs={12} md={12} style={experienceCardStyle} spacing={2}>
              <Box style={{}}>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  JUNIOR SOFTWAREENGINEER (November 2021 - Present)
                </Typography>
                {/* <Button variant="outlined">Find out More</Button> */}
              </Box>
              <Typography sx={{ textAlign: "center" }}>
                <WorkIcon style={styles.icon} size={12} />
                BDEMR Solutions Corp.
              </Typography>
              <Divider />
              <Typography
                sx={{
                  textAlign: "center",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                PROJECTS
              </Typography>
              <Box style={{ textAlign: "justify" }}>
                <p></p>
                {/* <p>
                  Building BDEMR TeleDoc App with React Native. Key Features
                  includes appoinment booking, payment from wallet wallet,
                  Medicine and Vital tracking. Role Based access features.
                  Organization and user management. <br /> Developed an Email
                  Marketing Web App named as BDEMR Email Autoresponder That
                  automatically responds to emials with user selected templates
                  and delay also can broadcast emails. Mainly build with
                  ReactJs, Gmail API, emailjs-imapclient, NodeJs and MongoDB{" "}
                  <br /> Worked on fixing bugs and improving BDEMR Patient App
                  and Doctor App build with Polymer and Coffeescript
                </p> */}
              </Box>
              <Box
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "5%",
                }}
              >
                <DetailedCard />
                <DetailedCard />
                <DetailedCard />
              </Box>
            </Grid>
            <Grid md={12} style={experienceCardStyle} spacing={2}>
              <Box style={styles.flexCenter}>
                <Typography variant="h6" style={{ textAlign: "center" }}>
                  STUDENT TUTOR OF MATHEMATICS ( 2020 )
                </Typography>
                {/* <Button variant="outlined">Find out More</Button> */}
              </Box>
              <Typography style={{ textAlign: "center" }}>
                <WorkIcon style={styles.icon} size={12} />
                Brac University
              </Typography>
              <Typography>
                <ul>
                  <li>
                    Worked as a student tutor at Brac University's Mathematics
                    and Natural Sciences Department, where I assisted students
                    with mathematics courses and faculties with script checking.
                  </li>
                </ul>
              </Typography>
              {/* <Button
              variant="outlined"
              color="success"
              endIcon={<ChevronRightIcon />}
              >
              Find out More
            </Button> */}
              <Box
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "5%",
                }}
              >
                {/* https://i.ibb.co/VSBvGDz/practice-image.png */}
                <DetailedCard />
                <DetailedCard />
                <DetailedCard />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Experiences;
