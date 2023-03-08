// importing in react as well as all of the compontents from the material ui Library
import React from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
const profilePhoto = require ('./images/profilephoto.jpg');
// css stylings for the about me section
const css = `
    .cardContainer {
        background: #73727b;
        margin-top: 100px;
    }
    .text {
        color: white;
    }
`

// styling for the images so they all appear the same size.
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
// exporting the card that will render on the page for the about me section
export default function AboutMe() {
    return (
        <div>
            <style type = "text/css">{css}</style>
            <Paper
            className="cardContainer"
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
            }}
            >
        
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src={profilePhoto} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography className="text" gutterBottom variant="subtitle1" component="div">
                                    Hello there.
                                </Typography>
                                <Typography className="text" variant="body2" gutterBottom>
                                    I am a budding web developer and recent graduate of the Georgia Tech Full Stack Web development boot camp.I am experienced with the
                                    MERN web stack. My hobbies include preaching and playing obscure indie games. 
                                </Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
    </div>
)}