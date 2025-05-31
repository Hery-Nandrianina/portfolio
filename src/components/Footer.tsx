import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>+261 32 60 539 21 | earnandrianina@gmail.com</p>
    </footer>
  );
}

export default Footer;