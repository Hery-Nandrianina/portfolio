import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import DocIcon from '@mui/icons-material/AssignmentInd';
import avatar from '../assets/images/avatar.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/hery-nandrianina" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="/portfolio/cv-hery-nandrianina.pdf" target="_blank" rel="noreferrer"><DocIcon/></a>
          </div>
          <h1>Hery Nandrianina</h1>
          <p>Full Stack Developpeur</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="/files/cv-hery-nandrianina.pdf" target="_blank" rel="noreferrer"><DocIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;