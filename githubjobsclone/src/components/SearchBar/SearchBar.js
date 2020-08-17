import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './SearchBar.module.css';

// Components
import HomePage from '../../pages/HomePage/HomePage';
import Modal from 'react-modal';

// Images
import atomIcon from '../../images/1024px-Feed-icon.svg.png';
import twitterIcon from '../../images/190-1903304_twitter-t-icon-logo-vector-twitter-t-logo-vector.png'

const customStyles = {
    content : {
        top        : '50%',
        left       : '50%',
        right      : 'auto',
        bottom     : 'auto',
        marginRight: '-50%',
        transform  : 'translate(-50%, -50%)'
    }
  };

export default function SearchBar() {

    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#444444';
    }
    
    function closeModal(){
        setIsOpen(false);
    }

    const dispatch = useDispatch();

    function onSubmit() {
        dispatch({
            type: 'SEARCH_PARAMS',
            value: {
                description: descriptionValue,
                location: locationValue,
                full_time: onCheck,
                page: 0
            }
        });
    }

    const[onCheck, setOnCheck] = useState(false);
    const[descriptionValue, setDescriptionValue] = useState('');
    const[locationValue, setLocationValue] = useState('');

    return (
        <div className={ styles.mainContainer }>
                <section className={ styles.formContainer }>
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
                </section>
                <section className={ styles.adsContainer }>

                    <div className={ styles.topLine }></div>

                    <section className={ styles.adsLink }>
                        <a target='blank' href='https://jobs.github.com/positions.atom?description=&location='><img src={ atomIcon } />Subscribe to Atom Feed</a>
                    </section>
                    <section className={ styles.adsLink }>
                        <a className={styles.ttLink} target='blank' href='https://twitter.com/githubjobs'><img src={ twitterIcon } />Folow GitHub Jobs on Twitter</a>
                    </section>

                    <div className={ styles.botLine }></div>
                    
                    <section className={ styles.subscribe }>
                        <h2>Subscribe to email updates</h2>
                        <p>Subscribe and we’ll send you a summary once a week if new jobs are posted to this list.</p>
                        <button onClick={openModal}>Subscribe to updates</button>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                            >
                            <div className={ styles.modalContainer }>
                                <h2 ref={_subtitle => (subtitle = _subtitle)}>Subscribe by Email</h2>
                                <p className={ styles.mayara }>We promise not to spam or share your email.</p>
                                <input type='text'/>
                                <button >Subscribe</button>
                            </div>
                        </Modal>
                    </section>
                </section>
        </div>
    );
}
