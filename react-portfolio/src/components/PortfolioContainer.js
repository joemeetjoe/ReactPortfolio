import React, { useEffect, useState } from "react";
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe'
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio"
import Footer from "./pages/Footer"


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About Me');

function RenderPage(){
    if (currentPage === 'About Me') {
        return <AboutMe/>;
    }
    else if (currentPage === 'Portfolio') {
        return <Portfolio/>;
    }
    else if (currentPage === 'Contact') {
        return <Contact/>;
    }
    else if (currentPage === 'Resume') {
        return <Resume/>;
    }
}

    let setPage = (event) => {
        setCurrentPage(event);
    }

    return (
        <div>
            <NavTabs currentPage= {currentPage} setPage ={setPage}/>
                {<RenderPage/>}
            {<Footer/>}
        </div>
        
    )
}

