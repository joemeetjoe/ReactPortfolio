import React from "react";
import { Card } from "@mui/material"

const css = `
    .card {
        background: #73727b;
        color: white;
        margin: 30px;
        padding: 30px;
    }
    .articleHeader {
        color: white;   
    }
    a {
        color: white;
    }
    .cardLink {
        background: #73727b;
        color: white;
        padding: 10px;
        margin: 20px;
        margin-left: 30px;
        max-width: 140px;
    }
`

export default function Resume() {
    return (
        <div>
            <style type = "text/css">{css}</style>
            <Card className = "cardLink">
                <a href='CopyOfResume.pdf' download>Click to download Resume</a>
            </Card>
            
            <Card className="card">
            <h1 className="articleHeader">
                Experience
            </h1>
            
                <h2>
                    International Fire Protection, Austell GA — NICET III Fire Inspector
                    2015 - 2019, 2020-2021
                </h2>
                <p>
                    Accomplishments include completing on the job training and NICET
                    certifications. (Equivalent to a 4 year degree.) This involved having at
                    least 5 years experience, passing qualifying certification testing, and
                    being evaluated by my peers. Responsibilities included inspecting,
                    testing, and maintaining fire protection systems at commercial facilities
                    ranging from department stores to power plants and hospitals. This
                    position required that I was able to manage large jobs, memorize code
                    standards, take on the liability of inspecting fire protection systems, and
                    record all the data clearly and thoroughly in an inspection report.
                    Customer relations were key. Part of my responsibilities included sales of
                    accounts as well. My star accomplishment was managing and inspecting
                    the Georgia Power Plant Bowen account.
                </p>
            

                <h2>
                    International Fire Protection, Austell GA —
                    Estimator/Project Manager 2021-2022

                </h2>
                <p>
                    Accomplishments of this position were taking a backlog of approximately
                    800 jobs and reducing them down to under 100, as well as selling around
                    1.7 million dollars worth of work in the course of a year. Expectations
                    were to sell and project manage around 100,000 dollars a month in repair
                    work. The month of my departure I had pushed that average to 200,000
                    and even managed to sell 400,000 one month. Responsibilities included
                    receiving inspection reports, estimating the price of repairs needed to get
                    the fire protection systems up to code, and selling that to the customer.
                    Upon the sale, I was expected to schedule the job, order parts,
                    communicate the needs to our team and deploy a technician to the site.
                    Upon completion, I was required to bill the job and collect payment. I was
                    trusted with helping to manage a team of approximately 10 technicians.
                    My start accomplishment was selling around 400,000 dollars worth of
                    work in my last month of employment.
                </p>
            
                <h2>
                    Fire and Life Safety America, Norcross GA — NICET III Fire Inspector
                    2019-2020
                </h2>
                <p>
                    Accomplishments include managing several hospital systems, most
                    notably Emory Midtown Hospitals and Grady Hospitals. Responsibilities
                    included inspecting, testing, and maintaining fire protection systems at
                    commercial facilities ranging from apartment complexes to hospitals.
                    This position required that I was able to manage large jobs, memorize
                    code standards, take on the liability of inspecting fire protection systems,
                    and record all the data clearly and thoroughly in an inspection report.
                    Customer relations were key. My star accomplishment was managing and
                    inspecting the Grady account.
                </p>
                <h2>
                    Grace City Church, Temple GA — Youth Pastor, Elder 2016-Present
                </h2>
                <p>
                    Accomplishments include managing a team of around 10-15 adults to lead
                    a mentorship style structure in our youth group, as well as spiritually lead
                    a congregation of approximately 100-150 people. I currently co-pastor a
                    house church within a larger house church collective. Responsibilities
                    include spiritually leading a congregation on a weekly basis, mentoring
                    adults and teenagers, making important financial decisions on behalf of
                    the church, preparing and delivering sermons, and speaking publicly
                    often. My star accomplishment was mentoring a group of young teens
                    over the course of several years and watching them grow into leaders
                    themselves.
                </p>

                <h2>
                    JR Hanson Homes, Villa Rica Ga, Small Business Owner 2016-Present
                </h2>
                <p>
                    I currently run a small business with my wife running long term and short
                    term rentals (Airbnbs.) Accomplishments include working alongside my
                    wife to open and manage three separate rental properties that we
                    currently own. Challenges included learning the basics of small business
                    ownership, project managing and budgeting for the opening of our airbnb
                    properties, and opening an LLC. Our star accomplishment was opening
                    our first airbnb located in blue ridge, GA in January of this year.
                </p>
            </Card>
            <Card className="card">
            <h1 className="articleHeader">
                Education 
            </h1>
                <h2>
                    NICET III-Certification
                </h2>
                <p>
                    License number IL0000915. This is equivalent to a 4 year degree.
                    Requirements for level I were at least a year of experience in the field,the
                    passing of three exams testing on knowledge of the code, and a peer
                    review of 3 people in the industry. Requirements of level II were at least 2
                    years of experience in the field, the passing of three additional exams
                    testing on knowledge of the code, and a peer review of 3 people in the
                    industry. Requirements of level III were at least 5 years of experience in
                    the field, the passing of two additional exams testing on knowledge of the
                    code and peer review of 3 people in the industry. The state of Georgia
                    required that I complete continuing education every year to keep my
                    license up to date.
                </p>

                <h2>
                    Georgia Tech, North Ave NW, Atlanta, GA 30332 — Bootcamp Graduation Certificate
                </h2>
                <p>
                    I am a current student in the full stack web development course hosted by
                    Georgia Tech. We are currently learning the MERN full stack, as well as
                    the principles of Agile software development. Graduation date is March
                    13, 2023.
                </p>

            </Card>
            


        </div>
    )
}
    