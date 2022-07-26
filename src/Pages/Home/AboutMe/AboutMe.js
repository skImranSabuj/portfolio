import {
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { education } from "../../../static/education";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import InsertInvitation from "@mui/icons-material/InsertInvitation";
import SubjectIcon from "@mui/icons-material/Subject";
import WorkIcon from "@mui/icons-material/Work";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const styles = {
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexCenterSpcaeBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabItem: {
    backgroundColor: "#EBF4F5",
    // height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: "5",
    padding: "50px",
  },
  educationCard: {
    margin: "10px",
    elevation: "0",
  },
  icon: {
    margin: "10px 0",
    marginRight: "10px",
    fontSize: 16,
  },
};

const AboutMe = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    // setInterval(changeTab, 5000);
  }, []);

  function changeTab() {
    if (value === 4) setValue(0);
    else {
      setValue(value + 1);
    }
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const Education = () => {
    return (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {education.map((item, index) => (
          <Grid xs={12} sm={4} md={4} key={index}>
            <Card style={styles.educationCard} sx={{ elevation: 0 }}>
              <Box
                style={{
                  borderBottom: "2px solid lightGray",
                  paddingTop: "10px",
                }}
              >
                <h4>
                  <SchoolIcon style={{ marginRight: "10px" }} />{" "}
                  {item.degreeName}
                </h4>
              </Box>
              <Box style={{ textAlign: "left", padding: "20px" }}>
                <Typography variant="body1">
                  <AccountBalanceIcon style={styles.icon} size={12} />{" "}
                  {item.istitution}
                </Typography>
                <Typography variant="body1">
                  <SubjectIcon style={styles.icon} size={12} /> {item.subject}
                </Typography>
                <Typography variant="body1">
                  <InsertInvitation style={styles.icon} size={12} />{" "}
                  {item.passingYear}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };
  const Skills = () => {
    return (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {education.map((item, index) => (
          <Grid xs={12} sm={4} md={4} key={index}>
            <Card style={styles.educationCard} sx={{ elevation: 0 }}>
              <Box
                style={{
                  borderBottom: "2px solid lightGray",
                  paddingTop: "10px",
                }}
              >
                <h4>
                  <SchoolIcon style={{ marginRight: "10px" }} />{" "}
                  {item.degreeName}
                </h4>
              </Box>
              <Box style={{ textAlign: "left", padding: "20px" }}>
                <Typography variant="body1">
                  <AccountBalanceIcon style={styles.icon} size={12} />{" "}
                  {item.istitution}
                </Typography>
                <Typography variant="body1">
                  <SubjectIcon style={styles.icon} size={12} /> {item.subject}
                </Typography>
                <Typography variant="body1">
                  <InsertInvitation style={styles.icon} size={12} />{" "}
                  {item.passingYear}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  const Experience = () => {
    return (
      <Box sx={{ flexGrow: 1, textAlign: "left" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid
            item
            xs={12}
            // style={{ border: "2px solid black" }}
          >
            {/* <Typography variant="h6">
              JUNIOR SOFTWAREENGINEER (November 2021 - Present)
            </Typography> */}
            <Box style={{}}>
              <Typography variant="h6">
                JUNIOR SOFTWAREENGINEER (November 2021 - Present)
              </Typography>
              {/* <Button variant="outlined">Find out More</Button> */}
            </Box>
            <Typography>
              <WorkIcon style={styles.icon} size={12} />
              BDEMR Solutions Corp.
            </Typography>
            <ul style={{ textAlign: "justify" }}>
              <li>
                Building BDEMR TeleDoc App with React Native. Key Features
                includes appoinment booking, payment from wallet wallet,
                Medicine and Vital tracking. Role Based access features.
                Organization and user management.
              </li>
              <li>
                Developed an Email Marketing Web App named as BDEMR Email
                Autoresponder That automatically responds to emials with user
                selected templates and delay also can broadcast emails. Mainly
                build with ReactJs, Gmail API, emailjs-imapclient, NodeJs and
                MongoDB
              </li>
              <li>
                Worked on fixing bugs and improving BDEMR Patient App and Doctor
                App build with Polymer and Coffeescript
              </li>
            </ul>
            <Button
              variant="outlined"
              color="success"
              endIcon={<ChevronRightIcon />}
            >
              <NavLink
                to="experiences"
                style={{ textDecoration: "none", color: "green" }}
                //   style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contributions
              </NavLink>
            </Button>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Box style={styles.flexCenterSpcaeBetween}>
              <Typography variant="h6">
                STUDENT TUTOR OF MATHEMATICS ( 2020 )
              </Typography>
              {/* <Button variant="outlined">Find out More</Button> */}
            </Box>
            <Typography>
              <WorkIcon style={styles.icon} size={12} />
              Brac University
            </Typography>
            <Typography>
              <ul>
                <li>
                  Worked as a student tutor at Brac University's Mathematics and
                  Natural Sciences Department, where I assisted students with
                  mathematics courses and faculties with script checking.
                </li>
              </ul>
            </Typography>
            <Button
              variant="outlined"
              color="success"
              endIcon={<ChevronRightIcon />}
            >
              Find out More
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const Biography = () => {
    return (
      <Box>
        <Typography
          variant="h4"
          sx={{
            // color: 'gray',
            fontWeight: "500",
            fontSize: 28,
            marginBottom: "15px",
          }}
        >
          {" "}
          &#60; About <span className="default-color">Me</span> /&#62;{" "}
        </Typography>
        <Typography>
          I am a Computer Science graduate currently working as a Jr. Software
          Engineer who is passionate about programming, development and enjoys
          learning/working with existing or new technologies. Moreover, I can
          learn quickly, and adopt with new techs and environments with
          dedication.
        </Typography>
      </Box>
    );
  };
  return (
    <Container
      style={{
        textAlign: "center",
        // marginTop: "-300px",
        borderRadius: "15px",
        padding: "15px 0",
        color: "black",
      }}
    >
      {/* <Typography
        variant=""
        sx={{
          // color: 'gray',
          fontWeight: "400",
          fontSize: 14,
        }}
      >
        I am a CSE gradute, passionate programmer, Working as a junior Software
        Engineer at BDEMR Solution Corp. <br />{" "}
        <span style={{ color: "goldenrod" }}></span>{" "}
      </Typography> */}

      {/* <Box sx={{ bgcolor: 'background.paper', width: "100%" }}> */}
      <Box sx={{ bgcolor: "", width: "100%" }}>
        {/* <AppBar position="static" className="" style={{ background: "white" }}> */}
        <Box
          style={{ ...styles.flexCenter }}
          sx={{
            flexGrow: 1,
            // maxWidth: { xs: 320, sm: 480 },
            bgcolor: "background.paper",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="scrollable"
            // scrollButtons
            aria-label="full width tabs example"
            centered
            // style={{ backGround: "white" }}
            className="default-border about-me-tabs"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                "&.Mui-disabled": { opacity: 0.3 },
              },
              p: 2,
            }}
          >
            <Tab label="BIOGRAPHY" {...a11yProps(0)} />
            <Tab label="EDUCATION" {...a11yProps(1)} />
            <Tab label="EXPERIENCE" {...a11yProps(2)} />
            <Tab label="SKILLS" {...a11yProps(3)} />
            <Tab label="CERTIFICATES" {...a11yProps(4)} />
          </Tabs>
        </Box>
        {/* </AppBar> */}
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Paper
              sx={{ p: 5, m: 2 }}
              style={styles.tabItem}
              xs={12}
              sm={4}
              md={4}
            >
              <Biography />
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Paper
              sx={{ p: 5, m: 2 }}
              style={styles.tabItem}
              xs={12}
              sm={4}
              md={4}
            >
              <Education />
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Paper style={styles.tabItem}>
              <Experience />
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Paper style={styles.tabItem}>
              <Skills />
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <Paper style={styles.tabItem}>
              <Education />
            </Paper>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Container>
  );
};

export default AboutMe;
