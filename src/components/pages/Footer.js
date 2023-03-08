// importing in react and the components from material UI
import React from "react";
import { Button, Card } from '@mui/material'
// css stylings for the footer portion of the page
const css = `
    .btn {
        background: #454851;
        margin-left: 10px;
    }
    h1 {
        color: #454851;
        max-width: 100px;
        display: inline;
    }
    footer {
        display: flex;
        justify-content: center;

        margin-top: 100px;

    }
`
// rendering the footer portion of the page
export default function Footer() {
    return (
        <div>
            <footer>
                <style type = "text/css">{css}</style>
                <Button 
                variant = "contained"
                type="button"
                className="btn"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href ='https://github.com/joemeetjoe';
                }}
                >
                    Github
                </Button>
                <Button
                variant = "contained"
                type="button"
                className="btn btn-danger"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href ='https://www.facebook.com/joemeetjoe';
                }}
                >
                Facebook
                </Button>
                <Button
                variant = "contained"
                type="button"
                className="btn btn-danger"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href ='https://www.linkedin.com/in/joseph-hanson-792976261/';
                }}
                >
                LinkedIn
                </Button>
            </footer>
        </div>
    
    )
}
