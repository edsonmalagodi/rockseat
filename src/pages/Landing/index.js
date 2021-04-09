import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';
import LandingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/notebook.png';
import giveClassesIcon from '../../assets/images/icons/class.png';
import './styles.css';

function Landing(){
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={LandingImg} alt="" className="hero-image"/>

                <div className="buttons-container">
                   <Link to="/study" className="study">  
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                   </Link>

                   <Link to="/give-classes" className="give-classes">  
                        <img src={giveClassesIcon} alt="Ensinar"/>
                        Dar aula
                   </Link>
                </div>

                <span className="total-connections">
                    total de 200 conexoes ja realizadas 
                </span>
            </div>
        </div>
    )
}

export default Landing;