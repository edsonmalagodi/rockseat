import React from 'react';
import {Link} from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import './styles.css'

interface PageHeaderProps{
    title: string;
    description?: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) =>{
    return (
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img className="logo" src={backIcon} alt="Voltar"/>
                    </Link>                    
                </div>            
                <div className="header-content">
                    <strong>{props.title}</strong>
                    { props.description && <p>{props.description}</p> }

                    {props.children}
                </div>
            </header>
    );
}

export default PageHeader;