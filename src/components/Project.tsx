import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projet Personnel</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Application e-commerce</h2></a>
                <p>Création d’une site e-commerce simple en React avec catalogue, gestion de panier et navigation interactive. Données simulées en local.</p>
            </div>
            <div className="project">
                <a href="https://delicate-figolla-1c3ad4.netlify.app/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://delicate-figolla-1c3ad4.netlify.app/" target="_blank" rel="noreferrer"><h2>Movie API</h2></a>
                <p>Application React consommant l’API TMDB pour afficher les films récents avec titres, affiches et notes, mise à jour dynamique selon l’actualité cinéma.</p>
            </div>
            <div className="project">
                <a href="https://dashing-hamster-7b28ef.netlify.app/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://dashing-hamster-7b28ef.netlify.app/" target="_blank" rel="noreferrer"><h2>Blog Firebase</h2></a>
                <p>Blog développé avec React et Firebase (Firestore + Auth) permettant la publication d’articles, l’authentification utilisateur et la gestion des données en temps réel.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;