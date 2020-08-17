import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './Navbar.module.css';

import SearchBar from '../SearchBar/SearchBar';

export default function Navbar() {

    const dispatch = useDispatch();

    function onSubmit() {
        window.scroll(0, 0);
        dispatch({
            type: 'SEARCH_PARAMS',
            value: {
                description: '',
                location: '',
                full_time: true
            }
        });
    }

    return(
        <div className={ styles.mainContainer }>
            <header className={ styles.navbarContainer }>
                <Link to='/' onClick={ () => onSubmit() }>
                    <img src='https://jobs.github.com/images/layout/logo.png'/>
                </Link>
                <nav className={ styles.linksContainer }>
                    <Link to='/' onClick={ () => onSubmit() }>All jobs</Link>
                    <a>Post a job</a>
                    <Link to='/faq'>How it works</Link>
                </nav>
            </header>
        </div>
    );
}