import { Container, Paper, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
const AboutMe = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <Container style={{ textAlign: 'center', marginTop: "-200px", borderRadius: "15px", padding: "15px 0", color: "black" }}>
            <Typography variant="h4" sx={{
                // color: 'gray',
                fontWeight: '500',
                fontSize: 28,
            }}> &#60;  About <span className='default-color'>Me</span> /&#62; </Typography>
            <Typography variant="" sx={{
                // color: 'gray',
                fontWeight: '400',
                fontSize: 14,
            }}>I am a CSE gradute, passionate programmer, Working as a junior Software Engineer at BDEMR Solution Corp. <br /> <span style={{ color: "goldenrod" }}></span> </Typography>

            {/* <Box sx={{ bgcolor: 'background.paper', width: "100%" }}> */}
            <Box sx={{ bgcolor: '', width: "100%" }}>
                {/* <AppBar position="static" className="" style={{ background: "white" }}> */}
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    // variant="fullWidth"
                    aria-label="full width tabs example"
                    centered
                    // style={{ backGround: "white" }}
                    className="default-border about-me-tabs"
                >
                    <Tab label="BIOGRAPHY" {...a11yProps(0)} />
                    <Tab label="EDUCATION" {...a11yProps(1)} />
                    <Tab label="EXPERIENCE" {...a11yProps(2)} />
                    <Tab label="SKILLS" {...a11yProps(3)} />
                    <Tab label="CERTIFICATES" {...a11yProps(4)} />
                </Tabs>
                {/* </AppBar> */}
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Paper elevation={2} sx={{ p: 2, m: 2 }} style={{ backgroundColor: '#EBF4F5' }}>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quasi officia aliquam accusamus itaque at ipsum quis? Pariatur, adipisci totam?</p>
                        </Paper>

                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4} dir={theme.direction}>
                        Item Five
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </Container >
    );
};

export default AboutMe;