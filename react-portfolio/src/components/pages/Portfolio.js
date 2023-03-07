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

export default function Portfolio() {
    return (
        <div>
            <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            >
        
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src={pokemon} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Pokedex app
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    This project uses fetch calls to existing apis to render images and info to the page dynamically.
                                </Typography>
                                <Link href= 'https://github.com/StamperM/velocirapt-vars--pokedex'>
                                    Github Repo
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

            <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            >
        
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src={groceries} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Grocery List App
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    This project uses SQL to store data and express to route to different pages. It also utilizes tulio to allow the user to text the app.
                                </Typography>
                                <Link href= 'https://github.com/pppzlt/bc-project2'>
                                    Github Repo
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

            <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            >
        
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src={socialNetwork} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Social Network Backend
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    This project uses express and mongo db to form a backend of a social network. 
                                </Typography>
                                <Link href= 'https://github.com/joemeetjoe/SocialNetworkAPI'>
                                    Github Repo
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

            <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            >
        
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src={metroidFanPage} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Metroid Fan Page
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    This project uses vanilla HTML and CSS to create a reactive webpage that formats to different screen sizes. 
                                </Typography>
                                <Link href= 'https://github.com/joemeetjoe/Metroid-fan-page'>
                                    Github Repo
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

            <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            >
        
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src={employee} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    EmployeeTracker
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    This project uses NODE JS, express, and mySQL to create an Employee tracker for users to keep track of their work force. 
                                </Typography>
                                <Link href= 'https://github.com/joemeetjoe/EmployeeTracker'>
                                    Github Repo
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

            <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            >
        
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src={jate} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    J.A.T.E. just another text editor
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    This project uses webpack to create a site that can work offline, cache important data, and be downloaded as an app on the desktop. 
                                </Typography>
                                <Link href= 'https://github.com/joemeetjoe/Text-editor'>
                                    Github Repo
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
        


            
    )
}
    

{/* <card> */}
                {/* <img src = {pokemon}></img>
                <a href = 'https://github.com/StamperM/velocirapt-vars--pokedex'>Pokedex App</a>
            </card>
            <card>
                <img src = {groceries}></img>
                <a href = 'https://github.com/pppzlt/bc-project2'>Grocery List App</a>
            </card>
            <card>
                <img src = {socialNetwork}></img>
                <a href = 'https://github.com/joemeetjoe/SocialNetworkAPI'>Social Network Backend</a>
            </card>
            <card>
                <img src = {metroidFanPage}></img>
                <a href = 'https://github.com/joemeetjoe/Metroid-fan-page'>Metroid Fan Page</a>
            </card>
            <card>
                <img src = {employee}></img>
                <a href = 'https://github.com/joemeetjoe/EmployeeTracker'>EmployeeTracker</a>
            </card>
            <card>
                <img src = {jate}></img>
                <a href = 'https://github.com/joemeetjoe/Text-editor'>JATE</a>
            </card>
        </div> */}