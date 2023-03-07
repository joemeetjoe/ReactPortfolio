import React from "react";
import { Button, Card } from '@mui/material'




export default function NavTabs({ currentPage, setPage }) {
    return (
        <div>
            <h1>Joseph Hanson</h1>
            <Button 
            variant = "contained"
            type="button"
            className="btn btn-danger"
            onClick={() => setPage('About Me')}
            >
                About Me
            </Button>
            <Button
            variant = "contained"
            type="button"
            className="btn btn-danger"
            onClick={() => setPage('Portfolio')}
            >
            Portfolio
            </Button>
            <Button
            variant = "contained"
            type="button"
            className="btn btn-danger"
            onClick={() => setPage('Contact')}
            >
            Contact
            </Button>
            <Button
            variant = "contained"
            type="button"
            className="btn btn-danger"
            onClick={() => setPage('Resume')}
            >
            Resume
            </Button>
        </div>
    
    )
}



