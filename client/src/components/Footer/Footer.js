import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link, Route} from "react-router-dom";

function Footer() {

    return (
        <div className="footer">
            <div className="container footer-container">
                <a className="team-names" href="https://coreyportfolioreact.herokuapp.com/" target="_blank">Corey</a>
                <a className="team-names" href="https://jordidaigleportfolio.herokuapp.com/" target="_blank">Jordan</a>
                <div className="pocketdyi-logo-container">
                    <div className="pocketdyi-logo">PocketDiY</div>
                    <span className="copyright-container">&copy; 2020 CJSW, Inc.</span>
                </div>
                <a className="team-names" href="https://stevejohnson.herokuapp.com/" target="_blank">Steven</a>
                <a className="team-names" href="https://waltrevino.github.io/react_portfolio/" target="_blank">Walter</a>        
            </div>
        </div>
    )
}

export default Footer
