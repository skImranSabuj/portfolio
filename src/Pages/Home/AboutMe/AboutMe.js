import {
  Button,
  Card,
  CardHeader,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
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
import SectionTitle from "./SectionTitle";
import bdemrbanner from "../../../static/images/exp-bdemr.png";
import bdemrLogo from "../../../static/images/logo_bdemr.png";
import AppButton from "../../../components/components/AppButton";
import Skills from "../../../components/Skills/Skills";
import Experience from "../../../components/Experience.js/Experience";
import Biography from "../../../components/Biography/Biography";

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
    // backgroundColor: "#EB44F5",
    // height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: "5",
    padding: "1em",
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

  // const Education = () => {
  //   return (
  //     <Box sx={{}}>
  //       <Typography
  //         variant="h4"
  //         sx={{
  //           // color: 'gray',
  //           fontWeight: "500",
  //           fontSize: 28,
  //           margin: "15px 0",
  //           // backgroundColor: "red",
  //         }}
  //       >
  //         {" "}
  //         &#60; Academics /&#62;{" "}
  //       </Typography>
  //       <Box sx={{ flexGrow: 1 }}>
  //         <Grid
  //           container
  //           spacing={{ xs: 2, md: 0 }}
  //           columns={{ xs: 4, sm: 6, md: 12 }}
  //           sx={{}}
  //         >
  //           {education.map((item, index) => (
  //             <Grid xs={12} sm={6} md={4} key={index}>
  //               <Card style={styles.educationCard} sx={{ elevation: 0 }}>
  //                 <Box
  //                   style={{
  //                     borderBottom: "2px solid lightGray",
  //                     paddingTop: "10px",
  //                   }}
  //                 >
  //                   <h4>
  //                     <SchoolIcon style={{ marginRight: "10px" }} />{" "}
  //                     {item.degreeName}
  //                   </h4>
  //                 </Box>
  //                 <Box style={{ textAlign: "left", padding: "20px" }}>
  //                   <Typography variant="body1">
  //                     <AccountBalanceIcon style={styles.icon} size={12} />{" "}
  //                     {item.istitution}
  //                   </Typography>
  //                   <Typography variant="body1">
  //                     <SubjectIcon style={styles.icon} size={12} />{" "}
  //                     {item.subject}
  //                   </Typography>
  //                   <Typography variant="body1">
  //                     <InsertInvitation style={styles.icon} size={12} />{" "}
  //                     {item.passingYear}
  //                   </Typography>
  //                 </Box>
  //               </Card>
  //             </Grid>
  //           ))}
  //         </Grid>
  //       </Box>
  //     </Box>
  //   );
  // };
  const Education = () => {
    return (
      <Box
        sx={{
          // border: "1px solid black"
          padding: "0 0.8rem",
        }}
      >
        <Box sx={{ marginBottom: "2rem" }}>
          <SectionTitle title="Academics" />
        </Box>
        <Grid
          container
          // spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          // sx={{ border: "1px solid red" }}
        >
          {education.map((item, index) => (
            <Grid xs={12} sm={4} md={4} key={index}>
              <Card
                style={{
                  ...styles.educationCard,
                  // backgroundImage: `url('../../../static/images/bracu.jpg')`,
                }}
                sx={{
                  elevation: 0,
                  // boxShadow: "5px 15px 15px 5px grey",
                  // backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  // backgroundColor: "#333333",
                }}
              >
                <Box
                  sx={
                    {
                      // backgroundColor: "rgba(0,0,0,0.6)",
                      // background: `linear-gradient(-45deg, rgb(225, 234, 235, 0.8) 0%, rgba(235, 244, 245, 0.8) 35%)`,
                    }
                  }
                >
                  <Box
                    style={{
                      borderBottom: "2px solid lightGray",
                      paddingTop: "10px",
                      textAlign: "left",
                    }}
                  >
                    <h4
                      style={{
                        textAlign: "left",
                        padding: "5px 20px",
                        // color: "white",
                      }}
                    >
                      <SchoolIcon style={{ marginRight: "10px" }} />{" "}
                      {item.degreeName}
                    </h4>
                  </Box>
                  <Box
                    style={{
                      textAlign: "left",
                      padding: "20px",
                      // color: "white",
                    }}
                  >
                    <Typography variant="body1">
                      <AccountBalanceIcon style={styles.icon} size={12} />{" "}
                      {item.istitution}
                    </Typography>
                    <Typography variant="body1">
                      <SubjectIcon style={styles.icon} size={12} />{" "}
                      {item.subject}
                    </Typography>
                    <Typography variant="body1">
                      <InsertInvitation style={styles.icon} size={12} />{" "}
                      {item.passingYear}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
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
      <Biography />
      <Education />
      <Experience />
      <Skills />
    </Container>
  );
};

export default AboutMe;
