import React from "react";
const pokemon = require('./images/Pokemon.png');
const groceries = require('./images/groceryList.png');
const socialNetwork = require('./images/socialNetwork.png');
const metroidFanPage = require('./images/metroidFanPage.png');
const employee = require('./images/employee.png');
const jate = require('./images/JATE.png');

export default function Portfolio() {
    return (
        <div>
            <card>
                <img src = {pokemon}></img>
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
        </div>
    )
}
    