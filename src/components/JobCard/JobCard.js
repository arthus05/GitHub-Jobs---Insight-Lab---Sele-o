import React from 'react';
import { useDispatch } from 'react-redux';

// Components
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

// Syles
import styles from './JobCard.module.css';

export default function JobCard({
    jobTitle,
    company,
    fullTime,
    location,
    date,
    id
}) {

    const dispatch = useDispatch();

    function onSelect() {
        window.scroll(0, 0);
        dispatch({
            type: 'SELECTED_JOB_ID',
            value: {
                id: id
            }
        });
    }

    return(
        <ScrollAnimation 
            animateIn='fadeInUp'
            duration={0.4}
            initiallyVisible={false}
            animateOnce={true}
        >
            <div onClick={ () => onSelect() } className={ styles.mainContainer }>

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
        </ScrollAnimation>
    );
}