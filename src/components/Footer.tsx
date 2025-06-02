import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import DocIcon from '@mui/icons-material/AssignmentInd';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/hery-nandrianina" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="/files/cv-hery-nandrianina.pdf" target="_blank" rel="noreferrer"><DocIcon/></a>
      </div>
      <p>+261 32 60 539 21 | earnandrianina@gmail.com</p>
    </footer>
  );
}

export default Footer;