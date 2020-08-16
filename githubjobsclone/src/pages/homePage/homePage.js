import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../Store';

// Styles
import styles from './HomePage.module.css';

// Components
import TitleComponent from '../../components/TitleComponent/TitleComponent';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';

// API
import API from '../../API';
import JobCard from '../../components/JobCard/JobCard';

export default function HomePage() {

    const searchResponse = useSelector(state => state.params);
    
    const[jobState, setJobState] = useState([]);

    useEffect(() => {
        API.get(`positions.json?description=${searchResponse.description}&location=${searchResponse.location}&full_time=${searchResponse.full_time}`)
            .then((res) => setJobState(res.data));
    }, [searchResponse])

    function paginate() {
        API.get(`positions.json?description=${searchResponse.description}&location=${searchResponse.location}&full_time=${searchResponse.full_time}&page=${1}`)
            .then((res) => setJobState(res.data));
    }

    console.log(jobState)

    return(
        <div className={ styles.mainContainer }>
            <div className={ styles.insideContainer }>
                <SearchBar />
                <section className={ styles.pageContainer }>
                    <section className={ styles.headerContainer }>
                        {TitleComponent('Featured Jobs')}
                        {jobState.map(cur =>
                            <div className={ styles.jobCardContainer }>
                                <JobCard 
                                    jobTitle={cur.title}
                                    company={cur.company}
                                    fullTime={cur.type}
                                    location={cur.location}
                                    date={cur.created_at}
                                    key={cur.id}
                                />
                            </div>
                        )}
                    </section>
                    
                    <button onClick={() => paginate()}>
                        PAGINAAAA
                    </button>
                </section>
            </div>    
            <Footer />
        </div>
    );
}