import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

export default function Footer() {
    return(
        <div className={ styles.mainContainer }>
            <footer className={ styles.footerContainer }>
                <div className={ styles.insideContainer }>
                    <nav className={ styles.footerNav }>
                        <a target='blank' href='https://github.blog/'>The GitHub Blog</a>
                        <a target='blank' href='https://support.github.com/'>Contact</a>
                        <a target='blank' href='https://docs.github.com/en/github/site-policy/github-privacy-statement'>Privacy</a>
                        <a target='blank' href='https://docs.github.com/en/github/site-policy/github-terms-of-service'>Terms</a>
                        <Link to='/api'>API</Link>
                    </nav>
                    <a className={ styles.gitHubIcon } href='https://github.com'>
                        <img src='https://jobs.github.com/images/layout/invertocat.png' alt='GitHub Icon'/>
                    </a>
                    <div className={ styles.waterMark }>
                        <p>© 2020 GitHub Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}