import React from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
const pokemon = require('./images/Pokemon.png');
const groceries = require('./images/groceryList.png');
const socialNetwork = require('./images/socialNetwork.png');
const metroidFanPage = require('./images/metroidFanPage.png');
const employee = require('./images/employee.png');
const jate = require('./images/JATE.png');

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const portfolioContent = [
    {
    id: 0,
    imgSource: pokemon,
    name: 'Pokedex',
    desc: 'This project uses fetch calls to existing apis to render images and info to the page dynamically.',
    link: 'https://github.com/StamperM/velocirapt-vars--pokedex',
    },
    {
    id: 1,
    imgSource: groceries,
    name: 'Grocery List App',
    desc: 'This project uses SQL to store data and express to route to different pages. It also utilizes tulio to allow the user to text the app.',
    link: 'https://github.com/pppzlt/bc-project2',
    },
    {
    id: 2,
    imgSource: socialNetwork,
    name: 'Social Network Backend',
    desc: 'This project uses express and mongo db to form a backend of a social network.',
    link: 'https://github.com/joemeetjoe/SocialNetworkAPI',
    },
    {
    id: 3,
    imgSource: metroidFanPage,
    name: 'Metroid Fan Page',
    desc: 'This project uses vanilla HTML and CSS to create a reactive webpage that formats to different screen sizes.',
    link: 'https://github.com/joemeetjoe/Metroid-fan-page',
    },
    {
    id: 4,
    imgSource: employee,
    name: 'EmployeeTracker',
    desc: 'This project uses NODE JS, express, and mySQL to create an Employee tracker for users to keep track of their work force.',
    link: 'https://github.com/joemeetjoe/EmployeeTracker',
    },
    {
    id: 5,
    imgSource: jate,
    name: 'J.A.T.E. just another text editor',
    desc: 'This project uses webpack to create a site that can work offline, cache important data, and be downloaded as an app on the desktop.',
    link: 'https://github.com/joemeetjoe/Text-editor',
    },
] 

const css = `
    .cardContainer {
        background: #73727b;
        margin-top: 30px;

    }
    .text {
        color: white;
    }
    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap
        margin-top: 30px;
    }
`
export default function Portfolio() {
    const listPortfolio = portfolioContent.map(content =>
        <div className="container">
            <style type = "text/css">{css}</style>
            <Paper
            key = {content.id}
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
                            <Img alt="complex" src={content.imgSource} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography className="text" gutterBottom variant="subtitle1" component="div">
                                    {content.name}
                                </Typography>
                                <Typography className="text" variant="body2" gutterBottom>
                                    {content.desc}
                                </Typography>
                                <Link className="text" href= {content.link}>
                                    Github Repo
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
        )
    return (
        <div>{listPortfolio}</div>
    )
}
