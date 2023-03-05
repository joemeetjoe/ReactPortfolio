import React from "react";

export default function NavTabs({ currentPage, setPage }) {
    return (
        <div>
            <h1>Joseph Hanson</h1>
            <button
            type="button"
            className="btn btn-danger"
            onClick={() => setPage('About Me')}
            >
                About Me
            </button>
            <button
            type="button"
            className="btn btn-danger"
            onClick={() => setPage('Portfolio')}
            >
            Portfolio
            </button>
            <button
            type="button"
            className="btn btn-danger"
            onClick={() => setPage('Contact')}
            >
            Contact
            </button>
            <button
            type="button"
            className="btn btn-danger"
            onClick={() => setPage('Resume')}
            >
            Resume
            </button>
        </div>
    
    )
}



