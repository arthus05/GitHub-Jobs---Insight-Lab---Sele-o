import React from 'react';

import styles from './TitleComponent.module.css';

export default function TitleComponent(title) {
    return(
        <div className={ styles.mainContainer }>
            <h1>{ title }</h1>
            <div></div>
        </div>
    );
}