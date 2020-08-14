import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

export default function Navbar() {
    return(
        <div className={ styles.mainContainer }>
            <header className={ styles.navbarContainer }>
                <Link to='/'>
                    <img src='https://jobs.github.com/images/layout/logo.png'/>
                </Link>
                <nav className={ styles.linksContainer }>
                    <a>All jobs</a>
                    <a>Post a job</a>
                    <a>How it works</a>
                </nav>
            </header>
        </div>
    );
}