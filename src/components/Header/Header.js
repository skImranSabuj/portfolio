import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Header = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // const { user, logOut } = useAuth();
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper', p: 3 }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Home" />
                <Tab label="About me" />
                <Tab label="Skills" />
                <Tab label="Projects" />
                <Tab label="Contact" />
            </Tabs>
        </Box>
    );
};

export default Header;