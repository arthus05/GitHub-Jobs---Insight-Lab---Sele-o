import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../Store';

// Syles
import styles from './JobCard.module.css';

// API
import API from '../../API';



export default function JobCard({
    jobTitle,
    company,
    fullTime,
    location,
    date
}) {

    return(
        <div className={ styles.mainContainer }>

            <div className={ styles.contentLeft }>
                <div className={ styles.title }>
                    <h2>{jobTitle}</h2>
                </div>
                <div className={ styles.subTitle }>
                    <p>{company} —</p>
                    <p>{fullTime}</p>
                </div>
            </div>

            <div className={ styles.contentRight }>
                <p className={ styles.location }>{location}</p>
                <p className={ styles.date }>{date}</p>
            </div>

        </div>
    );
}