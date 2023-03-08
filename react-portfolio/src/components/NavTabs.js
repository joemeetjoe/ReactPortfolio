import React from "react";
import { Button, Card } from '@mui/material'

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
    header {
    }
`




export default function NavTabs({ currentPage, setPage }) {
    return (
        <div>
            <header>
                <style type = "text/css">{css}</style>
                <h1>Joseph Hanson</h1>
                <Button 
                variant = {currentPage === 'About Me' ? 'outlined' : 'contained'}
                type="button"
                className="btn"
                onClick={() => setPage('About Me')}
                >
                    About Me
                </Button>
                <Button
                variant = {currentPage === 'Portfolio' ? 'outlined' : 'contained'}
                type="button"
                className="btn btn-danger"
                onClick={() => setPage('Portfolio')}
                >
                Portfolio
                </Button>
                <Button
                variant = {currentPage === 'Contact' ? 'outlined' : 'contained'}
                type="button"
                className="btn btn-danger"
                onClick={() => setPage('Contact')}
                >
                Contact
                </Button>
                <Button
                variant = {currentPage === 'Resume' ? 'outlined' : 'contained'}
                type="button"
                className="btn btn-danger"
                onClick={() => setPage('Resume')}
                >
                Resume
                </Button>
            </header>
        </div>
    
    )
}



