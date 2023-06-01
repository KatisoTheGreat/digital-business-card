import React from "react";
import Github from "../images/github_icon.png"
import LinkedIn from "../images/linkedin_icon.png"
import Gmail from "../images/gmail_icon.png"
import Twitter from "../images/twitter_icon.png"
import Instagram from "../images/instagram_icon.png"

function Footer() {
    return(
        <div className="footer-icons">
            <img src={Github} alt=""/>
            <img src={LinkedIn} alt=""/>
            <img src={Gmail} alt=""/>
            <img src={Twitter} alt=""/>
            <img src={Instagram} alt=""/>
        </div>
    )
}

export default Footer