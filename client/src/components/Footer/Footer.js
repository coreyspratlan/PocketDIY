import React from 'react'
import {ExternalLink} from "react-external-link"

function Footer() {

    return (
        <div className="footer">
            <div className="container footer-container">
                <ExternalLink className="team-names" href="https://coreyportfolioreact.herokuapp.com/">Corey</ExternalLink>
                <ExternalLink className="team-names" href="https://jordidaigleportfolio.herokuapp.com/">Jordan</ExternalLink>
                <div className="pocketdyi-logo-container">
                    <div className="pocketdyi-logo">PocketDiY</div>
                    <span className="copyright-container">&copy; 2020 CJSW, Inc.</span>
                </div>
                <ExternalLink className="team-names" href="https://stevejohnson.herokuapp.com/">Steven</ExternalLink>
                <ExternalLink className="team-names" href="https://waltrevino.github.io/react_portfolio/">Walter</ExternalLink>        
            </div>
        </div>
    )
}

export default Footer
