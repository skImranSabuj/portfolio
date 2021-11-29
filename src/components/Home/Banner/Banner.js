import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import dp from '../../../images/dp_b2.png'

const Banner = () => {
    const location = useLocation();
    let url = "https://drive.google.com/file/d/1kcC6R9dx02CzOY4EQqRWSWUJtnB0ep1P/view";
    const getResume = () => {

    }
    return (
        <Container>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                    <img src={dp} alt="Sabuj" width="300" height="auto" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" component="h2">
                        This is
                    </Typography>
                    <Typography variant="h2" component="h2">
                        Khaja Sheikh Imran Sabuj
                    </Typography>
                    <Button variant="contained"><a href={url} target="_blank">Get Resume</a></Button>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;