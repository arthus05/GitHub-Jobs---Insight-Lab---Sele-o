import React from 'react';

import styles from './Footer.module.css';

export default function Footer() {
    return(
        <div className={ styles.mainContainer }>
            <footer className={ styles.footerContainer }>
                <div className={ styles.insideContainer }>
                    <nav className={ styles.footerNav }>
                        <a>The GitHub Blog</a>
                        <a>Contact</a>
                        <a>Privacy</a>
                        <a>Terms</a>
                        <a>API</a>
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