import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './SearchBar.module.css';

export default function SearchBar() {

    const dispatch = useDispatch();

    function onSubmit() {
        dispatch({
            type: 'SEARCH_PARAMS',
            value: {
                description: descriptionValue,
                location: locationValue,
                full_time: onCheck
            }
        });
    }

    const[onCheck, setOnCheck] = useState(false);
    const[descriptionValue, setDescriptionValue] = useState('');
    const[locationValue, setLocationValue] = useState('');

    return (
        <div className={ styles.mainContainer }>
            <div className={ styles.formContainer }>
                <div className={ styles.inputContainer }>
                    <label for='description'>Job Description</label>
                    <input value={ descriptionValue } onChange={ cur => setDescriptionValue(cur.target.value) } type='text' name='description' placeholder='Filter by title, benefits, companies, expertise' />
                </div>

                <div className={ styles.inputContainer }>
                    <label for='location'>Location</label>
                    <input value={ locationValue } onChange={ cur => setLocationValue(cur.target.value) } type='text' name='location' placeholder='Filter by city, state, zip code or country' />
                </div>

                <div className={ styles.checkboxContainer }>
                    <div onClick={ () => setOnCheck(!onCheck) }>
                        <input checked={ onCheck } type='checkbox' name='checkbox'/>
                        <span></span>
                    </div>
                    <label for='checkbox'>Full Time Only</label>
                </div>

                <div className={ styles.searchButton }>
                    <button onClick={ () => onSubmit() }>Search</button>
                </div>
            </div>
        </div>
    );
}
